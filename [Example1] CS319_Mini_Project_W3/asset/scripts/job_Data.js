const jobs = [
    {
        title: "Front-End Developer",
        qualifications: "ประสบการณ์ 1+ ปี HTML/CSS/JS, เคยใช้ React/Vue/Angular, ทำ Responsive ได้, มีผลงานบน GitHub",
        description: `
                    <p class="text-sm text-gray-600 mb-4">บริษัท: <strong>GlowTech Solutions Co., Ltd.</strong> • ทำเล: อโศก • เปิดรับ: 15-Sep-25</p>
                    <p class="text-lg font-semibold mb-2">หน้าที่ความรับผิดชอบ:</p>
                    <ul class="list-disc list-inside space-y-1 mb-4">
                        <li>พัฒนาและดูแลส่วนติดต่อผู้ใช้ (UI) ให้สวยงามและใช้งานง่าย</li>
                        <li>แปลง Wireframe/Mockup เป็นโค้ดคุณภาพสูง</li>
                        <li>ปรับปรุงประสิทธิภาพเว็บให้โหลดเร็วและรองรับหลายอุปกรณ์ (Responsive)</li>
                        <li>ติดตามเทคโนโลยี Front-End และนำมาประยุกต์ใช้</li>
                    </ul>
                    <p class="text-lg font-semibold mb-2">คุณสมบัติที่ต้องการ:</p>
                    <ul class="list-disc list-inside space-y-1 mb-4">
                        <li>ปริญญาตรีสาย Computer Science/IT หรือสาขาที่เกี่ยวข้อง</li>
                        <li>ประสบการณ์ 1+ ปี ใน HTML5, CSS3, JavaScript</li>
                        <li>คุ้นเคย React, Vue.js หรือ Angular</li>
                        <li>เข้าใจ Responsive และ Cross-Browser Compatibility</li>
                        <li>มีผลงานหรือ GitHub ให้พิจารณา</li>
                    </ul>
                    <p class="text-lg font-semibold mb-2">เงินเดือน:</p>
                    <p class="mb-4">60,000–150,000 THB/เดือน (ขึ้นอยู่กับทักษะและประสบการณ์)</p>
                    <p class="text-lg font-semibold mb-2">Benefits:</p>
                    <ul class="list-disc list-inside space-y-1">
                        <li>Cool workstation and laptop</li>
                        <li>5-day work week</li>
                        <li>Opportunity to grow within the team</li>
                        <li>Social Security</li>
                        <li>English language course</li>
                        <li>Company parties and outings</li>
                    </ul>
                `
    },
    {
        title: "Cybersecurity Analyst",
        qualifications: "ประสบการณ์ 1–3 ปีด้าน Security/Network, รู้จัก SIEM/IDS/Firewall, เข้าใจ OWASP, มี cert จะพิจารณา",
        description: `
                    <p class="text-sm text-gray-600 mb-4">บริษัท: <strong>SecureNet Asia Co., Ltd.</strong> • ทำเล: พระราม 9 • เปิดรับ: 20-Sep-25</p>
                    <p class="text-lg font-semibold mb-2">หน้าที่ความรับผิดชอบ:</p>
                    <ul class="list-disc list-inside space-y-1 mb-4">
                        <li>ตรวจสอบและวิเคราะห์เหตุการณ์ด้านความปลอดภัย (Security Incidents)</li>
                        <li>ทำ Penetration Testing และ Vulnerability Assessment</li>
                        <li>พัฒนาและปรับปรุงนโยบายความปลอดภัยขององค์กร</li>
                        <li>ทำงานร่วมกับทีมพัฒนาเพื่อแก้ไขช่องโหว่ด้านความปลอดภัย</li>
                    </ul>
                    <p class="text-lg font-semibold mb-2">คุณสมบัติที่ต้องการ:</p>
                    <ul class="list-disc list-inside space-y-1 mb-4">
                        <li>ปริญญาตรีด้าน Cybersecurity/Computer Science หรือสาขาที่เกี่ยวข้อง</li>
                        <li>ประสบการณ์ 1–3 ปี ใน Security หรือ Network Administration</li>
                        <li>ความรู้เกี่ยวกับ Firewall, IDS/IPS, SIEM</li>
                        <li>เข้าใจหลักการ Secure Coding และ OWASP Top 10</li>
                        <li>มีใบรับรองเช่น CEH, CompTIA Security+, OSCP (พิจารณาเป็นพิเศษ)</li>
                    </ul>
                    <p class="text-lg font-semibold mb-2">เงินเดือน:</p>
                    <p class="mb-4">70,000–180,000 THB/เดือน (ขึ้นอยู่กับประสบการณ์และใบรับรอง)</p>
                    <p class="text-lg font-semibold mb-2">Benefits:</p>
                    <ul class="list-disc list-inside space-y-1">
                        <li>Cool workstation and laptop</li>
                        <li>5-day work week</li>
                        <li>Opportunity to grow within the team</li>
                        <li>Social Security</li>
                        <li>English language course</li>
                        <li>Company parties and outings</li>
                    </ul>
                `
    },
    {
        title: "Data Analyst",
        qualifications: "ประสบการณ์ 1+ ปี Data Analysis, ใช้ SQL/Excel/BI (Power BI/Tableau) ดี, รู้ Python/R พิจารณา",
        description: `
                    <p class="text-sm text-gray-600 mb-4">บริษัท: <strong>InsightWorks Co., Ltd.</strong> • ทำเล: สาทร • เปิดรับ: 25-Sep-25</p>
                    <p class="text-lg font-semibold mb-2">หน้าที่ความรับผิดชอบ:</p>
                    <ul class="list-disc list-inside space-y-1 mb-4">
                        <li>รวบรวม วิเคราะห์ และแปลความหมายข้อมูลจากหลายแหล่ง</li>
                        <li>สร้างรายงานและ Dashboard ด้วย Power BI หรือ Tableau</li>
                        <li>ทำ Data Cleaning และ Transformation เพื่อเตรียมข้อมูล</li>
                        <li>ทำงานร่วมกับทีมธุรกิจเพื่อระบุปัญหาและหาโอกาสจากข้อมูล</li>
                    </ul>
                    <p class="text-lg font-semibold mb-2">คุณสมบัติที่ต้องการ:</p>
                    <ul class="list-disc list-inside space-y-1 mb-4">
                        <li>ปริญญาตรีด้านสถิติ/Data Science/Computer Science หรือสาขาที่เกี่ยวข้อง</li>
                        <li>ประสบการณ์ 1+ ปี ในการวิเคราะห์ข้อมูล</li>
                        <li>ทักษะ SQL, Excel และเครื่องมือ BI (Power BI, Tableau)</li>
                        <li>เข้าใจหลักการ Data Visualization และ Storytelling</li>
                        <li>มีความรู้ Python หรือ R (พิจารณาเป็นพิเศษ)</li>
                    </ul>
                    <p class="text-lg font-semibold mb-2">เงินเดือน:</p>
                    <p class="mb-4">50,000–120,000 THB/เดือน (ขึ้นอยู่กับทักษะและประสบการณ์)</p>
                    <p class="text-lg font-semibold mb-2">Benefits:</p>
                    <ul class="list-disc list-inside space-y-1">
                        <li>Cool workstation and laptop</li>
                        <li>5-day work week</li>
                        <li>Opportunity to grow within the team</li>
                        <li>Social Security</li>
                        <li>English language course</li>
                        <li>Company parties and outings</li>
                    </ul>
                `
    }
];

let currentJobIndex = -1;
function renderJobs() {
    const jobListingsContainer = document.getElementById('job-listings');
    jobListingsContainer.innerHTML = ''; 
    jobs.forEach((job, index) => {
        const jobCard = `
                    <div class="job-card bg-white p-6 md:p-8 cursor-pointer transition-all duration-300 hover:bg-gray-50 hover:shadow-xl">
                        <div class="flex items-center mb-2">
                            <svg class="job-card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v.5269l1.6493-.8247a.75.75 0 0 1 .6514.1643l4.6666 4.6667a.75.75 0 0 1 .1643.6514l-.8247 1.6493h.5269A.75.75 0 0 1 22.5 12v4.5a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 0 0 1.5h.5A.75.75 0 0 1 20 19.5v.75a.75.75 0 0 1-1.5 0v-.75h-6.75V19.5a.75.75 0 0 1-1.5 0v-.75H5.25a.75.75 0 0 1-1.5 0v.75A.75.75 0 0 1 3 20.25v1.5a.75.75 0 0 1-.75.75H1.5a.75.75 0 0 1-.75-.75V19.5a.75.75 0 0 1 1.5 0v.75h2.25V12a.75.75 0 0 1 .75-.75h.5269L5.3493 9.576a.75.75 0 0 1 .1643-.6514l4.6666-4.6667a.75.75 0 0 1 .6514-.1643l1.6493.8247V3a.75.75 0 0 1 .75-.75ZM15 15.75h-6a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 0 1.5Zm0 3.75h-6a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 0 1.5Z" clip-rule="evenodd" />
                            </svg>
                            <h3 class="text-xl font-bold text-gray-900">${job.title}</h3>
                        </div>
                        <p class="text-gray-600 mb-4">${job.qualifications}</p>
                        <span class="inline-block px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition-colors" onclick="showJobDetails(${index})">ดูรายละเอียด</span>
                    </div>
                `;
        jobListingsContainer.innerHTML += jobCard;
    });
}

function showJobDetails(jobIndex) {
    currentJobIndex = jobIndex;
    const job = jobs[currentJobIndex];
    document.getElementById('main-header').classList.add('hidden');
    document.getElementById('job-listings-title').classList.add('hidden');
    document.getElementById('job-listings').classList.add('hidden');
    document.getElementById('application-form').classList.add('hidden');
    document.getElementById('why-work-with-us').classList.add('hidden');


    const detailSection = document.getElementById('job-detail-section');
    document.getElementById('job-detail-title').innerText = job.title;
    document.getElementById('job-detail-content').innerHTML = `
                <p class="text-lg mb-4 font-semibold">${job.qualifications}</p>
                ${job.description}
            `;
    detailSection.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function showJobListings() {
    document.getElementById('main-header').classList.remove('hidden');
    document.getElementById('job-listings-title').classList.remove('hidden');
    document.getElementById('job-listings').classList.remove('hidden');
    document.getElementById('application-form').classList.add('hidden');
    document.getElementById('job-detail-section').classList.add('hidden');
    document.getElementById('why-work-with-us').classList.remove('hidden');

}
function showApplicationForm() {
    document.getElementById('main-header').classList.add('hidden');
    document.getElementById('job-listings-title').classList.add('hidden');
    document.getElementById('job-listings').classList.add('hidden');
    document.getElementById('job-detail-section').classList.add('hidden');
    document.getElementById('application-form').classList.remove('hidden');
    document.getElementById('why-work-with-us').classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
}
document.getElementById('application-form-data').addEventListener('submit', handleFormSubmit);
document.addEventListener('DOMContentLoaded', renderJobs);