# Bravado

Bravado is a site where people share interview experience as well as knowledge about the interview process that will allow others to study or use as reference for how to ace their own upcoming interviews.

The site will act in similar fashion to a forum with posts categorized by the type of industry people interviewed in. Users will be able to post their content in the different sections corresponding to the industry they interviewed in. Readers will be able to post comments under the posts. 

See our ERD and Wireframe for reference:
ERD: https://lucid.app/lucidchart/c7d9e0fd-0826-4360-a826-f274d4e5c842/edit?invitationId=inv_eea332b5-3e81-44a2-825c-8cfb65fe290f&page=afnMlSUnjzel#

<img width="1440" alt="Screen Shot 2022-08-29 at 2 10 30 PM" src="https://user-images.githubusercontent.com/104710154/187269643-87293d9a-fce6-4c49-b127-74244edd0fad.png">

Wireframe:
<img width="1440" alt="Screen Shot 2022-08-29 at 11 20 53 AM" src="https://user-images.githubusercontent.com/104710154/187236001-aa6eec46-4e8f-4b02-81dc-ccee8e031af5.png">

User Story:
Users should be able to create a profile with which they can post stories of their experiences during a recent interview they may have had. Other users should be able to comment under and react under these posts. Users will reserve control over their own posts with options to delete and edit only their own.

Our stretch goal is to have an admin account that can supervise posts and delete upon their discretion.

Development Story:
- Create Homepage(index.ejs) which can access different posts or categories
- Create Submission link(new.ejs), for people who want to submit a story
- Have posts link under correct route (category.ejs)
- Establish individual post timestamps and like counters
- Have option to sort posts by timestamp or number of likes
- Create route to independent posts where it will display full post and option to comment
- Organize Comments as array of objects that will show according to the post that is routed to
- Create way for user to establish profile with which they can share, comment, and like other posts
- Limit accessibility of User account to only control what they post or comment
- Create Admin account for supervisory purposes
