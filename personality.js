// Define the tips for each section
const tips = {
    softSkills: "Soft skills are interpersonal attributes that enable effective communication, collaboration, and problem-solving in the workplace and beyond.",
    interview: "For interviews, practice common questions, research the company, and focus on clear communication. Be confident, calm, and articulate your thoughts well. Remember to also prepare for both technical and HR rounds.",
    resume: "Make sure your resume is clear, concise, and tailored to the job you're applying for. Highlight your strengths, achievements, and any relevant projects or internships. Use bullet points for easy readability and avoid unnecessary details.",
    gd: "In group discussions, focus on speaking confidently, listening actively, and maintaining a calm and respectful demeanor. Avoid dominating the conversation and make sure to add value to the discussion with well-thought-out points."
};

function showTip(section) {
    const tipElement = document.getElementById(`${section}-tip`);

    if (tipElement.style.display === "none") {
        // Show the tip
        tipElement.style.display = "block";
        // Set the tip text
        tipElement.textContent = tips[section];
    } else {
        // Hide the tip
        tipElement.style.display = "none";
    }
}
