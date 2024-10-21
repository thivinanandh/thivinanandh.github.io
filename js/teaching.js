// teaching.js
document.addEventListener('DOMContentLoaded', function() {
    const teachingList = document.querySelector('.teaching-list');
    const timeline = document.querySelector('.timeline');

    // Sample teaching data (replace with your actual data)
    const courses = [
        {
            title: "Introduction to Data Science",
            subtitle: "Post Graduate Course @ Indian Institute of Science, Bangalore [Online M.Tech]",
            date: "2022-01-15",
            description: "This course covered introductory topics in Data Science such as Probability, Linear algebra, Python Libraries for Data Science. My responsibilities included creating and grading Quizes, Assignments for the course. I also took Tutorial sessions for the course including actual lectures for Python Libraries for ML such as sklearn and tensorflow.The training materials and the codes that I have written for the course are available in my github repository (Teaching-Python).",
            feedbackScore: 4.9,
            maxScore: 5,
            feedbacks: [
                "Thivin put in some real hard work to herd our class, his classes were really interesting and he made sure all our queries were well answered. I think he deserves an award or prize of some sort.",
                 "A perfect encourager to learn more. He explains the concepts in a very clear and concise way and asks us to research more to understand better. I could understand the intent behind that only when I followed that. Though the assignments were hard to understand initially, Thivin helped us in understanding those and the motive behind it. Once I started doing it, I could relate to how it was relevant to this course. Great Job Thivin.",
                 "Even though tests are quite difficult, his intent was right and learnt a lot. He never hesitated from explaining the difficult concepts.",
                 "Thivin has really been very approachable and been kind to clarify our conceptual doubts (doubts outstanding from lectures as well, that is really appreciable) and helped us solve the assignments.",
                 "Thivin was also very helpful. He explained everything patiently.",
                           "I don't have any words to describe how helpful Thivin was during the course. He was easily approachable and always accessible. Very patient and humble to answer any dumb questions from the class. He put lot of efforts and put extra time in several hours together to get us to speed, where the topics were bit tough to digest. I just couldn't imagine getting through 2nd part of the course without Thivin's tutorials in place. Thanks a ton Thivin!. I really hope we interact in upcoming courses.",
                           "Thivin helped out..his assignment was very interesting",
                       ]
        },
        
        {
            title: "MLOps at Scale",
            subtitle: "Post Graduate Course @ Indian Institute of Science, Bangalore [Online M.Tech]",
            date: "2022-09-01",
            description: "Course focuses on teaching basics of High performance computing and extends towards explaining deploying and training ML models at scale. Topics covered during the lectures include MPI, CUDA, Github actions, Docker, distributed training for Tensorflow. My responsibilities included creating and grading Quizes, Assignments for the course. I also took Tutorial sessions for the course including actual lectures for Docker and distributed training for Tensorflow. The training materials and the codes that I have written for the course are available in my github repository (Teaching-Python).",
            feedbackScore: 4.4,
            maxScore: 5,
            feedbacks : [
                
                "Very patient TA who answers all questions individually. Very supportive and knowledgeable.",
                "Thivin has a very strong hold over the concepts of parallel programming. His tutorials were really good and he was always available for clarifying doubts, whether it be in class or outside of it.",
                "Thank you so much Thivin. One of the most supportive and dedicated TAs.",
                "Thivin was very helpful in teaching the concepts for all the 3 courses. motivates us to learn more concepts and tries to maximize the learning. only thing is he should improve the planning (both lectures & Schedule) and executing it.",
                "Very Good. Have learnt lot from Thivin. Very easy to approach. Always ready to explain and clarify doubts.",
                "Always encouraged to discuss any topic which we were not clear. Hands on or programming bit of the course was covered well during tutorials",
                "Very much accessible all the time and knowledgeable.",
            ]
        },

        {
            title: "Introduction to Computing for AI and ML",
            subtitle: "Post Graduate Course @ Indian Institute of Science, Bangalore [Online M.Tech]",
            date: "2023-01-01",
            description: "Course focuses on Fundamendals of Linear Algebra concepts for ML, and also covers the summary of basic ML algorithms along with the Neural Networks. The training materials and the codes that I have written for the course are available in my github repository (Teaching-Python).",
            feedbackScore: 4.4,
            maxScore: 5,
            feedbacks : [
            ]
        },

        {
            title: "Introduction to Computing for AI and ML",
            subtitle: "Post Graduate Course @ Indian Institute of Science, Bangalore [Online M.Tech]",
            date: "2023-06-01",
            description: "Course focuses on Fundamendals of Linear Algebra concepts for ML, and also covers the summary of basic ML algorithms along with the Neural Networks. The training materials and the codes that I have written for the course are available in my github repository (Teaching-Python).",
            feedbackScore: 4.5,
            maxScore: 5,
            feedbacks : [
            ]
        },

        {
            title: "Numerical Methods",
            subtitle: "Post Graduate Course @ Indian Institute of Science, Bangalore ",
            date: "2021-09-01",
            description: "Course focuses on teaching basics of Numerical Differentiation and Numerical Integration and time stepping schemes, which can be used to solve Partial Differential Equations. My responsibilities for the course included setting up and evaluating Quizzes and Assignments for the course.",
            feedbackScore: NaN,
            maxScore: 5,
            feedbacks : [
                
            
            ]
        },


        {
            title: "Finite ELement Methods: Theory and Algorithms",
            subtitle: "Post Graduate Course @ Indian Institute of Science, Bangalore [Online M.Tech]",
            date: "2022-09-01",
            description: "Course focuses on teaching basics of Finite Element methods both from the Theoritical and Implementation perspective. My responsibilities for the course included setting up and evaluating Quizzes and Assignments on trying to make students implement Finite Element codes in our in-house FEM Package ParMooN.",
            feedbackScore: NaN,
            maxScore: 5,
            feedbacks : [
            ]
        },

        {
            title: "AI and Machine Learning",
            subtitle: "UpSkilling for Industry and Academic people @ Indian Institute of Science, Bangalore [CCE]",
            date: "2023-09-01",
            description: "Course focuses on teaching basics of AI and ML methods to industry professional from various domains to learn the basics of AI and ML. My responsibilities for the course included setting up and evaluating Quizzes and Assignments for the course. I also took actual lecture sessions on Python libraries for ML, MLOps (Github, Github actions), Tensorflow and ML Algorithms (SVD, PCA). The training materials and the codes that I have written for the course are available in my github repository (Teaching-Python).",
            feedbackScore: NaN,
            maxScore: 5,
            feedbacks : [
            ]
        },

        {
            title: "AI and Machine Learning",
            subtitle: "UpSkilling for Industry and Academic people @ Indian Institute of Science, Bangalore [CCE]",
            date: "2024-09-01",
            description: "Course focuses on teaching basics of AI and ML methods to industry professional from various domains to learn the basics of AI and ML. My responsibilities for the course included setting up and evaluating Quizzes and Assignments for the course. I also took actual lecture sessions on Python libraries for ML, MLOps (Github, Github actions), Tensorflow and ML Algorithms (SVD, PCA). The training materials and the codes that I have written for the course are available in my github repository (Teaching-Python).",
            feedbackScore: NaN,
            maxScore: 5,
            feedbacks : [
            ]
        },

        {
            title: "AI and Machine Learning",
            subtitle: "UpSkilling for Industry and Academic people @ Indian Institute of Science, Bangalore [CCE]",
            date: "2024-02-01",
            description: "Course focuses on teaching basics of AI and ML methods to industry professional from various domains to learn the basics of AI and ML. My responsibilities for the course included setting up and evaluating Quizzes and Assignments for the course. I also took actual lecture sessions on Python libraries for ML, MLOps (Github, Github actions), Tensorflow and ML Algorithms (SVD, PCA). The training materials and the codes that I have written for the course are available in my github repository (Teaching-Python).",
            feedbackScore: NaN,
            maxScore: 5,
            feedbacks : [
            ]
        },

        // Add more courses as needed
    ];

    function renderCourses() {
        teachingList.innerHTML = '';
        courses.forEach(course => {
            const courseCard = createCourseCard(course);
            teachingList.appendChild(courseCard);
        });
    }

    function createCourseCard(course) {
        const card = document.createElement('div');
        card.classList.add('course-card');

        const header = document.createElement('div');
        header.classList.add('course-header');

        const titleSection = document.createElement('div');
        titleSection.classList.add('course-title-section');

        const title = document.createElement('h2');
        title.classList.add('course-title');
        title.textContent = course.title;

        const subtitle = document.createElement('p');
        subtitle.classList.add('course-subtitle');
        subtitle.textContent = course.subtitle;

        titleSection.appendChild(title);
        titleSection.appendChild(subtitle);

        const date = document.createElement('div');
        date.classList.add('course-date');
        date.textContent = formatDate(course.date);

        header.appendChild(titleSection);
        header.appendChild(date);

        const descriptionSection = document.createElement('div');
        descriptionSection.classList.add('course-description-section');

        const description = document.createElement('p');
        description.classList.add('course-description');
        description.textContent = course.description;

        
        
        if (!isNaN(course.feedbackScore)) {
            const feedbackCircle = createFeedbackCircle(course.feedbackScore, course.maxScore);
            descriptionSection.appendChild(description);
            descriptionSection.appendChild(feedbackCircle);
        }
        else{
            descriptionSection.appendChild(description);
        }

        const feedbackToggle = document.createElement('button');
        feedbackToggle.classList.add('feedback-toggle');
        feedbackToggle.textContent = 'Show Feedback';

        if (course.feedbacks.length === 0) {
            feedbackToggle.style.display = 'none';
        }

        const feedbackSection = createFeedbackSection(course.feedbacks);

        feedbackToggle.addEventListener('click', () => {
            if (feedbackSection.style.display === 'none' || feedbackSection.style.display === '') {
                feedbackSection.style.display = 'block';
                feedbackToggle.textContent = 'Hide Feedback';
            } else {
                feedbackSection.style.display = 'none';
                feedbackToggle.textContent = 'Show Feedback';
            }
        });

        card.appendChild(header);
        card.appendChild(descriptionSection);
        card.appendChild(feedbackToggle);
        card.appendChild(feedbackSection);

        return card;
    }

    function createFeedbackCircle(score, maxScore) {
        const ratingContainer = document.createElement('div');
        ratingContainer.classList.add('star-rating');
    
        const starsContainer = document.createElement('div');
        starsContainer.classList.add('stars');
    
        // Create 5 stars
        for (let i = 1; i <= 5; i++) {
            const starWrapper = document.createElement('div');
            starWrapper.classList.add('star-wrapper');
    
            const starBackground = document.createElement('span');
            starBackground.classList.add('star', 'star-background');
            starBackground.innerHTML = '★'; // Unicode solid star
    
            const starForeground = document.createElement('span');
            starForeground.classList.add('star', 'star-foreground');
            starForeground.innerHTML = '★'; // Unicode solid star
    
            // Calculate fill percentage for this star
            let fillPercentage = Math.max(0, Math.min(100, (score - (i - 1)) * 100));
            starForeground.style.width = `${fillPercentage}%`;
    
            starWrapper.appendChild(starBackground);
            starWrapper.appendChild(starForeground);
            starsContainer.appendChild(starWrapper);
        }
    
        ratingContainer.appendChild(starsContainer);
    
        // Add the score/maxScore text below the stars
        const scoreText = document.createElement('div');
        scoreText.classList.add('score-text');
        scoreText.textContent = `${score.toFixed(1)}/${maxScore}`;
        ratingContainer.appendChild(scoreText);
    
        return ratingContainer;
    }

    function createFeedbackSection(feedbacks) {
        const section = document.createElement('div');
        section.classList.add('feedback-section');

        const carousel = document.createElement('div');
        carousel.classList.add('feedback-carousel');

        feedbacks.forEach((feedback, index) => {
            const feedbackCard = document.createElement('div');
            feedbackCard.classList.add('feedback-card');
            feedbackCard.style.display = index === 0 ? 'block' : 'none';

            const feedbackText = document.createElement('p');
            feedbackText.classList.add('feedback-text');
            feedbackText.textContent = feedback;

            feedbackCard.appendChild(feedbackText);
            carousel.appendChild(feedbackCard);
        });

        const navDots = document.createElement('div');
        navDots.classList.add('feedback-nav');

        feedbacks.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('feedback-nav-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => showFeedback(carousel, index));
            navDots.appendChild(dot);
        });

        const leftArrow = document.createElement('i');
        leftArrow.classList.add('fas', 'fa-chevron-left', 'feedback-arrow', 'left');

        leftArrow.addEventListener('click', () => navigateFeedback(carousel, -1));

        const rightArrow = document.createElement('i');
        rightArrow.classList.add('fas', 'fa-chevron-right', 'feedback-arrow', 'right');
        rightArrow.addEventListener('click', () => navigateFeedback(carousel, 1));

        section.appendChild(leftArrow);
        section.appendChild(carousel);
        section.appendChild(rightArrow);
        section.appendChild(navDots);

        return section;
    }

    function showFeedback(carousel, index) {
        const feedbacks = carousel.querySelectorAll('.feedback-card');
        feedbacks.forEach((feedback, i) => {
            feedback.style.display = i === index ? 'block' : 'none';
        });

        const dots = carousel.parentNode.querySelectorAll('.feedback-nav-dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function navigateFeedback(carousel, direction) {
        console.log('navigateFeedback');
        const feedbacks = carousel.querySelectorAll('.feedback-card');
        let activeIndex = Array.from(feedbacks).findIndex(feedback => feedback.style.display === 'block');
        let newIndex = (activeIndex + direction + feedbacks.length) % feedbacks.length;
        showFeedback(carousel, newIndex);
    }

    function renderTimeline() {
        timeline.innerHTML = '';
        const years = new Set(courses.map(course => new Date(course.date).getFullYear()));
        Array.from(years).sort((a, b) => b - a).forEach(year => {
            const timelineItem = document.createElement('div');
            timelineItem.classList.add('timeline-item');
            timelineItem.textContent = year;
            timelineItem.addEventListener('click', () => {
                const yearCourses = courses.filter(course => new Date(course.date).getFullYear() === year);
                if (yearCourses.length > 0) {
                    yearCourses[0].element.scrollIntoView({ behavior: 'smooth' });
                }
            });
            timeline.appendChild(timelineItem);
        });
    }

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    renderCourses();
    renderTimeline();
});