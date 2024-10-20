// events.js
document.addEventListener('DOMContentLoaded', function() {
    const featuredEventsList = document.querySelector('.featured-events-list');
    const eventsList = document.querySelector('.events-list');
    const timeline = document.querySelector('.timeline');
    const tagFilter = document.querySelector('.tag-filter');

    // Sample event data (replace with your actual data)
    const events = [
        {
            title:       "Publication: Book Chapter",
            date:        "2020-10-20",
            description: "A Chapter on Ship Hydrodynamics was published in Book titled 'Computational Ship Hydrodynamics: Modeling and Simulation' from Taylor and Francis group",
            tags:        ["Book Chapter", "Publications"],
            link:        false
        },
        // IGCM
        {
            title:       "Indo-German Conference on Computational Mathematics",
            date:        "2019-03-01",
            description: "Was Student Organiser for the 1st Indo-German Conference on Computational Mathematics held at IISc Bangalore",
            tags:        ["Conferences", "Organisational Activites"],
            link:        false
        },
        // Parallel Finite element 
        {
            title:       "Parallel Finite Element Workshop",
            date:        "2019-11-20",
            description: "Handled sessions to students and faculties on writting Parallel Finite Element codes using the ParMooN library. The workshop was held at Dept of CDS, IISc Bangalore",
            tags:        ["Workshops", "Organisational Activites"],
            link:        false
        },
        // Covid Paper 
        {
            title:       "arXiV Paper: COVID-19",
            date:        "2021-10-10",
            description: "Our paper titled `Ensemble Forecast of COVID-19 for Vulnerability Assessment and Policy Interventions` was made available on medarXiV",
            tags:        ["Publications"],
            link:        false
        },

        // ECCOMAS - Conference
        {
            title:       "Conference Publication: SIMULTECH-2021",
            date:        "2021-01-14",
            description: "Our paper titled `A Deep Learning Simulation Framework for Building Digital Twins of Wind Farms: Concepts and Roadmap` was accepted to publication at SIMULTECH, 2022",
            tags:        ["Publications"],
            link:        false
        },

        // Paper Publications.
        {
            title:       "Journal Publication: IJAESAM ",
            date:        "2021-09-01",
            description: "Our paper titled `On the choice of hyper-parameters of artificial neural networks for stabilized finite element schemes` was published at IJAESAM",
            tags:        ["Publications"],
            link:        false
        },
        // Kotak Instructional School
        {
            title:       "Workshop-Kotak Instructional School",
            date:        "2023-03-23",
            description: "Was the organiser for the workshop titled `Instructional School on AI and ML for Researchers`, where we trained Faculties from various colleges in and around Bangalore on Introduction to ML. I handled sessions related to LLM assisted coding using github Copilot",
            tags:        ["Workshops", "Organisational Activites"],
            link:        false
        },
        // IGCM - 2023
        {
            title:       "Indo-German Conference on Computational Mathematics",
            date:        "2023-03-25",
            description: "Was the Student organiser for the second edition of `Indo-German Conference on Computational Mathematics` held at Dept of CDS, IISc Bangalore",
            tags:        ["Workshops", "Organisational Activites"],
            link:        false
        },
        // Best Presentation EECS
        {
            title:       "Best Presentation Award",
            date:        "2023-04-04",
            description: "Won the Best Presentation Award at the EECS Symposium held at IISc Bangalore for the presentation titled `A Deep learning framework coupled with reduced order modelling for real time monitoring of fluid flows` in the AI and ML track",
            tags:        ["Awards", "Presentations"],
            link:        "https://www.linkedin.com/posts/thivinanandh_eecs2023-iisc-ai-activity-7058491654437015552-sKp8?utm_source=share&utm_medium=member_desktop"
        },
        // ICML-2024
        {
            title:       "Conference: ICML-2024 Workshop (Ai4DifferentialEquations)",
            date:        "2023-05-11",
            description: "Work titled `FastVPINNs: A fast, versatile and robust Variational PINNs framework for forward and inverse problems in science` was accepted for publication at ICLR-2024 workshop",
            tags:        ["Conferences", "Presentations"],
            link:        false
        },
        // FastVPINNs Paper
        {
            title:       "arXiV: FastVPINNs paper",
            date:        "2023-04-18",
            description: "Work paper `FastVPINNs: Tensor-Driven Acceleration of VPINNs for Complex Geometries` was uploaded to arXiv.",
            tags:        ["Publications"],
            link:        "projects/fastvpinns.html"
        },
        // Publications Paper
        {
            title:       "Publication: Journal of Open Source Software",
            date:        "2023-07-30",
            description: "Paper titled `FastVPINNs: An efficient tensor-based Python library for solving partial differential equations using hp-Variational Physics Informed Neural Networks` was published in Journal of Open Source Software",
            tags:        ["Publications"],
            link:        "projects/fastvpinns.html"
        },
        // Crunch Seminar
        {
            title:       "CRUNCH Lab: Seminar (Post Doc Offer)",
            date:        "2023-08-01",
            description: "Our work on FastVPINNs was invited to be presented at the CRUNCH Lab(Prof. George Karniadakis) at Brown University, USA. The presentation was well received and I was offered a Post Doc position by Prof. George Karniadakis at CRUNCH Lab",
            tags:        ["Presentations", "Featured"],
            link:        "events/crunch_seminar.html"
        },
        // EECS Best Presentation-2024
        {
            title:       "Best Presentation Award",
            date:        "2024-04-04",
            description: "Won the Best Presentation Award at the EECS Symposium held at IISc Bangalore for the presentation titled `FastVPINNs: Tensor-Driven Acceleration of VPINNs for Complex Geometries` in the AI and ML track",
            tags:        ["Awards", "Presentations"],
            link:        "https://www.linkedin.com/posts/thivinanandh_ai-machinelearning-research-activity-7187091966474575872-vq-_?utm_source=share&utm_medium=member_desktop"
        },
        // ICCFD - 2024
        {
            title:       "Conference: ICCFD-2024",
            date:        "2024-07-14",
            description: "Our work on `Fast and Efficient hp-Variational PINNS framework forsolving the Incompressible Navier-Stokes equations` was accepted for publication at ICCFD-2024, Held at Kobe, Japan",
            tags:        ["Conferences", "Presentations"],
            link:        "https://www.iccfd.org/iccfd12/proceedings.html"
        },
        // ParCFD - 2024
        {
            title:       "Conference: ParCFD-2024",
            date:        "2024-09-02",
            description: "Our work on `GPU ACCELERATED FEM BASED LAGRANGIAN PARTICLE TRACKING FRAMEWORK FOR HUMAN AIR PATHWAY` was accepted for publication at ParCFD-2024, Held at Germany",
            tags:        ["Conferences", "Presentations"],
            link:        "projects/gpu_siminhale.html"
        },
        // Arxiv paper - FastVPINNs NSE
        {
            title:       "arXiv: FastVPINNs for Incompressible NS Equations",
            date:        "2024-09-06",
            description: "Our work on `An efficient hp-Variational PINNs framework for incompressible Navier-Stokes equations` was uploaded to arXiv",
            tags:        ["Publications"],
            link:        "projects/fastvpinns_nse2d.html"
        },
        // Shell Presentation
        {
            title:       "Presentation: Shell.ai Scientific Conference",
            date:        "2024-09-10",
            description: "Our work on variational PINNs for wind fard modelling was presented at a poster at Shell.ai conference held at Bangalore. This work was our collaboration with Shell India Research Labs",
            tags:        ["Publications"],
            link:        "https://www.linkedin.com/posts/thivinanandh_sciml-fluiddynamics-machinelearning-activity-7239668088978186240-Us-I?utm_source=share&utm_medium=member_desktop"
        }
        // Add more events as needed
    ];

    let activeFilters = [];

    function renderFeaturedEvents() {
        const featuredEvents = events.filter(event => event.tags.includes('Featured'));
        featuredEventsList.innerHTML = '';
        if (featuredEvents.length === 0) {
            featuredEventsList.innerHTML = '<p>No featured events at this time.</p>';
        } else {
            featuredEvents.forEach(event => {
                const eventCard = createEventCard(event);
                featuredEventsList.appendChild(eventCard);
            });
        }
    }

    function renderEvents() {
        // Sort events by date in descending order (most recent first)
        events.sort((a, b) => new Date(b.date) - new Date(a.date));

        // Clear existing content in eventsList
        eventsList.innerHTML = '';

        // Populate event cards
        events.forEach(event => {
            if ((activeFilters.length === 0 || event.tags.some(tag => activeFilters.includes(tag))) && !event.tags.includes('Featured')) {
                const eventCard = createEventCard(event);
                eventsList.appendChild(eventCard);
            }
        });
    }

    function renderTimeline() {
        // Clear existing content in timeline
        timeline.innerHTML = '';

        // Create timeline items (years only)
        const years = new Set(events.map(event => new Date(event.date).getFullYear()));
        Array.from(years).sort((a, b) => b - a).forEach(year => {
            const timelineItem = document.createElement('div');
            timelineItem.classList.add('timeline-item');
            timelineItem.textContent = year;
            timelineItem.addEventListener('click', () => {
                const yearEvents = events.filter(event => new Date(event.date).getFullYear() === year);
                if (yearEvents.length > 0) {
                    yearEvents[0].element.scrollIntoView({ behavior: 'smooth' });
                }
            });
            timeline.appendChild(timelineItem);
        });
    }

    function renderTagFilter() {
        // Get all unique tags
        const allTags = new Set(events.flatMap(event => event.tags));

        // Clear existing content in tagFilter
        tagFilter.innerHTML = '';

        // Create tag filter items
        allTags.forEach(tag => {
            const tagItem = document.createElement('div');
            tagItem.classList.add('tag-filter-item');
            tagItem.textContent = tag;
            tagItem.addEventListener('click', () => {
                tagItem.classList.toggle('active');
                if (tagItem.classList.contains('active')) {
                    activeFilters.push(tag);
                } else {
                    activeFilters = activeFilters.filter(t => t !== tag);
                }
                renderEvents();
            });
            tagFilter.appendChild(tagItem);
        });
    }

    function createEventCard(event) {
        const card = document.createElement('div');
        card.classList.add('event-card');
        card.setAttribute('data-date', event.date);

        const header = document.createElement('div');
        header.classList.add('event-header');

        const title = document.createElement('h2');
        title.textContent = event.title;

        const date = document.createElement('span');
        date.classList.add('event-date');
        date.textContent = formatDate(event.date);

        header.appendChild(title);
        header.appendChild(date);

        const description = document.createElement('p');
        description.textContent = event.description;

        const footer = document.createElement('div');
        footer.classList.add('event-footer');

        const tags = document.createElement('div');
        tags.classList.add('event-tags');
        event.tags.forEach(tag => {
            const tagSpan = document.createElement('span');
            tagSpan.classList.add('tag');
            tagSpan.textContent = tag;
            tags.appendChild(tagSpan);
        });

        const readMore = document.createElement('a');
        readMore.classList.add('read-more');
        readMore.href = event.link;
        if (event.link === false) {
            readMore.style.display = 'none';
        }
        readMore.textContent = 'Read More';
        readMore.target = '_blank'; // Open link in a new tab

        footer.appendChild(tags);
        footer.appendChild(readMore);

        card.appendChild(header);
        card.appendChild(description);
        card.appendChild(footer);

        event.element = card; // Store reference to the DOM element
        return card;
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = date.toLocaleString('default', { month: 'short' });
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }

    renderFeaturedEvents();
    renderEvents();
    renderTimeline();
    renderTagFilter();
});