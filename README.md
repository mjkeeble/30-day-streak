# 30-day-streak
![30-day-streak](https://user-images.githubusercontent.com/66460031/113026949-de3cb680-9189-11eb-8cc9-153a2f722e12.png)

For the final project of the Ironhack Web Development Bootcamp we were required to develop  a MERN full stack application with user authentication multiple data models and full CRUD functionality.

Together with [Anna Waszak](https://github.com/annawaszak) and [Katie Gracey](https://github.com/kgracey93) I developed a habit tracking app over nine days. The app allows users to select or create thirty-day habit-training challenges and track them in the app. They can also define  prizes that the app awards them for successful progress and a main prize for completing the challenge successfully.

The project was voted best of the cohort both by the cohort members and a public hackshow at the end of ther course!

## The challenges

The main challenges developing this project were:

* Merge conflicts - and with over 200 commits in 9 days, we had a few!
* Initially confusing routing because we didn't deliniate the naming of the back- and front-end routing clearly
* Managing a state with a complex, multi-layered data.
* Managing asyncronicity in the API within the front-end.

## What could be better

Overall this is a well developed project we were all proud of. The following points would be worth reviewing:
* The overall concept for API calls. The overall number of calls could probably be reduced so that changes made by the used are not all being updated immedaitely in the back-end which results i excessive traffic. These could probably be batched, but we would need to ensure the back-end is updated if the user logs out or leaves the site, which would mean covering a number of scenarios.
* Implement mobile-first formatting. As a concept this app is predestined to be used on a mobile, but front-end formatting didn't fully reflect that.

## Conclusion

This was for me by far the most challenging project, but it gave a good insight into building an app within a front-end framework like React. I need to develop my understanding of asyncronicity and state management options further and I could well imagine putting my focus this part of the app development in future.
