# Why Create a new version of Learn?

Learn has been the stable LMS of our Products here at Richardson for the past 5 years. Due to the acquisition of e4enable and bringing in the Insights application as the new point-of-entry for users and client admins, Learn and Insights have a lot of duplicative behavior and features.

Goal: To simplify our product suite as well as enrich it. To take the lessons we have learned over the past 5 years and think from first-principles about what we want as the foundation of the next 5 years.

### Problems worth solving: There are a few main problems worth calling out.

1. Contentstack's lack of versioning across entries made us implement a "content publishing mechanism". While this has served us well for what we thought the needs were, it also hinders fast-publishing in many ways.
   1. We would like to be able to update incorrect content as immediate as publishing in Contentstack happens
   2. We would like to be able to push out language translation updates to all customers simultaneously.
   3. We want to ever-increase the speed at which new courses are available to multiple clients
2. Learn has overlapping features with Insights
   1. Coaching and Admin flows are best served in Insights in the long run
   2. The Apply tab in Learn can be replaced by the Resources section in Insights. Objectives can be tied to these Resources as well.
   3. The Practice tab in Learn has been questionable as it is so rarely used by users.
3. The UI needs to feel more like part of Insights.
   1. With the above in mind we can slim down Learn's capabilities dramatically, eliminating the need for the current left-side navigation.
   2. What would remain still is the need to navigate around the course strucuture.
   3. Comparing this to other eLearning platforms, it begins to feel more like Insights is acting as the LMS. This is where the user sees the courses and the behaviors they need to focus on. Then launching "the learning" could look more like launching a SCORM or xAPI "package" from the host LMS. So in essense, Learn _just_ needs to be the course content interface.

### Some other nuances looking into the future

- We want to improve both the experience of authoring the content, taking advantage of recent developments in AI as well.

- We also want to continue to improve the learning experience for sellers and managers and administrators.

#### Authoring Experience

1. Contentstack doesn't come out-of-the-box with a good authoring experience. But it does come with some tools where we can build our own into what they call the Visual Page Builder. To use this would require us to build a new application to support it. https://www.contentstack.com/platforms/visual-building
   1. Building this requires the use of the CS-SDK in JS/TS
   2. Leading us to a JS framework solution for this tool
2. The current Content-types model in CS makes it hard to identify and reuse pieces of content
   1. We have been exploring a project titled Atomization, to create reusable components of content that can be used in Courses, Notifications and more in the future. 
   2. Our experiment with Question Templates (we called them Variants) in Quickcheck showed us a way we can do this for maximum reuse. We will call these "Templates" in the future to avoid confusion with Contentstack's use of the word Variant.
3. Contentstack has a new "Personalization" feature that adds the concept of Variants to CS Entries. We will need a way to preview how each of these variants will look at authoring time. Integrating the Visual Page Builder with this would be ideal.
4. We want to be able to create these variants on a small sub-page level (Atoms), but also clients want to be able to customize the course sometimes to their own preferences.
   1. Clients in the past want to be able to add/remove exams or quizzes
   2. Clients want to be able to add in new client-specific pages
   3. These customizations need to also be able to support translations into multiple languages. We went through some hoops in Learn to build CMS features in the Admin-side to support this. It would be better if all these variations lived natively in Contentstack.
5. There will be other tools we will want to build into CS to improve the authoring experience in future cycles. 
6. Contentstack also has features called Automation and BrandKit that we want to leverage in the future. Using these tools, we could automate the creation of variants, and auotmate the translation of our content using AI. 
   1. For instance we want to be able to create a "banking industry" variant of our 40+ courses, in one fell-swoop. We build the automation to: "go into all the Atoms, and the ones that are marked TRUE for customization, change the content (using AI) to examples from a banking perspective". 
   2. Similar to above, but we might take a bunch of client-specific products or services they are selling and make variants just for that client.
   3. This will require an easy way for our authors to at least review the content that was newly created by the AI, maybe another interface we need to build.

#### Learning Experience

1. In order for learners to also take advantage of the new Personalization feature, we need to ingrate the way that Contentstack recommends.
   1. They recommend (if not require) us to use the CS-SDK to do the querying for the content.
   2. This would require a re-write of how Learn renders content today, going directly to Contentstack for the content, instead of the application cache.
   3. Ironically the re-use of the code from building the new Visual Page Builder, to this new learning experience would be massive. It makes the most sense then, to build these together as one application.
2. Users want to feel like they are not in a separate application when they launch into the learning content, but part of the same application. (ASPS)
   1. I propose, not an exact copy of the Insights navigation, but a slimmed-down navigation, like you would see in any typical eLearning package.
   2. This means that whatever is launched from Insights, the user will need to be authenticated and have access to the content that was launched.
   3. We want to be able to support not only our current courses, but upcoming "Nudges" (smaller bits of content delivered via notifications). The focus here is ont the content, and then driving them back to the Insights application.
   4. We will also want to be able to launch into Learn from other LMSes, owned by our clients. We plan on incorporating Rustici Dispatch into this application. Coming from an external LMS, we will want the same thing, for the UI/UX to focus on the content that was launched, and little else. What Rustici Dispatch does for our clients is to create a small SCORM "proxy" that will open up our learning application in an iframe, launched from their LMS. Any clients that support xAPI or CMI5 in the future, we should be able to support SSO and writing records back to their LRS as well, without the need for Rustici.
3. Cognitive Science tells us that users who "interact" with the content, tend to retain this learning better, than if they are just reading/watching.
   1. Much of our Richardson content today is "passive learning", with the few interactions being our Knowledge Checks, or our Quizzes/Exams and then Quickcheck.
   2. Challenger's team has spent much more time customizing the interactivity and creativity of each course in their catalog. When they input their content into our Contentstack model, they will want to preserve as much "richness" and interactivity as possible. 
   3. It would be great to be able to add to these interactive elements quickly and efficiently, without a lot of development effort for each new one. When we built the questionitem variants for Quickcheck, we were able to release a new question type interaction in a matter of days, sometimes as little as one day for multiple choice or True/False, and for the more difficult ones like fill-in-the-blank, it took as much as one week.
   4. We would love to go back over Richardson content in the next year and add more interactivity to the platform.
4. Accessibility and Mobile-device accessibility are crucial to the future. Clients are more and more wanting a "mobile app" experience which seems to mean their users want to be able to access learning on the go.
   1. We want to build with front-end components that take into account accessibility concerns from the outset. Not only color contrast and button sizing, but also keyboard navigability and screen reader compatibility. Laws in EU (and more soon) require top-tier accessibility standards and our clients are starting to demand proof that we are passing audits.
   2. We want to consider each interaction and how it feels on a mobile device that tends to be vertical. Perhaps we paginate or scroll differently than a desktop, or use different mechanisms. For instance, a vertical tab interface would be better as an accordion set on mobile, or some other way of tabbing through the content.
   3. We want to be able to integrate and support new components on the front-end that are easy to author content for within Contentstack. Some components might require a completely different model than others, but we don't want to keep having to rebuild the query from Contentstack. (more on this in the Atomization content model section)


## Our thoughts on the solution

Broadly speaking, we see the next few steps as the major change we have been discussing for years.

1. Change the content model we are using in the Tantalum stack today
   1. Create "Atoms", which themselves will have one Template to choose inside a modular block in CS. These Atoms contain 99% of the content, and will be able to support translations, and variants (for clients, departments, industries, user job roles) of each Atom.
   2. Create Pages, which will enable the Visual Page Builder experience. This will allow authors to build a page with multiple Atoms, choosing the Atom's Template, and filling out the fields that template needs. It will allow reordering of the Atoms within the page. 
      1. Things to decide: Will the Atoms just stack vertically on the page, or will the page allow atoms to be laid out in columns as well. Much discussion on this topic and the pros-and-cons considering accessibility and mobile as well.
   3. Create Course structure above the Page level. This could be a recursive collections-inside-of-collections, or one ultra-structure. 
      1. Decisions on this yet to come. 
2. Migrate existing Richardson content to this new content model. We will need to write a script/program to do this automatically for us. 
   1. Content inside the main components of the Pages will be made into Atoms, using an appropriate template.
   2. Content that are Questions, will be made into Atoms with the MC Question template.
   3. Course structure will be built from how the courses are currently structured, referencing the Atoms at the leaves of the tree-like structure.
3. Build the Visual Page Builder. Leveraging code from Quickcheck (that already implements the Question templates in Atoms), we will need to build the experience that allows content authors to build multiple Atoms within a single page.
4. Build another visual tool into Contentstack that allows authors to see ALL the content, structures and atoms, in the current stack so they can find pieces they want to edit, or to re-use. This tool should allow them to create courses from the Atoms that have been created. Whether this is using the Visual Page Builder, or something different entirely is yet to be determined.
5. Once the Visual Builder is built, we will reuse that code in the same application to build the Learning Experience toward the new version of Learn. Using the new Personalization features of Contentstack, we will query Contentstack for the content, by passing the requested page URL and some user attributes (tenant, department, role, etc). From the Page plus the user data, Contentstack will send the correct variant of the Page and Atoms back to the application for rendering.
   1. Then we will need to add in course navigation for the user to navigate around through the course. 
   2. We will also need to track user activity in the course. Big decision to make  here on whether to have a database, or to use Posthog and sending data back to Insights as the way to store progress.
   3. We will also then integrate Rustici Dispatch to allow launching and tracking this content from other LMSes.
6. We will integrate Contentstack's CDP (formerly called Lytics) to aid us in user analytics, as well as resolving the variants needed for each user in each tenant.
   1. Syncing our user DB with the CDP means that we have to send over less data when querying for the page of content (just the user ID, we think).
   2. We need to investigate more what benefits the CDP will bring us, with the Personalization and targeting features. We also need to see if we can leverage it for more mature understanding of the engagement of each user, and how we can leverage this to use "nudges" to bring these people back into the platform to increase engagement.
7. We will work with Contentstack's Automation engine and build out some workflows for automating the creation of variants, and the translation of all content.
