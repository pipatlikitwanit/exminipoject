document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    const pageTitle = document.getElementById('page-title');
    const pageSubtitle = document.getElementById('page-subtitle');
    const itemGrid = document.getElementById('item-grid');

    const itemModal = document.getElementById('itemModal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalDuration = document.getElementById('modal-duration');
    const modalPrerequisites = document.getElementById('modal-prerequisites');
    const modalPrice = document.getElementById('modal-price'); 
    const modalImage = document.getElementById('modal-image');
    const closeBtns = document.querySelectorAll('.close-btn');

    const registerModal = document.getElementById('registerModal');
    const registrationForm = document.getElementById('registration-form');
    const courseInput = document.getElementById('course');
    const backLink = document.querySelector('.back-link');
    const genderSelect = document.getElementById('gender');
    const otherGenderInput = document.getElementById('other-gender-input');

    const alertModal = document.getElementById('alertModal');
    const alertMessage = document.getElementById('alert-message');
    const alertOkBtn = document.getElementById('alert-ok-btn');

    let data = [];
    let title = "";
    let subtitle = "";
    let imgAlt = "";

    if (type === 'training') {
        title = "หลักสูตรเพิ่มศักยภาพการทำงานสำหรับคนรุ่นใหม่";
        subtitle = "ค้นพบหลักสูตรอบรมที่ออกแบบมาเพื่อเสริมสร้างทักษะและความเชี่ยวชาญในสายงานของคุณ";
        imgAlt = "ภาพการอบรม";
        data = [
            { id: 1, title: "การพัฒนาเว็บไซต์แบบ Full-Stack ด้วย React และ Node.js", description: "สร้างแอปพลิเคชันเว็บที่สมบูรณ์แบบตั้งแต่ส่วนหน้าบ้านถึงหลังบ้าน", detail: "หลักสูตรนี้มุ่งเน้นการสร้างนักพัฒนา Full-Stack ที่มีความเชี่ยวชาญในการใช้เครื่องมือยอดนิยม โดยครอบคลุมตั้งแต่การออกแบบและพัฒนาส่วนติดต่อผู้ใช้ (Frontend) ที่ทันสมัยด้วย <strong>React</strong> ไปจนถึงการสร้าง API และจัดการฐานข้อมูลที่แข็งแกร่งด้วย <strong>Node.js</strong> และ <strong>Express</strong> ผู้เรียนจะได้ฝึกปฏิบัติจริงผ่านโปรเจกต์ที่ใช้งานได้จริง เพื่อให้พร้อมสำหรับสายอาชีพในปัจจุบัน", duration: "ระยะเวลา: 40 ชั่วโมง (5 วัน)", prerequisites: "คุณสมบัติ: มีพื้นฐานการเขียน JavaScript เบื้องต้น", image: "asset/images/training-fullstack.jpg", price: "ราคา: 15,000 บาท" },
            { id: 2, title: "การบริหารโครงการแบบ Agile และ Scrum", description: "เพิ่มประสิทธิภาพการทำงานและส่งมอบผลลัพธ์ที่รวดเร็ว", detail: "เรียนรู้กรอบการทำงานแบบ Agile และ Scrum ซึ่งเป็นมาตรฐานสากลในการบริหารโครงการด้านซอฟต์แวร์และผลิตภัณฑ์ ผู้เข้าร่วมจะได้ทำความเข้าใจหลักการสำคัญของ Agile, บทบาทและหน้าที่ของทีม Scrum (Product Owner, Scrum Master, Development Team) และเทคนิคการวางแผนงาน (Sprint Planning) การทบทวน (Sprint Review) และการปรับปรุงอย่างต่อเนื่อง (Retrospective)", duration: "ระยะเวลา: 24 ชั่วโมง (3 วัน)", prerequisites: "คุณสมบัติ: ไม่จำเป็นต้องมีประสบการณ์", image: "asset/images/training-agile.jpg", price: "ราคา: 8,500 บาท" },
            { id: 3, title: "พื้นฐานการวิเคราะห์ข้อมูลด้วย Python และ Tableau", description: "เปลี่ยนข้อมูลดิบให้เป็นข้อมูลเชิงลึกที่มีคุณค่าต่อองค์กร", detail: "หลักสูตรนี้ถูกออกแบบมาสำหรับผู้เริ่มต้นที่สนใจในสายงาน Data Analytics โดยจะสอนการใช้เครื่องมือหลักอย่าง <strong>Python</strong> พร้อมไลบรารีที่จำเป็น (Pandas, NumPy) เพื่อจัดการและทำความสะอาดข้อมูล (Data Wrangling) รวมถึงการใช้โปรแกรม <strong>Tableau</strong> สำหรับการสร้าง Dashboard และรายงานที่สวยงาม เพื่อสื่อสารข้อมูลที่ซับซ้อนให้เข้าใจง่าย", duration: "ระยะเวลา: 32 ชั่วโมง (4 วัน)", prerequisites: "คุณสมบัติ: มีความรู้พื้นฐานคอมพิวเตอร์และคณิตศาสตร์เบื้องต้น", image: "asset/images/training-data.jpg", price: "ราคา: 12,000 บาท" },
            { id: 4, title: "การออกแบบ User Experience (UX/UI) สำหรับ Mobile Application", description: "สร้างแอปพลิเคชันที่ใช้งานง่ายและมอบประสบการณ์ที่ดีที่สุด", detail: "เจาะลึกกระบวนการออกแบบที่เน้นผู้ใช้งานเป็นหลัก (User-Centered Design) ตั้งแต่ขั้นตอนการวิจัยผู้ใช้ (User Research), การสร้างผังการทำงานของแอปพลิเคชัน (User Flow), การสร้างแบบร่าง (Wireframing), และการทำต้นแบบ (Prototyping) ที่สามารถทดสอบได้จริงเพื่อปรับปรุงประสบการณ์ผู้ใช้ให้ดีที่สุด", duration: "ระยะเวลา: 24 ชั่วโมง (3 วัน)", prerequisites: "คุณสมบัติ: ไม่จำเป็นต้องมีประสบการณ์", image: "asset/images/training-uxui.jpg", price: "ราคา: 9,500 บาท" },
            { id: 5, title: "หลักสูตร Cloud Computing Essentials (AWS & Azure)", description: "ทำความเข้าใจโครงสร้างพื้นฐานและการทำงานของระบบคลาวด์", detail: "หลักสูตรที่ให้ความรู้พื้นฐานที่จำเป็นเกี่ยวกับ Cloud Computing และบริการหลักจากผู้ให้บริการชั้นนำของโลกอย่าง <strong>Amazon Web Services (AWS)</strong> และ <strong>Microsoft Azure</strong> ผู้เข้าร่วมจะได้เรียนรู้เกี่ยวกับบริการที่สำคัญ เช่น Virtual Machines (EC2/Azure VM), Storage (S3/Azure Storage) และ Networking เพื่อเตรียมความพร้อมในการทำงานบนระบบคลาวด์ในระดับเบื้องต้น", duration: "ระยะเวลา: 16 ชั่วโมง (2 วัน)", prerequisites: "คุณสมบัติ: มีความรู้พื้นฐานด้านไอที", image: "asset/images/training-cloud.jpg", price: "ราคา: 7,500 บาท" },
            { id: 6, title: "การบริหารจัดการและป้องกันภัยไซเบอร์สำหรับองค์กร", description: "เรียนรู้กลยุทธ์และเทคนิคการปกป้องข้อมูลในยุคดิจิทัล", detail: "หลักสูตรที่มุ่งเน้นการสร้างความตระหนักรู้และทักษะในการป้องกันภัยคุกคามทางไซเบอร์ที่พบบ่อย เช่น Malware, Ransomware และ Phishing ผู้เข้าร่วมจะได้เรียนรู้หลักการประเมินความเสี่ยง, การวางแผนรับมือเหตุฉุกเฉิน (Incident Response) และมาตรการทางเทคนิคเพื่อเสริมความปลอดภัยของระบบเครือข่ายและข้อมูลสำคัญขององค์กร", duration: "ระยะเวลา: 24 ชั่วโมง (3 วัน)", prerequisites: "คุณสมบัติ: มีความรู้พื้นฐานด้านไอทีเบื้องต้น", image: "asset/images/training-cybersecurity.jpg", price: "ราคา: 10,000 บาท" }
        ];
    } else if (type === 'certify') {
        title = "หลักสูตรการสอบใบรับรองมาตรฐานสากล ";
        subtitle = "พิสูจน์ความเชี่ยวชาญของคุณด้วยการสอบรับรองมาตรฐานระดับสากล เพื่อเพิ่มความน่าเชื่อถือในสายอาชีพ";
        imgAlt = "ภาพการสอบ Certify";
        data = [
            { id: 7, title: "Microsoft Certified: Azure Fundamentals (AZ-900)", description: "ใบรับรองพื้นฐานสำหรับผู้เชี่ยวชาญด้าน Cloud บน Azure", detail: "การสอบ AZ-900 เป็นใบรับรองแรกสำหรับผู้ที่สนใจในเทคโนโลยีคลาวด์ของ Microsoft Azure โดยจะทดสอบความเข้าใจในแนวคิดหลักของระบบคลาวด์, บริการหลักของ Azure เช่น Azure Virtual Machines, Azure Storage และ Azure Networking รวมถึงการบริหารจัดการและการคิดค่าบริการที่เกี่ยวข้อง", duration: "แนะนำการเตรียมตัว: 1-2 สัปดาห์", prerequisites: "คุณสมบัติ: ไม่จำเป็นต้องมีประสบการณ์คลาวด์มาก่อน", image: "asset/images/certify-azure.jpg", price: "ราคา: 3,000 บาท (ค่าสอบ)" },
            { id: 8, title: "Project Management Professional (PMP)", description: "ใบรับรองมาตรฐานระดับโลกสำหรับผู้บริหารโครงการ", detail: "ใบรับรอง PMP จาก Project Management Institute (PMI) เป็นมาตรฐานสากลที่พิสูจน์ความเชี่ยวชาญในการบริหารโครงการที่ซับซ้อน ครอบคลุมการวางแผน, การบริหารทรัพยากร, การสื่อสาร และการจัดการความเสี่ยง เพื่อนำโครงการให้ประสบความสำเร็จตามเป้าหมายและงบประมาณที่กำหนด", duration: "แนะนำการเตรียมตัว: 2-3 เดือน", prerequisites: "คุณสมบัติ: ประสบการณ์บริหารโครงการ 3-5 ปี", image: "asset/images/certify-pmp.jpg", price: "ราคา: 19,000 บาท (ค่าสอบ)" },
            { id: 9, title: "Cisco Certified Network Associate (CCNA)", description: "ใบรับรองที่เป็นที่ยอมรับในวงการเครือข่ายคอมพิวเตอร์", detail: "การสอบ CCNA วัดทักษะที่จำเป็นสำหรับผู้ดูแลระบบเครือข่ายยุคใหม่ ซึ่งรวมถึงการติดตั้ง, กำหนดค่า, และแก้ไขปัญหาเครือข่ายส่วนของระบบ LAN, WAN และอุปกรณ์เครือข่ายของ Cisco เพื่อให้ระบบทำงานได้อย่างมีประสิทธิภาพและปลอดภัยสูงสุด", duration: "แนะนำการเตรียมตัว: 2-3 เดือน", prerequisites: "คุณสมบัติ: มีความรู้พื้นฐานด้านเครือข่าย", image: "asset/images/certify-ccna.jpg", price: "ราคา: 10,500 บาท (ค่าสอบ)" },
            { id: 10, title: "Certified ScrumMaster (CSM)", description: "ใบรับรองสำหรับผู้ที่ต้องการเป็น Scrum Master มืออาชีพ", detail: "ใบรับรอง CSM จาก Scrum Alliance เป็นที่ยอมรับทั่วโลกสำหรับผู้ที่ต้องการเป็น Scrum Master ที่มีประสิทธิภาพ โดยจะเน้นความเข้าใจในบทบาทการเป็นผู้นำที่ให้บริการทีม (Servant Leadership), การอำนวยความสะดวกในการประชุม (Facilitation) และการขจัดอุปสรรคให้กับทีมเพื่อให้บรรลุเป้าหมาย", duration: "แนะนำการเตรียมตัว: เข้าร่วมการอบรม CSM 2 วัน", prerequisites: "คุณสมบัติ: ไม่จำเป็นต้องมีประสบการณ์", image: "asset/images/certify-csm.jpg", price: "ราคา: 25,000 บาท (ค่าอบรมและสอบ)" },
            { id: 11, title: "Google Cloud Certified - Associate Cloud Engineer", description: "ใบรับรองที่วัดความสามารถในการใช้งาน Google Cloud Platform", detail: "การสอบนี้เหมาะสำหรับผู้ที่มีประสบการณ์ในการใช้ Google Cloud Platform (GCP) ซึ่งจะทดสอบความสามารถในการติดตั้งและจัดการแอปพลิเคชัน, การดูแลระบบคลาวด์, การจัดการโครงสร้างพื้นฐาน และการดูแลระบบให้ทำงานได้อย่างมีประสิทธิภาพ", duration: "แนะนำการเตรียมตัว: 1-2 เดือน", prerequisites: "คุณสมบัติ: มีประสบการณ์ GCP 6 เดือนขึ้นไป", image: "asset/images/certify-gcp.jpg", price: "ราคา: 4,000 บาท (ค่าสอบ)" },
            { id: 12, title: "Professional Scrum Product Owner I (PSPO I)", description: "ใบรับรองที่ยืนยันความรู้ความเข้าใจในบทบาท Product Owner", detail: "ใบรับรอง PSPO I จาก Scrum.org เป็นการยืนยันความรู้ความเข้าใจในบทบาทของ Product Owner ซึ่งเป็นผู้กำหนดทิศทางของผลิตภัณฑ์ โดยเน้นที่การสร้างมูลค่าสูงสุดให้กับธุรกิจ, การสื่อสารวิสัยทัศน์ของผลิตภัณฑ์ (Product Vision) และการจัดการ Product Backlog อย่างมีประสิทธิภาพ", duration: "แนะนำการเตรียมตัว: เข้าร่วมการอบรม PSPO 2 วัน", prerequisites: "คุณสมบัติ: ไม่จำเป็นต้องมีประสบการณ์", image: "asset/images/certify-pspo.jpg", price: "ราคา: 18,000 บาท (ค่าอบรมและสอบ)" }
        ];
    } else if (type === 'seminar') {
        title = "โปรแกรมการสัมมนาและเวิร์กช็อป";
        subtitle = "อัปเดตเทรนด์และแลกเปลี่ยนความรู้กับผู้เชี่ยวชาญในวงการ เพื่อต่อยอดสู่การพัฒนาที่ไม่หยุดนิ่ง";
        imgAlt = "ภาพการสัมมนา";
        data = [
            { id: 13, title: "สัมมนา AI และอนาคตของแรงงาน", description: "สำรวจผลกระทบของปัญญาประดิษฐ์ต่อโลกการทำงานในอนาคต", detail: "การสัมมนาที่จะพาคุณไปเจาะลึกถึงผลกระทบของปัญญาประดิษฐ์ (AI) และระบบอัตโนมัติ (Automation) ที่กำลังจะเข้ามาเปลี่ยนแปลงโลกการทำงานในทุกอุตสาหกรรม โดยผู้เชี่ยวชาญจะมาแบ่งปันข้อมูลเกี่ยวกับทักษะใหม่ๆ ที่จำเป็น, โอกาสในการสร้างอาชีพใหม่ๆ และวิธีการปรับตัวเพื่อความสำเร็จในยุคที่เทคโนโลยีขับเคลื่อนโลก", duration: "ระยะเวลา: ครึ่งวัน", prerequisites: "คุณสมบัติ: ผู้สนใจทั่วไป", image: "asset/images/seminar-ai.jpg", price: "ราคา: 1,500 บาท" },
            { id: 14, title: "สัมมนา FinTech: นวัตกรรมพลิกโฉมวงการการเงิน", description: "เจาะลึกเทคโนโลยีทางการเงินล่าสุด เช่น Blockchain และ Digital Banking", detail: "สำรวจเทรนด์และนวัตกรรมล่าสุดในอุตสาหกรรมการเงินยุคใหม่ (FinTech) ทั้งในส่วนของ <strong>Blockchain</strong>, <strong>Cryptocurrency</strong> และระบบ <strong>Digital Banking</strong> รวมถึงผลกระทบต่อสถาบันการเงินดั้งเดิม และโอกาสทางธุรกิจใหม่ๆ ที่เกิดขึ้นจากเทคโนโลยีเหล่านี้", duration: "ระยะเวลา: 1 วันเต็ม", prerequisites: "คุณสมบัติ: ผู้สนใจด้านธุรกิจและการเงิน", image: "asset/images/seminar-fintech.jpg", price: "ราคา: 2,500 บาท" },
            { id: 15, title: "สัมมนา Cybersecurity Trends 2025", description: "อัปเดตแนวโน้มภัยคุกคามทางไซเบอร์ที่กำลังจะมาถึง", detail: "ผู้เชี่ยวชาญด้านความปลอดภัยไซเบอร์จะมาอัปเดตข้อมูลเชิงลึกเกี่ยวกับภัยคุกคามล่าสุดที่คาดว่าจะเกิดขึ้นในปี 2025 รวมถึงเทคนิคการโจมตีที่ซับซ้อนขึ้น, ช่องโหว่ใหม่ๆ และกลยุทธ์การป้องกันที่องค์กรและบุคคลทั่วไปควรนำไปปรับใช้", duration: "ระยะเวลา: ครึ่งวัน", prerequisites: "คุณสมบัติ: ผู้ดูแลระบบไอทีและผู้สนใจทั่วไป", image: "asset/images/seminar-cyber.jpg", price: "ราคา: 1,800 บาท" },
            { id: 16, title: "สัมมนาสร้างธุรกิจ Startup ในยุคดิจิทัล", description: "เรียนรู้เคล็ดลับและประสบการณ์จากผู้ก่อตั้ง Startup ที่ประสบความสำเร็จ", detail: "การสัมมนาสำหรับผู้ที่ฝันอยากจะเป็นผู้ประกอบการ โดยจะได้รับฟังประสบการณ์จริงจากผู้ก่อตั้ง Startup ที่ประสบความสำเร็จ ครอบคลุมหัวข้อสำคัญตั้งแต่การค้นหาปัญหาที่แท้จริง, การสร้าง Business Model, การระดมทุน ไปจนถึงกลยุทธ์การขยายธุรกิจให้เติบโตอย่างยั่งยืน", duration: "ระยะเวลา: 1 วันเต็ม", prerequisites: "คุณสมบัติ: ผู้ที่สนใจเริ่มธุรกิจ", image: "asset/images/seminar-startup.jpg", price: "ราคา: 3,000 บาท" },
            { id: 17, title: "สัมมนาการตลาดดิจิทัลแบบครบวงจร", description: "ครอบคลุมกลยุทธ์ SEO, SEM, Social Media Marketing และ Content Marketing", detail: "เรียนรู้วิธีการวางแผนและใช้เครื่องมือการตลาดดิจิทัลอย่างครบวงจร เพื่อเข้าถึงกลุ่มเป้าหมาย, สร้างการรับรู้แบรนด์ และเพิ่มยอดขายออนไลน์ หลักสูตรนี้จะเจาะลึกทั้ง <strong>SEO (Search Engine Optimization)</strong>, <strong>SEM (Search Engine Marketing)</strong> และการตลาดบนโซเชียลมีเดีย", duration: "ระยะเวลา: 1 วันเต็ม", prerequisites: "คุณสมบัติ: ผู้ประกอบการและนักการตลาด", image: "asset/images/seminar-marketing.jpg", price: "ราคา: 2,200 บาท" },
            { id: 18, title: "สัมมนา Soft Skills ที่จำเป็นสำหรับทุกอาชีพ", description: "พัฒนาทักษะด้านการสื่อสาร, การทำงานร่วมกับผู้อื่น และการแก้ปัญหา", detail: "ทักษะด้าน Soft Skills เป็นสิ่งสำคัญสำหรับความก้าวหน้าในอาชีพ การสัมมนานี้จะช่วยให้คุณพัฒนาทักษะที่จำเป็น เช่น การสื่อสารที่มีประสิทธิภาพ, การทำงานเป็นทีม, การคิดเชิงวิพากษ์ (Critical Thinking) และการแก้ไขปัญหาเฉพาะหน้า เพื่อเพิ่มโอกาสในความสำเร็จในสายงานของคุณ", duration: "ระยะเวลา: ครึ่งวัน", prerequisites: "คุณสมบัติ: ผู้สนใจพัฒนาตนเอง", image: "asset/images/seminar-softskills.jpg", price: "ราคา: 1,000 บาท" }
        ];
    } else {
        title = "ไม่พบรายการ";
        subtitle = "ขออภัย ไม่พบหมวดหมู่ที่คุณกำลังค้นหา โปรดเลือกจากหน้าบริการ";
        data = [];
    }
    
    pageTitle.textContent = title;
    pageSubtitle.textContent = subtitle;
    itemGrid.innerHTML = "";
    
    data.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'card bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col overflow-hidden';
        
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${imgAlt}" class="rounded-t-lg w-full">
            <div class="card-content p-6">
                <h3 class="text-xl font-semibold mb-2">${item.title}</h3>
                <p class="text-gray-600 text-sm mb-4">${item.description}</p>
                <a href="#" class="inline-block mt-auto px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors show-modal-btn" data-id="${item.id}">ดูรายละเอียด</a>
            </div>
        `;
        itemGrid.appendChild(itemDiv);
    });

    function populateCourseDropdown() {
        if (courseInput) {
            data.forEach(item => {
                const option = document.createElement('option');
                option.value = item.title;
                option.textContent = item.title;
                courseInput.appendChild(option);
            });
        }
    }
    populateCourseDropdown();
    
    function showAlertModal(message) {
        alertMessage.textContent = message;
        alertModal.classList.remove('hidden');
        alertModal.classList.add('flex');
    }
    
    itemGrid.addEventListener('click', (event) => {
        const cardElement = event.target.closest('.card');
        
        if (cardElement) {
            event.preventDefault();
            const itemId = parseInt(cardElement.querySelector('.show-modal-btn').dataset.id);
            const item = data.find(d => d.id === itemId);
            if (item) {
                modalTitle.textContent = item.title;
                modalDescription.innerHTML = item.detail;
                modalDuration.textContent = item.duration || '';
                modalPrerequisites.textContent = item.prerequisites || '';
                modalPrice.textContent = item.price || ''; 
                modalImage.src = item.image;
                modalImage.alt = item.title;
                
                const registerButton = document.querySelector('#itemModal a');
                registerButton.textContent = "ลงทะเบียน";
                registerButton.classList.add('register-btn');
                registerButton.removeAttribute('href');
                registerButton.setAttribute('data-course', item.title);

                itemModal.classList.remove('hidden');
                itemModal.classList.add('flex');
            }
        }
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            itemModal.classList.remove('flex');
            itemModal.classList.add('hidden');
            registerModal.classList.remove('flex');
            registerModal.classList.add('hidden');
        });
    });

    backLink.addEventListener('click', (event) => {
        event.preventDefault();
        registerModal.classList.remove('flex');
        registerModal.classList.add('hidden');
        itemModal.classList.remove('hidden');
        itemModal.classList.add('flex');
    });

    alertOkBtn.addEventListener('click', () => {
        alertModal.classList.remove('flex');
        alertModal.classList.add('hidden');
    });
    
    window.addEventListener('click', (event) => {
        if (event.target === itemModal) {
            itemModal.classList.remove('flex');
            itemModal.classList.add('hidden');
        }
        if (event.target === registerModal) {
            registerModal.classList.remove('flex');
            registerModal.classList.add('hidden');
        }
    });

    const registerButtonInModal = document.querySelector('#itemModal a');
    if (registerButtonInModal) {
        registerButtonInModal.addEventListener('click', (event) => {
            if (event.target.classList.contains('register-btn')) {
                event.preventDefault();
                const courseTitle = event.target.getAttribute('data-course');
                courseInput.value = courseTitle;
                itemModal.classList.remove('hidden');
                itemModal.classList.add('hidden');
                registerModal.classList.remove('hidden');
                registerModal.classList.add('flex');
            }
        });
    }

    genderSelect.addEventListener('change', (event) => {
        if (event.target.value === 'other') {
            otherGenderInput.style.display = 'block';
        } else {
            otherGenderInput.style.display = 'none';
        }
    });

    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const firstname = document.getElementById('firstname').value.trim();
        const lastname = document.getElementById('lastname').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const course = courseInput.value;
        const address = document.getElementById('address').value.trim();
        const country = document.getElementById('country').value.trim();
        const zipcode = document.getElementById('zipcode').value.trim();
        let gender = genderSelect.value;
        const otherGenderText = document.getElementById('other_gender_text').value.trim();

        const nameRegex = /^[a-zA-Z\u0E00-\u0E7F]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{9,10}$/;
        const zipCodeRegex = /^[0-9]{5}$/;

        if (!course) {
            showAlertModal('กรุณาเลือกหลักสูตรที่สนใจ');
            return;
        }

        if (!firstname || !lastname) {
            showAlertModal('กรุณากรอกชื่อจริงและนามสกุลให้ครบถ้วน');
            return;
        }

        if (!nameRegex.test(firstname)) {
            showAlertModal('ชื่อจริงต้องเป็นตัวอักษรเท่านั้น');
            return;
        }
        
        if (!nameRegex.test(lastname)) {
            showAlertModal('นามสกุลต้องเป็นตัวอักษรเท่านั้น');
            return;
        }

        if (!email) {
            showAlertModal('กรุณากรอกอีเมล');
            return;
        }
        if (!emailRegex.test(email)) {
            showAlertModal('รูปแบบอีเมลไม่ถูกต้อง');
            return;
        }

        if (!phone) {
            showAlertModal('กรุณากรอกเบอร์โทรศัพท์');
            return;
        }
        if (!phoneRegex.test(phone)) {
            showAlertModal('เบอร์โทรศัพท์ต้องมีตัวเลข 9 หรือ 10 หลักเท่านั้น');
            return;
        }
        
        if (!address) {
            showAlertModal('กรุณากรอกที่อยู่');
            return;
        }
        
        if (!country) {
            showAlertModal('กรุณาเลือกประเทศ');
            return;
        }
        
        if (!zipcode) {
            showAlertModal('กรุณากรอกรหัสไปรษณีย์');
            return;
        }
        if (!zipCodeRegex.test(zipcode)) {
            showAlertModal('รหัสไปรษณีย์ต้องมีตัวเลข 5 หลักเท่านั้น');
            return;
        }

        if (!gender) {
            showAlertModal('กรุณาเลือกเพศ');
            return;
        }
        if (gender === 'other') {
            if (!otherGenderText) {
                showAlertModal('กรุณาระบุเพศอื่นๆ');
                return;
            }
            gender = otherGenderText;
        }
        
        console.log('Registration submitted:', {
            firstname: firstname,
            lastname: lastname,
            email: email,
            phone: phone,
            course: course,
            address: address,
            country: country,
            zipcode: zipcode,
            gender: gender
        });
        
        showAlertModal('การลงทะเบียนสำเร็จแล้ว! เราจะติดต่อกลับโดยเร็วที่สุด');
        registrationForm.reset();
        otherGenderInput.style.display = 'none';
    });
});