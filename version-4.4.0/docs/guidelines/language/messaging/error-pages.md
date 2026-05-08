# Error pages

> Well written error pages transform a potentially frustrating user experience into a clear, helpful one using simple and empathetic words to explain the problem and guide users to the next step.

#

## Error pages template

We follow these templates when creating our main error pages. Although some of the call-to-action examples are use case-dependent and not always technically feasible, aim for ensuring users can move forward from the error page.

| HTTP code | Heading | Description | Actions |
|-----------|-------|-------------|----------------------|
| 400 | Bad request | Failed to process the request. Check your request and try again. | Go backTry againOpen homepage |
| 401 | Unauthorized | Authorization is required to access this page. Check your credentials and try again. | Log inGo backTry again |
| 403 | Access forbidden | Use case 1: You do not have access to this page. Contact your administrator for access. | Open homepageGo back |
| | | Use case 2: You do not have access to this page. Request access here or return to homepage. | Request accessGo backOpen homepage |
| 404 | Not found | We’re not able to find that page. It may have been deleted or moved. | Report issueOpen homepageSearch app |
| 500 | Internal server error | This page is not available right now. Try refreshing the page or try again later. | ReloadGo backOpen homepage |

## General rules 

Use the official code and definition so users can search for code terms and information themselves.

- 401 Unauthorized

- 401 Unlawful

Use language suitable for all target users, including non-native English speakers.

- This page is not available right now. Try again later.

- An unforeseen server-side condition prevented the fruitful processing of your request. This indicates an issue within our infrastructure, not a client-side input error.

Avoid jokes, memes, emojis or casual wording in error pages for industrial applications.

- 401 Unauthorized

- Hold on! VIP access only! 🎩✨

Use sentence casing within the description with minimal punctuation and formatting.

- There is an error on this page. Try again later.

- There <ins>is</ins> an ERROR on this **page**! Try again later.

## Dos and Don’ts

* Do give users a way out so the error page is not a dead end with only “Try again.” or “Try again later.”
* Do adapt your recommended actions depending on your use case and what is technically possible
* Don’t say your team is working on a solution to the error unless this is true

## Related

* [Error messages](./error-messages.mdx)
