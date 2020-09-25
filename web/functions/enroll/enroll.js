/* eslint-disable */
// for a full working demo of Netlify Identity + Functions, see https://netlify-gotrue-in-react.netlify.com/

const fetch = require("node-fetch");
const base64 = require('base-64')
const mailchimp = require('@mailchimp/mailchimp_marketing')
const md5 = require("md5");


exports.handler = async function (event, context) {
  console.log('Subscribe API Hit')
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const errorGen = msg => ({ statusCode: 500, body: msg })

  try {
    const SERVER_PREFIX = "us3"
    const LIST_ID = "a265105f9b"

    mailchimp.setConfig({
      apiKey: process.env.MAILCHIMP_KEY,
      server: SERVER_PREFIX,
    });

    const { email, tags } = JSON.parse(event.body);
    console.log({ tags })

    if (!email) {
      return errorGen('Missing Email')
    }

    const subscriberHash = md5(email.toLowerCase());

    const response = await mailchimp.lists.setListMember(
      LIST_ID,
      subscriberHash,
      {
        email_address: email,
        status_if_new: "pending",
        status: "pending"
      }
    );

    // add Tags
    if (tags) {
      // compose with html
      const putUrl = `https://server.api.mailchimp.com/3.0/lists/${LIST_ID}/members/${subscriberHash}/tags`

      const body = {
        tags: tags
      };

      fetch(putUrl, {
        method: 'post',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      })
        .then(res => {
          console.log({ response: res.json() })
        })
        .then(json => console.log(json));
      // const tagsResponse = await mailchimp.lists.updateListMemberTags(
      //   LIST_ID,
      //   subscriberHash,
      //   tags
      // );
      // console.log({ tagsResponse })
    }


    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(response)
    }

  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
    }
  }
};
