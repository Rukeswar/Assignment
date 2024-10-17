document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progress-bar');
    const modules = document.querySelectorAll('.module-content ul li a');
    const totalModules = modules.length;
    let completedModules = JSON.parse(sessionStorage.getItem('completedModules')) || [];

    function updateProgressBar() {
        const progress = (completedModules.length / totalModules) * 100;
        progressBar.value = progress;
    }

    modules.forEach(module => {
        module.addEventListener('click', function(event) {
            const moduleHref = this.href;
            if (!completedModules.includes(moduleHref)) {
                completedModules.push(moduleHref);
                sessionStorage.setItem('completedModules', JSON.stringify(completedModules));
            }
            updateProgressBar();
        });
    });

    updateProgressBar();

    document.querySelectorAll('.toggle-content').forEach(toggle => {
        toggle.addEventListener('click', () => {
            const contentId = toggle.getAttribute('data-target');
            const content = document.getElementById(contentId);
            if (content.style.display === 'block') {
                content.style.display = 'none';
                toggle.textContent = '+';
            } else {
                content.style.display = 'block';
                toggle.textContent = '-';
            }
        });
    });

    // Handle feedback submission
    document.querySelectorAll('.submit-feedback').forEach(button => {
        button.addEventListener('click', (e) => {
            const moduleNumber = e.target.getAttribute('data-module');
            const rating = document.getElementById(`rating-module${moduleNumber}`).value;
            const comments = document.getElementById(`comments-module${moduleNumber}`).value;

            if (rating && comments) {
                console.log(`Feedback for Module ${moduleNumber}:`);
                console.log(`Rating: ${rating}`);
                console.log(`Comments: ${comments}`);
                alert(`Thank you for your feedback on Module ${moduleNumber}!`);

                // Optionally, save feedback in localStorage or send it to a server
                let feedback = JSON.parse(localStorage.getItem('moduleFeedback')) || {};
                feedback[`module${moduleNumber}`] = { rating, comments };
                localStorage.setItem('moduleFeedback', JSON.stringify(feedback));
            } else {
                alert('Please provide both rating and feedback before submitting.');
            }
        });
    });
});

function submitFeedback() {
    const feedbackText = document.getElementById('feedback-text').value.toLowerCase();
    const responseDiv = document.getElementById('feedback-response');
    let responseMessage = "Thank you for your feedback!";
    
    // Keyword-based responses
    if (feedbackText.includes('dataset')) {
        responseMessage = "Note: The 'Dataset' section provides examples and data used in AI training.";
    } else if (feedbackText.includes('preprocessing')) {
        responseMessage = "Note: 'Preprocessing' is crucial for cleaning and structuring data before using it in models.";
    } else if (feedbackText.includes('scaling')) {
        responseMessage = "Note: 'Feature Scaling & Encoding' helps in normalizing data for better model performance.";
    }

    responseDiv.textContent = responseMessage;

    // Show popup
    showPopup();
}

function showPopup() {
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function submitFeedback() {
    // Grab feedback data
    const rating = document.getElementById('rating').value;
    const feedbackText = document.getElementById('feedback-text').value;

    // Simulate feedback submission logic
    if (feedbackText.trim() === "") {
        document.getElementById('feedback-response').textContent = "Please enter feedback.";
        return;
    }

    // Show success message
    document.getElementById('feedback-response').textContent = "Feedback submitted!";
    openPopup();
}

function openPopup() {
    document.getElementById('popup').style.display = "block";
}

function closePopup() {
    document.getElementById('popup').style.display = "none";
}
