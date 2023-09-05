// Replace this with the actual skills extracted from your work experience and project pages
let skills = ['Java', 'Python', 'JavaScript', 'HTML', 'CSS', 'SQL', 'Docker', 'Kubernetes', 'SpringBoot', 'Hibernate'];

function createWordCollage(skills) {
    let skillFrequency = {};
    for (let skill of skills) {
        if (skill in skillFrequency) {
            skillFrequency[skill]++;
        } else {
            skillFrequency[skill] = 1;
        }
    }

    let collageDiv = document.getElementById('collage');
    for (let skill in skillFrequency) {
        let skillSpan = document.createElement('span');
        skillSpan.textContent = skill;
        skillSpan.style.fontSize = `${10 + skillFrequency[skill]}px`;
        skillSpan.style.margin = '5px';
        collageDiv.appendChild(skillSpan);
    }
}

createWordCollage(skills);