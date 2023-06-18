const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
const requestLogger = (req, res, next) => {
  next()
}

app.use(requestLogger)

app.use(express.json())

const articles = [
  {
    id: 0,
    title: 'welcome 👋',
    body: [
      `Howdy, welcome to my Discord themed website! My name's Colton, and I created this site to learn ReactJS, and boy was it a trip. Everything here is made from scratch, the only thing I took from Discord (other than the inspiration) is the color palette. If you'd like to see my progress updates, click the blog “server” on the left hand side, and you'll see all my entries since the start of this project.`,
      `If you'd like to contact me for any reason, my email is <a class="hypertext" href="mailto:leach.colton@hotmail.com">leach.colton@hotmail.com</a>. And if you would like to see any of my other projects (I recently created a weather app and am now working on a React Native app), here's my <a class="hypertext" href="https://github.com/coltonleach/">GitHub</a>, and here's my <a class="hypertext" href="https://codepen.io/issvor/">Codepen</a>.<span class="edited"></span>`,
      `A bit about me: I'm entirely self taught in web development, photoshop, video editing, and photography. I've been building computers since my teens, and playing video games since I was 4 years old. Back in 2006, I grew a soft spot for videography because of YouTube, and I would take my mom's little point and shoot camera everywhere to record everything I did. Because of YouTube, I stumbled upon a community of 3D artists that used a combination of Photoshop, After Effects, and Cinema 4D, which resulted in me learning those programs to make YouTube backgrounds for my channel and for some friends. After I graduated high school, my mom gave me a hand-me-down Nikon DSLR, and I loved that little thing. Nearly everyday I'd walk around town taking pictures of whatever I thought was neat, and that eventually evolved into me getting brand new gear and doing a few photoshoots for family and friends. This was at the same time I truly started my software development journey.`,
      `I started learning how to program when I was 12 years old, but never did anything more than learn how to use loops. Around 2014-15, I took a web development class in high school, but the teacher didn't actually teach us anything related to HTML. I took it upon myself to learn a little bit and I started hosting a little website for my friends and I. A few years later in college I took a Java class that didn't teach me anything more than how to use loops. I transferred to a different college and the next programming class I had to take was data structures and algorithms, so I had a <b>lot</b> of catching up to do. Those were my only two programming classes, and I wasn't really enjoying C++. In March of 2021, a friend of mine showed me some stuff he did in React Native, and I was instantly hooked. I found some stuff from freeCodeCamp, wasn't really getting it, then stumbled upon Bob Ziroll's Scrimba course and dove head first in the deep end. After completing his course, I realized that my foundation was minuscule and would lead to problems down the road, so I decided to start from scratch. I focused primarily on HTML and CSS, watching a lot of Kevin Powell videos. I made a few small websites, then started learning how to design some stuff using Javascript and manipulating the DOM. After getting comfortable enough with that, I came back to React, and this was the first project I attempted.<span class="edited"></span>`,
      `I think it turned out pretty well 😀`,
    ],
    date: 'October 24th, 2021',
    section: 'home',
  },
  {
    id: 1,
    title: 'idea for a project 💡',
    body: [
      "Alright hear me out, I need to get back on the React train, and Discord's user functionality is pretty cool. What if I made a Discord themed blog that had similar functionality? The different routes would be servers, the blog entries would be text channels, and each paragraph would be a message.",
      "Hands down, I'll be able to do it in a week. I'm gonna focus on the styling and then work on the functionality once it looks pretty.",
    ],
    date: 'October 24th, 2021',
    section: 'blog',
  },
  {
    id: 2,
    title: 'time for the functionality',
    body: [
      "I finished the styling, which definitely took longer than anticipated. Ran into a few hiccups along the way, but have the majority of it finished and it's looking really good. I've actually mistaken it for the Discord client a few times so far.",
      "As for setting up the functionality, I'm not exactly sure where to start, but I think it's going to involve a few things I'm not familiar with. First part being React Router. I've messed with it once just to see how your supposed to set it up, but haven't gotten to know it or understand it. I'm sure it won't be too difficult, though.",
      "Second part is state. I've messed with state, made the typical increment/decrement project, fumbled around with a todo list, but I'm definitely not sure how I will be incorporating it with this project.",
      "Now that I think about it, I will probably need nested routes since I'm going to have that chat window be dependent on the channels, and the channels dependent on the servers. Hopefully that isn't too much of an issue.",
    ],
    date: 'October 28th, 2021',
    section: 'blog',
  },
  {
    id: 3,
    title: 'im in too deep',
    body: [
      "This is starting to get pretty daunting. Nested routes aren't difficult, but I don't think this is the place for them to be used. I read a couple articles, watched some videos, and basically what it comes down to is a route has two options: display something, or null. But I always want something to be displayed no matter what.",
      "I think instead of having nest routes and having to deal with state management for routes, I'll find a way to have the channels component communicate with its sibling, the chat window. I don't know if it's possible or not, but there has to be a way.",
      "After a bit of googling, it seems like there isn't technically a way for siblings to communicate, but there's a trick called 'raising the state' where you take a component's local state, bring it up to the closest parent, and then pass down state to both, you can manipulate state from a child component that affects their sibling.",
    ],
    date: 'October 30th, 2021',
    section: 'blog',
  },
  {
    id: 4,
    title: 'everything is fine 🥴',
    body: [
      "This project might actually be a perfect project. It's been a few days, made some good progress, but now I ran into my first hurdle that's too tall for me. I can't exactly explain it in words without literally showing you the problem I'm having, but I'm learning a ton about React, plain Javascript, and the entire web development process in general.",
      "The reason I think this is the perfect project for a newbie like me is because it's putting myself in a situation where I need to use a bunch of different features at once, and finding a way to make them all work together. The little projects I worked on before were things like 'make this number inside state increase/decrease', or 'use conditional rendering to show a p tag or an h1 tag', but this project has me working with multiple states, passing props all over the place, using React Router, and trying out the useEffect hook in React.",
      "Basically, the learning process is a big rough, but I am learning so much right now and am having a blast with it. Except for this dumb little issue I'm having, and it's quite literally the only thing holding me back from finishing this project.",
    ],
    date: 'November 3rd, 2021',
    section: 'blog',
  },
  {
    id: 5,
    title: 'taking a break from this project',
    body: [
      "I still haven't figured out how to solve my issue I'm having, and I know I'm over thinking it. In the mean time, I've just been working on polishing up the styling and trying to make the design as perfect as I can. But now I need to take a break to focus on class. I'll come back to wrap the project up, fix the bug, and finally publish the website.",
    ],
    date: 'November 8th, 2021',
    section: 'blog',
  },
  {
    id: 6,
    title: 'and im back',
    body: [
      "Oh man, I don't even recognize this project anymore. It's only been twenty days, but this might take a while to get back in the groove of things.",
      `Oh my lord I figured out my problem and fixed it! I knew I was over thinking it, but man this is embarrassing. <s>I don't know exactly how to explain the problem over text without showing the code, but I'll try my best.</s> I figured out how to add code snippets, so it's a bit easier to understand now 😁. <span class="edited"></span>`,
      `I have the blogs stored in state, and whenever I load the website, the blogs get filtered to their respective location and get passed down through props. So far so good. I have a function where when you click a channel, it updates a local state in the channels component and stores which channel is active. I have a useEffect hook that is supposed to set state back to its initial values so that the first channel is always selected whenever you select a server.<code><pre>
useEffect(() => {
  setActiveChannel({
    ...activeChannel,
    activeObject: activeChannel.objects[index],
    objects: articles,
  })
}, [articles])</pre></code>
      Well for some reason state wouldn't get initialized back to its default values, causing all sorts of problems with selecting a channel. After hours of staring at my screen and dozens of console logs, I finally realized it's because I set the wrong value in the useEffect hook. Instead of setting it back to the default values, I was using the previously stored values in state, and simply reassigning state to the previous values. Here's what it should be: <code><pre>
useEffect(() => {
  setActiveChannel({
    ...activeChannel,
    activeObject: articles[0],
    objects: articles,
})
}, [articles])</pre></code><span class="edited"></span>`,
      "It's actually embarrassing how I didn't catch it from the beginning, but now that I have it functioning properly, I can finally finish this website and publish it!",
    ],
    date: 'November 28th, 2021',
    section: 'blog',
  },
  {
    id: 7,
    title: "it's finally done 🥳",
    body: [
      "I have finally completed this project! Just in time for finals and to relax over Christmas break 😁. Man it feels so good. This was a wild process, and I am really proud of how this turned out. I'm glad that it's finally finished, and I hope that you like what you see. I'll be posting the source code of this entire project to my GitHub, @coltonleach (https://github.com/coltonleach/) I still have to find a way to get hyperlinks working from text stored in a json file 🤪 but that's pretty much the last feature that's needed!",
      "Just want to give a special thanks to all of those around me for listening to me ramble about this project. Especially my dog, Maxine, for the time I tried explaining how to raise the state and pass down functions so that sibling components can communicate to each other. I'm sure she understands it better than I do.",
    ],
    date: 'November 30th, 2021',
    section: 'blog',
  },
  {
    id: 8,
    title: 'deployed and future plans',
    body: [
      "The website is officially live, and the source code is up on GitHub. Now my next plans for the site is to find a way to make the links (like my email/Github/Codepen url) to become hyperlinks. A friend of mine recommended using Regex to parse the strings and slap in some conditional rendering, so I guess I have something new to learn 😅. But at this moment, I'm not going to make it a priority as finals are approaching. I'll definitely be working on it afterwards, though.",
      "I did just run into a slight problem, though. I'm using GitHub and Netlify to host the site, and right now if you go to the blog section and refresh the page, Netfliy throws a 404 error. Not quit sure why that's the case, but I'll definitely have to get that sorted.",
      "Alright that was actually the fasted fix I've ever done in my life. I just had to add a file in the public folder that tells Netlify to redirect the client when loading. Also this is my fourth commit and it has only taken maybe 30 seconds for each build. I'm pretty happy with how well this is turning out.",
      "I'm also planning on adding some breakpoints for the styles to make it a bit more user friendly for mobile devices. That shouldn't be too difficult, as it functions rather well at the moment, it's just the elements are a bit wacky right now due to the scaling.",
    ],
    date: 'December 2nd, 2021',
    section: 'blog',
  },
  {
    id: 9,
    title: 'long time no see 👴',
    body: [
      `So I've been pretty busy, as of late. I got a job at the beginning of the month. I moved a few days ago (which was a living nightmare. Mistakes were made, lessons were learned). And I finally learned how to style the messages!`,
      `I took a break from the project to focus on some more important matters, but I found some free time, so I thought why not hop back on and try to figure out how to style my messages (or at the very least, add hyperlinks). I was searching around blindly, and eventually found a solution to my problem.`,
      `There isn't much more to this project, except to kind of polish it up a bit. I've been following an online course to learn the MERN stack through FullOpenStack, and have reached part 3. I now have a true appreciation for people that do backend work, cause boy it's tedious. It's also extremely rewarding.`,
      `In part 3, I'm learning NodeJS/Express, and how to communicate with the backend using HTTP request methods. And because of it, I think I'm gonna turn this project into more of a sandbox and keep adding to it. It probably won't change at all visually, but the backend will definitely get a facelift. My name goal at this moment is to not have all the data stored as in JSON format.`,
      `Overall, 2022 is looking great so far, and I'm really excited to see where I'll be at the end of the year. This year is mine, and no one is taking that away from me.`,
    ],
    date: 'January 28, 2022',
    section: 'blog',
  },
  {
    id: 10,
    title: 'setting up the backend',
    body: [
      `I started to setup a backend with Node.JS and Express on March 10th, got about 45 minutes into before I was cut short by having to go out of town and didn't have a way to work on it as I was gone. I have the routes working, but wasn't able to get the objects parsed correctly. But I got back home at 6pm, settled in at 7:30pm, and gonna try to finish it tonight`,
      `I set up a simple request logger middleware that shows the method, path, and body the user requests, but for some reason it isn't working at all. At first I thought it was the way I had my useEffect hook setup and it wasn't even reaching the backend, but when I go to the URL directly through the browser, everything is showing up but the middleware isn't even working 😵.`,
      `haha whoops, I put the call to the middleware after the route instead of before it 🤪.`,
      `Well I figured out why I couldn't fetch anything from the backend. I had <code>http:localhost:3001/api/articles</code> instead of <code>http://localhost:3001/api/articles</code> 😬. But now I have a new problem that's pretty tough. I'm grabbing all the articles, I'm filtering out the "home" posts and the "blog" posts into their own variables inside the useEffect hook, but for some reason it's not re-rendering the DOM. It's 11:27pm now, so I'm gonna go to bed and pick it back up tomorrow.`,
      `I lied about going to bed. Thankfully it isn't that late, it's only 11:56pm. I complained to a buddy of mine and he pointed out that I simply had some poor implementation, pointed me in the right direction and I got it all sorted out. So now I have a properly functioning, bare bones back-end. And <b>now</b> I'm going to bed. Have a great night, everyone 😴`,
    ],
    date: 'March 14, 2022',
    section: 'blog',
  },
  {
    id: 11,
    title: 'my first official fullstack application',
    body: [
      `I originally deployed the website with the frontend and backend together in a single repo using <code>app.use(express.static('build'))</code> but that became problematic.`,
      `In the frontend, I have two routes: "/" and "/blog", which are handled with React Router. If you start from the root directory, everything is fine. But if you go to "/blog" then refresh, an error is thrown saying "Cannot GET /blog", because the backend intercepts the request. My solution was to simply host the front and backend separately, which works perfectly for now.`,
      `My next milestone for this project is to add user authentication, and once that's done I'd like to implement a feature to create blog posts within the application, as opposed to manipulating the backend directly. However, I just ran into a problem with the deployed app as I was writing this article. Some times fetching the blog posts takes several seconds, which causes the screen to just be empty. I realize now that I should probably setup a either a loading animation, or just a message that explains what's happening.`,
      `I added a default message that explains to the user that the backend might take a bit of time, and I also added a tooltip for when you hover over the home or blog "server". I'm gonna try to focus on starting a new project, which will probably not be as complex as this one, but something cool and challenging. No idea what it will be, but I'll figure it out.`,
    ],
    date: 'March 15, 2022',
    section: 'blog',
  },
  {
    id: 12,
    title: 'my next project',
    body: [
      `Over the past week I started working on a weather app that's entirely done in React, using <a class="hypertext" href="http://www.weatherapi.com">weatherapi</a> for the information. There are multiple themes based on the time of day (sunrise, mid day, sunset, and midnight) based on the location that was searched for. Here's the <a class="hypertext" href="https://clweatherapp.netlify.app/">live website</a> and here's the <a class="hypertext" href="https://github.com/coltonleach/weather-app">GitHub repo</a>, and here is the <a class="hypertext" href="https://www.figma.com/file/leb24xh8RSJkPglrKcnKyL/Untitled?node-id=0%3A1">Figma project files</a>.`,
      `That was a lot of fun to work on, coming up with the different themes and figuring out how to display each theme based on the location's time. The project probably took me 21-28 hours from start to finish, working on it for 3-4 hours a day for a week, and I love how it turned out. I was hoping to have some allergy information, but I wasn't able to find a free api that supported geo-coding, and I gave myself a hard deadline of seven days to finish this.`,
      `I think the hardest part was coming up with the design, which took 3 days. Then it took me 4 days to implement everything, and the last day was just coming up with a loading animation then publishing the project.`,
      `I definitely learned a lot on this project, and ran into some funny little moments with the way I was setting up the logic. I definitely recommend checking out the history of the App.js file if you want a good laugh. Especially this <a class="hypertext" href="https://github.com/coltonleach/weather-app/commit/284e56d94c92a830eb7fe01442d66f6105d56f76">push right here</a>. That mess of code got condensed quite a bit once I got some sleep. I also learned about "Mixed content", and I had a mini heart attack when I ran into that problem.`,
      `Since my site is https, and the api url I was calling was http (without an S), the browser was blocking the request. I was freaking out because I thought Netlify was having problems and that I'd have to find a different provider. Well after a quick googling, I found out all I need to do was change my api address to "https" and I should be fine, and thankfully it worked. I saw another thread where someone said the api they were working with didn't offer https, so they had to find a different service and refactor their project. Poor guy.`,
      `Anyway, I'm currently working on a React Native project and I'm super excited for it. Not gonna give any spoilers quite yet until I get something tangible, cause I might be pretty busy with some work stuff soon and I don't want to jinx myself. I'll definitely keey y'all updated, though.`,
    ],
    date: 'March 27, 2022',
    section: 'blog',
  },
  {
    id: 13,
    title: 'updates on my project',
    body: [
      `I've been making some awesome progress on my React Native app, but I'm still not ready to announce it just yet. I will give you some details on it though. It's a serverless fullstack app using either Firebase or Supabase as the backend (still haven't decided yet). In thoery, it's almost like a watered down social media app, in the sense that it will allow users to create profiles and potentially have a friends list. But that's all I'll say for now.`,
      `About three weeks ago I finished designing the frontend and putting it together (that was annoying to learn, given the fact that it's not real CSS), so I moved on to getting the functionality to work and quickly came across a problem. I don't know how to do use authentication at all, or even where to begin. So that is where my research began. After I took a brief break from the project, of course.`,
      `Two weeks ago I started doing research on what I should do for the backend, and remembered that Firebase has user authentication, and tons of options. Then that reminded me of another service a friend of mine told me about, Supabase. It's an open source alternative to Firebase and basically has everything Firebase has.`,
      `A few days after I started reading through the documentation and quickly realized that I'm not really understanding what I'm looking at (turns out I was looking at the wrong spot altogether), so I kept doing some research on other options out there. Because of the wrong impression I got from Supabase (entirely my fault), I decided to learn Firebase in the mean time on a sandbox project in the mean time, then consider using Supabase on the React Native app. While I was researching, I spent the next week designing and building the frontend. Once that was done, I put on my thinking cap and took an actual shot at learning Firebase.`,
      `I found a good video on integrating email/password user auth with Firebase and React, and went to town. It was an hour long, decided to take it slow to hopefully obsorb as much information as possible, so I did the first half one day and the second half the next. I quickly got the user auth working, and then tried figuring out how to store user data alongside it.`,
      `It took me way longer than I'm willing to admit to figure out how to store user data in Firestore, using the uid from Firebase's auth service, but I did it. My main problem was that almost every resource I came across that had examples and walk throughs would put every bit of code within a single file, but the setup I had involved two seperate files: firebaseConfig.js that stores all the Firebase information and exports the auth and db, and then AuthContext.js that has all the backend functions like 'signin', 'signout', 'createNewUser', etc., and I really like that setup and vowed to figure out how to keep it that way.`,
      `Turns out I was over thinking it and once it clicked in my head, I got the ball rolling in no time. I got the Firestore stuff working in about 4 hours, and now my sandbox app is almost complete. The only things left to do is properly sit down and learn the useContext hook so I don't have to do some funky state/prop management and then I'll be all set to work on the React Native app again.`,
    ],
    date: 'April 21, 2022',
    section: 'blog',
  },
  {
    id: 14,
    title: 'i made a proper portfolio',
    body: [
      `I've always wanted to make a proper portfolio website, but for some reason just couldn't bring myself to do it. I always thought the design would eventually just come to mind and I would throw it together quickly, but it never really did. Four days ago I said screw it, I'm going to make one from scratch and actually work through it.`,
      `I went to Dribbble to look for some inspiration and found a ton. I then studied pretty much from sunrise to sunset, what I liked and what I didn't like about the stuff I saw. I opened up a Figma, threw some stuff together for a day and just didn't like almost anything I was coming up with. On the second day, and a fresh pair of eyes, I ended up with a break through and really liked what I came up with. I spent the rest of the day finishing up the design, got about 90% of the way there then took a break for the day.`,
      `Yesterday is when I started the markup and styling, and I managed to finish the page the same day. I feel like I came up with some creative solutions to a few things, noteably the circle with a cutout of me in it. I just used an ::after pseudo element to put me in front of the circle with overflow set to hidden, but the cool part was setting it's width and height to the viewport width to make it semi-responsive without having to use breakpoints.`,
      `Overall, I'm incredibly happy with the current result. I'm thinking of adding some fun SVG backgrounds to some of the sections, but I'm gonna learn from my past mistakes and pace myself, as it's not a priority.`,
      `People have been asking about the React Native app and how it's going. While I have made tremendous progress, I decided to put it on the back burner for now. I've ran into a problem that isn't necessarily difficult to fix, it's just that I don't understand <i>how</i> it works specifically. So right now I'm tied between continuing on with FullStackOpen, or give NextJS a shot.`,
      `I've enjoyed the FSO course a lot, but took a break from it to work on the React Native app and have realized I'll need to start over a decent chunk of the course because it has been a few months. I've seen a lot of stuff about NextJS lately and have a growing interest in trying it out, but I feel that FSO will ultimately be the more secure route to go down. The more I type this out, the more I believe I should just stick with FSO. Maybe I'll just ask Siri to flip a coin.`,
    ],
    date: 'June 13, 2022',
    section: 'blog',
  },
  {
    id: 15,
    title: 'busy busy busy 🥱',
    body: [
      `Howdy everyone, it's been a while!`,
      `My job has changed directions of the type of work I'm doing, and there's a bit of a learning curve. I have it pretty much down, but have been a bit busier than before.`,
      `Anyway, I've also been working on a good amount of projects and have made some wonderful strides! I have been jumping from project to project lately, but I'm finally settling down and focusing on one at a time. I just am having so much fun learning all sorts of different things and trying out new stuff, it's hard to keep focus.`,
      `One project is a kanban type app that's similar to Trello. I'll be using MongoDB for it, and it's making me focus on developing a good schema (which I don't have much experience with), as well as a good user experience.I don't have much so far with it, and actually haven't touched it in a while, but plan on hopping back on that project soon.`,
      `Second project is a chat app that utilizes Firebase as the backend. It works rather well, but has a few minor bugs. I learned a ton from this project, and one of the biggest things I got from it was a boost in confidence when it comes to reading the documentation and trusting that I actually know what I'm doing. Typically I'd look for multiple resources about a feature before trying to implement it myself, but this time I would only look at the dedicated documentation and try it myself, then look up additional resources if I couldn't figure it out myself. This was a game changer.`,
      `Third project is a tool to extract the edits made to a photo exported from Adobe Lightroom, and display all the settings to the user. I want to also show a "before" image of what the photo probably looked like without the settings applied, but that's an entirely different beast to tackle. I decided to take up TypeScript for it, and <b>man</b> is TypeScript frustrating to learn. I know it will only benefit me, but there are so many nuances to keep track of, it gets kind of overwhelming. But with that being said, it has been nice and I'm excited to get efficent at it and make some even better projects with it.`,
      `Lastly, I met someone that's looking for a free-lance type of web developer (simple side work), and I told him I can do it. I sent him my website and he sounded interested. To convince him that I'm capable of the job, I decided to recreate his Wordpress homepage from scratch with vanilla HTML/CSS/JS in four hours. I streamed the whole thing and sent him the VOD and final product and he was thrilled. We talked about it more and he's really excited about the opportunity, even more-so than I am 😅. You can check out the <a class="hypertext" href="https://youtu.be/MWCdqyBU9u4" target="_blank">VOD here</a>, or the <a class="hypertext" href="https://coltonleach.github.io/overse-clone/" target="_blank">final product</a>.`,
      `As for now, I want to create one more mock website with some cool stuff I've learned, then focus on my previous projects. Also, since Heroku is removing their free tier, I'm shopping around for some other options and have currently landed on Cyclic for the backend of this blog. It looks pretty extensive, so I'm sure it will all work out 😀`,
    ],
    date: 'November 7, 2022',
    section: 'blog',
  },
  {
    id: 16,
    title: 'small change of plans',
    body: [
      `In my last article, I mentioned that I wanted to create an additional mock website and utilize some of the cool stuff I've learned. Instead of a mock website, I decided to make a new portfolio site 😅. I love my current one for a <i>lite</i> design, but I got something brewing and it's looking awesome so far.`,
      `I finished the intro/hero section and part of the 'my work' section (which took a good while to figure out), but now I'm taking a small break to polish up my chat app. I'll start posting blogs whenever I get back to working on the portfolio app, because I have already learned a few additional tricks that would be great to document, so I'm sure I'll find some more stuff to ramble about.`,
      `As for this chat app, back when I finished the main functionality, I took a break from it to focus on some other stuff and I originally thought that the list of stuff I needed to work on was going to be difficult, but so far I'm chopping the list down steadily. I started working on it this morning around 8am, and it's 11:23am now and I've already fixed 5 things on my list. Granted, they were the easiest ones, but hey, the little wins count too.`,
      `Also, setting up Cyclic for the backend of this blog was incredibly simple. I just created an account, setup a repo on Github for my backend, linked it to Cyclic and I was done. Definitely recommend it!`,
    ],
    date: 'November 19, 2022',
    section: 'blog',
  },
  {
    id: 17,
    title: 'focusing on a previous project',
    body: [
      `With the chat app, I ran into a tiny, yet huge security vulnerability. Whenever a user selects a chat, logs out, then logs into a different account, that previous chat log is still there. I'm speculating that it's because one of the components isn't unmounting properly, because the return on the useEffect doesn't seem to be executing. So for now, I'm going to take a break from the chat app while I do some research while working on a different project.`,
      `I decided to pick up my Kanban/notes app I had going back in July, and man it's always funny looking at an old project you haven't touched in a while. It's like a completely different language, and it took me a little bit of time to remember what all is going on. Kind of makes me wonder if this is parallel to getting on a new dev team and having to learn their codebase.`,
      `Anyway, right now it's using plain React, but I'm thinking of taking this opportunity to learn Next.JS. So far I've refactored the styles, a bit of the components, and organized the file structure a bit better. I also added a json-server for testing purposes, as I plan on using MongoDB Atlas for the database. I do want to learn to setup an SQL database because of Prisma (I know that Prisma works for Mongo, but from the little research I've done, it seems like SQL just makes more sense with Prisma), but maybe instead of that I could use Supabase since this needs user auth anyway.`,
      `I'm not sure what direction I want to go down, though, as I don't want to flood myself with too much <i>new</i> tech to mitigate "scope creep". With all that being said, no matter what direction I head, it will definitely be worth it as I think it would be great for me to learn any of the previously listed tech. For now, I'm going to prioritize making the primary functionality work and then figure what direction to head.`,
    ],
    date: 'November 27, 2022',
    section: 'blog',
  },
  {
    id: 18,
    title: '2023 resolutions',
    body: [
      `I like the progress that I have made in 2022, but I feel like it could've been better if I structured out what I want to learn and focused on the end goal. I just kind of went with the flow and did whatever I found interesting, (which there's nothing wrong with that approach!) and I managed to learn a good bit.`,
      `A list of things that come to mind that I've learned is: some React Native, the foundation of SASS, some exposure to Firebase, some advanced React topics, a bit of understanding of the backend, and general overall improvements with my frontend skills.`,
      `A common theme here is I learned primarily surface level knowledge of each topic. Not only was it primarily surface level knowledge, but I hopped from one tech to the next pretty frequently instead of sticking something out. 2023 will be different, starting now. Here I'll explain either what tech I'd like to learn or a project I'd like to do, along with a "why" and "how" in order of highest to lowest priority.`,
      `More familiarity with React hooks such as useRef, useContext, useEffect, and custom hooks. Obviously this is an important key aspect of React, and will only further strengthen my foundation. I have used each of these before, but my understanding is quite limited, and my main priority amongst these is useContext and useEffect. useContext is a requirement for a proper user authentication experience. I listed useEffect specifically because I want to get a better understanding of a components lifecycle, specifically unmounting. I plan on simply studying each of these hooks while using them in my applications.`,
      `TypeScript: I've been reading and watching videos related to using TS and it has definitely peaked my interest. I love that it essentially forces you to have better practices, and that the eslint will basically tell you exactly what object, variable, or whatever needs before you even try to use it. Definitely seems like a great addition, and will only make me a better, more diverse developer. I have a project already setup for TypeScript, so I'm simply going to work on that with some small stuff in between.`,
      `Next.JS: So far everything I've seen regarding Next has been positive, and the features it offers seem incredible for a bigger application (notably static paths and SSR for SEO). Right now I'm not quite sure what project I would like to do, but we'll burn that bridge when we cross it.`,
      `Prisma: I was watching Theo recently and he mentioned that he's not worried if he has to change his backend service provider because he uses Prisma, and he can simply "re-route Prisma to point at a different SQL database and not worry about anything else." Not sure how accurate that is, or if I completely understand what he means, but I have seen other stuff related to Prisma and it looks interesting enough to be worth the investment. Fireship's 100s video on it and it definitely looks worth it.`,
      `GraphQL: I haven't written a GraphQL API before, nor have I worked with one. This is definitely a worthy investment as it's growing in popularity, and I'm sure I'll come across them more often in the wild.`,
      `I think a fun thing to do to test myself a year from now is to try and make an application that uses all of this. The hardest part is to come up with a project 😉`,
    ],
    date: 'November 27, 2022',
    section: 'home',
  },
  {
    id: 19,
    title: 'first post of the year 🎉',
    body: [
      `Hello neighbor, hope you're doing well!`,
      `To kick start the year, I got carried away with Escape from Tarkov and kind of stopped working on projects for a bit. But thankfully, I have lost practically all interest in Tarkov, so it's back to the grind.`,
      `I decided to finish up my newest portfolio design that I started working on back in November. I think it turned out great, and I like that it's got some fun creative aspects while being decently simple and to the point.`,
      `Last week, a friend of mine came to me with a project idea that I really took to. He's focusing on the backend while I focus on the frontend. I came up with a decent little design and went to work. It gave me my first glimpse into refactoring an existing application, and boy it was something.`,
      `The framework we're using is Vue, which I have literally no experience in. I was genuinely taken back by how much effort goes into just learning the codebase and trying to understand the flow of it all. The organization, file structure, and pretty much everything went against what I know and love, so it's definitely gonna take some time to adjust.`,
      `Ultimately it's been really cool working on it, and I'm excited to see it through. I can't spoil anything as it's not my project, but maybe at some point we'll make it public.`,
    ],
    date: 'March 7, 2023',
    section: 'blog',
  },
  {
    id: 20,
    title: 'hey whats up?',
    body: [
      `Well we're almost half way through 2023, and I accidentally went against the grain of my resolutions for the year. Let me explain.`,
      `A friend told me he wanted to make his own video sharing platform for him and our friends. He told me some feature ideas he had and I really liked it. The next day he had a working app that did exactly what he wanted. When he showed it to me, I roasted him about the frontend and he said "Hey man, I'm a backend dev. If you want the frontend, take it." I was stoked, since I've only ever worked on personal projects, so I was totally down.`,
      `The techstack is Nuxt3, Supabase, Backblaze, and Cloudflare. Thankfully I only needed to work the frontend, so I let him handle all the scary stuff. My first two weeks were frustrating and humbling. I've never worked in Nuxt, let alone Vue, so I had a lot of learning to do before I could make any meaningful progress. The experience was frustrating because I was having such a hard time adapting to Vue3 and Nuxt3 coming solely from React. Humbling because I always thought "If you know one framework, you know them all." Boy was I wrong. With that being said, it was still great and turned out well. Vue/Nuxt has some querks that I'm not fond of, but overall wasn't that bad of an experience.`,
      `After a month I completely revamped the frontend and worked on some small features to enhance the UX. I'm still incredibly proud of it. What's funny is the part that was the toughest was coming up with a name for the service. We landed on the name <a class="hypertext" href="https://reruns.io">Reruns</a>. The experience of developing this app was incredible, and I learned a TON while working on it. I also ran into a bug that seemingly no one else has either noticed or attempted to fix with Firefox's default HTML5 player. If you play a video and enable the "loop" option, the first playthrough is fine. On the following plays, if you mute the video, it behaves as if you paused the audio track. So if you mute the video for 2 seconds and unmute it, the audio is delayed by 2 seconds. From my testing, this isn't a problem in Chromium browsers. Not only that, if you have a custom context menu (on right click of the video) in Firefox with the default controls enabled, you cannot close the context menu whenever you click on the video. The only way to achieve it, is if you put an mouseclick event listener on the body of the page and close the context menu. So because of those two problems, I created my own custom controls.`,
      `Anyway, we have some awesome features in mind for Reruns, but the project is currently on the back burner for the time being. Because of working with Nuxt3, I decided it was about time I actually dived into Next - which apparently was perfect timing with the release of Next13. I haven't done a whole lot with it right now, but I'm working on two projects right now. One of them is actually a reboot of a previous project of mine, called Park It! It was intended to be a mobile app, but I ran into so many problems with React Native/Expo due to ignorance and bad practices. It's still an incredible idea, and a few days ago I realized I could just make it a web app and take a mobile first approach.`,
    ],
    date: 'June 17, 2023',
    section: 'blog',
  },
]

app.get('/api/articles', (req, res) => {
  res.json(articles)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`)
})
