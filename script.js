document.addEventListener('DOMContentLoaded', () => {
    const courses = [
        {
            title: "Introduction to Python",
            description: "Learn the basics of Python programming.",
            link: "course.html?course=Introduction to Python"
        },
        {
            title: "Web Development Bootcamp",
            description: "Become a web developer with HTML, CSS, and JavaScript.",
            link: "course.html?course=Web Development Bootcamp"
        },
        {
            title: "Data Science with Python",
            description: "Analyze data and build machine learning models.",
            link: "course.html?course=Data Science with Python"
        },
        {
            title: "AI and Machine Learning",
            description: "Explore artificial intelligence and machine learning concepts.",
            link: "course.html?course=AI and Machine Learning"
        }
    ];

    const coursesContainer = document.getElementById('courses');

    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';

        const courseTitle = document.createElement('h2');
        courseTitle.className = 'course-title';
        courseTitle.textContent = course.title;

        const courseDescription = document.createElement('p');
        courseDescription.className = 'course-description';
        courseDescription.textContent = course.description;

        const courseLink = document.createElement('a');
        courseLink.className = 'course-link';
        courseLink.href = course.link;
        courseLink.textContent = 'Learn More';

        courseCard.appendChild(courseTitle);
        courseCard.appendChild(courseDescription);
        courseCard.appendChild(courseLink);

        coursesContainer.appendChild(courseCard);
    });
});
