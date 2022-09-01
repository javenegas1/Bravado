[Imgur](https://i.imgur.com/aoh2c26.png)

Bravado is a site where people share interview experience as well as knowledge about the interview process that will allow others to study or use as reference for how to ace their own upcoming interviews.

The site will act in similar fashion to a forum with posts categorized by the type of industry people interviewed in. Users will be able to post their content in the different sections corresponding to the industry they interviewed in. Readers will be able to post comments under the posts. 

Planning:
It started with a very bare bones website and much of the original website is no longer used. Since the beginning we had a very streamlined wire frame and stuck to that as a blueprint to keep the site going. 

<img width="1440" alt="Screen Shot 2022-08-29 at 2 10 30 PM" src="https://user-images.githubusercontent.com/104710154/187269643-87293d9a-fce6-4c49-b127-74244edd0fad.png">

https://lucid.app/lucidchart/c7d9e0fd-0826-4360-a826-f274d4e5c842/edit?invitationId=inv_eea332b5-3e81-44a2-825c-8cfb65fe290f&page=afnMlSUnjzel#

In addition we drew up several blueprints to decide how the website would look. From there we use our creative minds to make the site cohesive and as professional as possible.

<img width="1440" alt="Screen Shot 2022-08-29 at 11 20 53 AM" src="https://user-images.githubusercontent.com/104710154/187236001-aa6eec46-4e8f-4b02-81dc-ccee8e031af5.png">

[Imgur](https://i.imgur.com/TOT33Fg.png)

Functionality: 
Our project features full CRUD functionality. We allow users to create whatever posts they want as well as create any comments. We also allow users to delete their own posts or comments as well as edit existing ones. Last we allow people to be able to read any posts or comments that are made. We also feature several partials that has our NAV bar show up on all pages and is accessible at all times. We have user authentication as well as pages a check if a user is logged in or not. Last, we even have a carousel rotating pictures on our main page it cycles through several images of a professional setting.

Our stretch goal is to have an admin account that can supervise posts and delete upon their discretion.

User story:
To follow user story, we need to think about the purpose of the site. A user can go to the site and view posts and comments as normal whether they are signed in or not. However if a user has an account and is signed in, they will be able to make a post or comment on an existing one. There are several tabs that a person can go to the link to different sections of the site: general, tech, finance, etc. each one will lead to specific post regarding the section in question. The user can click on a post and see the contents of the post as well as any comments that are attached to that post. Are you sure you can leave a like if they are signed in or even post a comment to that post.

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

Teamwork:
Juan Venegas: Designed much of the backend. Created routes and functionality of much of the site
Harvey Spinks: Drafted the write up of all of the site. Handled documentation as well as supported other members as they needed
Sohaib Ali: Designed most of the HTML and CSS. Much of the design came from his creative mind 