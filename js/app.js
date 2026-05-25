const BD_LOCATIONS = {
    "Dhaka": ["Adabor", "Badda", "Bangsal", "Bimanbandar", "Cantonment", "Chak Bazar", "Dakshinkhan", "Darus Salam", "Dhanmondi", "Demra", "Gendaria", "Gulshan", "Hazaribagh", "Jatrabari", "Kadamtali", "Kafrul", "Kalabagan", "Kamrangirchar", "Khilgaon", "Khilkhet", "Kotwali", "Lalbagh", "Mirpur", "Mohammadpur", "Motijheel", "New Market", "Pallabi", "Paltan", "Ramna", "Rampura", "Sabujbagh", "Shah Ali", "Shahbagh", "Sher-e-Bangla Nagar", "Shyampur", "Sutrapur", "Tejgaon", "Tejgaon Industrial Area", "Turag", "Uttara", "Uttar Khan", "Vatara", "Dhamrai", "Dohar", "Keraniganj", "Nawabganj", "Savar"],
    "Chattogram": ["Anwara", "Banshkhali", "Boalkhali", "Chandanaish", "Fatickchhari", "Hathazari", "Lohagara", "Mirsharai", "Patiya", "Rangunia", "Raozan", "Sandwip", "Satkania", "Sitakunda", "Akbar Shah", "Bakalia", "Bayazid Bostami", "Chandgaon", "Double Mooring", "EPZ", "Halishahar", "Karnaphuli", "Khulshi", "Kotwali", "Pahartali", "Patenga", "Panchlaish", "Port", "Sadarghat"],
    "Sylhet": ["Balaganj", "Beanibazar", "Bishwanath", "Companiganj", "Dakshin Surma", "Fenchuganj", "Golapganj", "Gowainghat", "Jaintiapur", "Kanaighat", "Osmani Nagar", "Sylhet Sadar", "Zakiganj"],
    "Rajshahi": ["Bagha", "Bagmara", "Charghat", "Durgapur", "Godagari", "Mohanpur", "Paba", "Puthia", "Tanore", "Boalia", "Matihar", "Rajshahi Court", "Shah Mokhdum"],
    "Khulna": ["Batiaghata", "Dacope", "Dumuria", "Dighalia", "Koyra", "Paikgachha", "Phultala", "Rupsha", "Terokhada", "Daulatpur", "Khalishpur", "Khan Jahan Ali", "Khulna Sadar", "Sonadanga"],
    "Barishal": ["Agailjhara", "Babuganj", "Bakerganj", "Banaripara", "Gaurnadi", "Hizla", "Barishal Sadar", "Mehendiganj", "Muladi", "Wazirpur"],
    "Rangpur": ["Badarganj", "Gangachara", "Kaunia", "Rangpur Sadar", "Mithapukur", "Pirgachha", "Pirganj", "Taraganj"],
    "Mymensingh": ["Bhaluka", "Dhobaura", "Fulbaria", "Gaffargaon", "Gauripur", "Haluaghat", "Ishwarganj", "Mymensingh Sadar", "Muktagachha", "Nandail", "Phulpur", "Trishal", "Tara Khanda"],
    "Gazipur": ["Gazipur Sadar", "Kaliakair", "Kaliganj", "Kapasia", "Sreepur"],
    "Narayanganj": ["Araihazar", "Bandar", "Narayanganj Sadar", "Rupganj", "Sonargaon"],
    "Comilla": ["Barura", "Brahmanpara", "Burichang", "Chandina", "Chauddagram", "Daudkandi", "Debidwar", "Homna", "Laksam", "Muradnagar", "Nangalkot", "Comilla Sadar", "Meghna", "Monohargonj", "Sadar South", "Titas", "Lalmai"],
    "Bogra": ["Adamdighi", "Bogra Sadar", "Dhunat", "Dhupchanchia", "Gabtali", "Kahaloo", "Nandigram", "Sariakandi", "Shajahanpur", "Sherpur", "Shibatganj", "Sonatala"],
    "Dinajpur": ["Birampur", "Birganj", "Birol", "Bochaganj", "Chirirbandar", "Phulbari", "Ghoraghat", "Hakimpur", "Kaharole", "Khansama", "Dinajpur Sadar", "Nawabganj", "Parbatipur"],
    "Noakhali": ["Begumganj", "Noakhali Sadar", "Chatkhil", "Companiganj", "Hatiya", "Senbagh", "Sonaimuri", "Subarnachar", "Kabirhat"],
    "Feni": ["Chhagalnaiya", "Daganbhuiyan", "Feni Sadar", "Parshuram", "Sonagazi", "Fulgazi"],
    "Brahmanbaria": ["Akhaura", "Bancharampur", "Brahmanbaria Sadar", "Kasba", "Nabinagar", "Nasirnagar", "Sarail", "Ashuganj", "Bijoynagar"],
    "Chandpur": ["Faridganj", "Haimchar", "Haziganj", "Kachua", "Matlab North", "Matlab South", "Chandpur Sadar", "Shahrasti"],
    "Lakshmipur": ["Lakshmipur Sadar", "Raipur", "Ramganj", "Ramgati", "Kamalnagar"],
    "Cox's Bazar": ["Chakaria", "Cox's Bazar Sadar", "Kutubdia", "Maheshkhali", "Ramu", "Teknaf", "Ukhia", "Pekua"],
    "Habiganj": ["Ajmiriganj", "Bahubal", "Baniyachong", "Chunarughat", "Habiganj Sadar", "Lakhai", "Madhabpur", "Nabiganj", "Sayestaganj"],
    "Moulvibazar": ["Barlekha", "Kamalganj", "Kulaura", "Moulvibazar Sadar", "Rajnagar", "Sreemangal", "Juri"],
    "Sunamganj": ["Bishwamvapur", "Chhatak", "Derai", "Dharamapasha", "Dowarabazar", "Jagannathpur", "Jamalganj", "Sallah", "Sunamganj Sadar", "Tahirpur", "South Sunamganj"],
    "Naogaon": ["Atrai", "Badalgachhi", "Dhamoirhat", "Manda", "Mahadevpur", "Naogaon Sadar", "Niamatpur", "Patnitala", "Porsha", "Raninagar", "Sapahar"],
    "Natore": ["Bagatipara", "Baraigram", "Gurudaspur", "Lalpur", "Natore Sadar", "Singra", "Naldanga"],
    "Pabna": ["Atgharia", "Bera", "Bhangura", "Chatmohar", "Faridpur", "Ishwardi", "Pabna Sadar", "Santhia", "Sujanagar"],
    "Sirajganj": ["Belkuchi", "Chauhali", "Kamarkhanda", "Kazipur", "Raiganj", "Shahjadpur", "Sirajganj Sadar", "Tarash", "Ullahpara"],
    "Joypurhat": ["Akkelpur", "Joypurhat Sadar", "Kalai", "Khetlal", "Panchbibi"],
    "Chapainawabganj": ["Bholahat", "Gomastapur", "Nachole", "Chapainawabganj Sadar", "Shibganj"],
    "Kushtia": ["Bheramara", "Daulatpur", "Khoksa", "Kumarkhali", "Kushtia Sadar", "Mirpur"],
    "Jashore": ["Abhaynagar", "Bagherpara", "Chaugachha", "Jhikargachha", "Keshabpur", "Jashore Sadar", "Manirampur", "Sharsha"],
    "Satkhira": ["Assasuni", "Debhata", "Kalaroa", "Kaliganj", "Satkhira Sadar", "Shyamnagar", "Tala"],
    "Meherpur": ["Gangni", "Meherpur Sadar", "Mujibnagar"],
    "Chuadanga": ["Alamdanga", "Chuadanga Sadar", "Damurhuda", "Jibannagar"],
    "Jhenaidah": ["Harinakunda", "Jhenaidah Sadar", "Kaliganj", "Kotchandpur", "Maheshpur", "Shailkupa"],
    "Magura": ["Magura Sadar", "Mohammadpur", "Shalikha", "Sreepur"],
    "Narail": ["Kalia", "Lohagara", "Narail Sadar"],
    "Bagerhat": ["Bagerhat Sadar", "Chitalmari", "Fakirhat", "Kachua", "Mollahat", "Mongla", "Morrelganj", "Rampal", "Sarankhola"],
    "Bhola": ["Bhola Sadar", "Burhanuddin", "Char Fasson", "Daulatkhan", "Lalmohan", "Manpura", "Tazumuddin"],
    "Jhalokati": ["Jhalokati Sadar", "Kathalia", "Nalchity", "Rajapur"],
    "Pirojpur": ["Bhandaria", "Kawkhali", "Mathbaria", "Nazirpur", "Pirojpur Sadar", "Nesarabad (Swarupkati)", "Zianagar"],
    "Barguna": ["Amtali", "Bamna", "Barguna Sadar", "Betagi", "Patharghata", "Taltali"],
    "Patuakhali": ["Dashmina", "Galachipa", "Kalapara", "Mirzaganj", "Patuakhali Sadar", "Rangabali", "Dumki", "Bauphal"],
    "Panchagarh": ["Atwari", "Boda", "Debiganj", "Panchagarh Sadar", "Tetulia"],
    "Thakurgaon": ["Baliadangi", "Haripur", "Pirganj", "Ranisankail", "Thakurgaon Sadar"],
    "Gaibandha": ["Phulchhari", "Gaibandha Sadar", "Gobindaganj", "Palashbari", "Sadullapur", "Saghata", "Sundarganj"],
    "Kurigram": ["Bhurungamari", "Chilmari", "Phulbari", "Kurigram Sadar", "Nageshwari", "Rajarhat", "Rajibpur", "Rowmari", "Ulipur"],
    "Lalmonirhat": ["Aditmari", "Hatibandha", "Kaliganj", "Lalmonirhat Sadar", "Patgram"],
    "Nilphamari": ["Dimla", "Domar", "Jaldhaka", "Kishoreganj", "Nilphamari Sadar", "Saidpur"],
    "Sherpur": ["Jhenaigati", "Nakla", "Nalitabari", "Sherpur Sadar", "Sreebardi"],
    "Jamalpur": ["Baksiganj", "Dewanganj", "Islampur", "Jamalpur Sadar", "Madarganj", "Melenandaha", "Sarishabari"],
    "Netrokona": ["Atpara", "Barhatta", "Durgapur", "Khaliajuri", "Kalmakanda", "Kendua", "Madan", "Mohanganj", "Netrokona Sadar", "Purbadhala"],
    "Kishoreganj": ["Austagram", "Bajitpur", "Bhairab", "Hossainpur", "Itna", "Karimganj", "Katiadi", "Kishoreganj Sadar", "Kuliarchar", "Mithamain", "Nikli", "Pakundia", "Tarail"],
    "Tangail": ["Gopalpur", "Basail", "Bhuapur", "Delduar", "Ghatail", "Kalihati", "Madhupur", "Mirzapur", "Nagarpur", "Sakhipur", "Tangail Sadar", "Dhanbari"],
    "Munshiganj": ["Gazaria", "Lohajang", "Munshiganj Sadar", "Sirajdikhan", "Sreenagar", "Tongibari"],
    "Faridpur": ["Alfadanga", "Bhanga", "Boalmari", "Charbhadrasan", "Faridpur Sadar", "Madukhali", "Nagarkanda", "Sadarpur", "Saltha"],
    "Madaripur": ["Rajoir", "Madaripur Sadar", "Kalkini", "Shibchar"],
    "Shariatpur": ["Bhedarganj", "Damudya", "Gosairhat", "Naria", "Shariatpur Sadar", "Zajira"],
    "Gopalganj": ["Gopalganj Sadar", "Kashiani", "Kotalipara", "Muksudpur", "Tungipara"],
    "Rajbari": ["Baliakandi", "Goalandaghat", "Pangsha", "Rajbari Sadar", "Kalukhali"],
    "Narsingdi": ["Belabo", "Monohardi", "Narsingdi Sadar", "Palash", "Raipura", "Shibpur"],
    "Manikganj": ["Daulatpur", "Ghiror", "Harirampur", "Manikganj Sadar", "Saturia", "Shivalaya", "Singair"],
    "Bandarban": ["Bandarban Sadar", "Thanchi", "Lama", "Naikhongchhari", "Ali Kadam", "Rowangchhari", "Ruma"],
    "Khagrachari": ["Dighinala", "Khagrachari Sadar", "Lakshmichhari", "Mahalchhari", "Manikchhari", "Matiranga", "Panchhari", "Ramgarh"],
    "Rangamati": ["Bagaichhari", "Barkal", "Kawkhali", "Belaichhari", "Kaptai", "Jurachhari", "Langadu", "Naniyachar", "Rajasthali", "Rangamati Sadar"]
};

// Configuration for GitHub Persistence
const CONFIG = {
    GITHUB_TOKEN: localStorage.getItem('gh_token') || '',
    REPO_OWNER: localStorage.getItem('gh_owner') || '',
    REPO_NAME: localStorage.getItem('gh_repo') || '',
    FILE_PATH: 'donors.json'
};

let allDonors = [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateDistricts();
    loadDonors();
    setupForm();
    setupLocationChain();
});

function populateDistricts() {
    const districtSelects = ['filter-district', 'reg-district'];
    const sortedDistricts = Object.keys(BD_LOCATIONS).sort();
    
    districtSelects.forEach(id => {
        const select = document.getElementById(id);
        sortedDistricts.forEach(d => {
            const opt = document.createElement('option');
            opt.value = d;
            opt.textContent = d;
            select.appendChild(opt);
        });
    });
}

function setupLocationChain() {
    // Chain for Search Filters
    document.getElementById('filter-district').addEventListener('change', (e) => {
        updateUpazilaOptions('filter-upazila', e.target.value);
    });

    // Chain for Registration Form
    document.getElementById('reg-district').addEventListener('change', (e) => {
        updateUpazilaOptions('reg-upazila', e.target.value);
    });
}

function updateUpazilaOptions(targetId, district) {
    const select = document.getElementById(targetId);
    select.innerHTML = '<option value="">All Upazilas/Thanas</option>';
    
    if (district && BD_LOCATIONS[district]) {
        BD_LOCATIONS[district].sort().forEach(upazila => {
            const opt = document.createElement('option');
            opt.value = upazila;
            opt.textContent = upazila;
            select.appendChild(opt);
        });
    }
}

async function loadDonors() {
    const grid = document.getElementById('donor-grid');
    grid.innerHTML = '<div class="col-span-full text-center py-12 text-slate-500"><i class="fas fa-circle-notch fa-spin mr-2"></i> Syncing with cloud database...</div>';

    try {
        let data;
        if (CONFIG.GITHUB_TOKEN && CONFIG.REPO_OWNER) {
            const response = await fetch(`https://api.github.com/repos/${CONFIG.REPO_OWNER}/${CONFIG.REPO_NAME}/contents/${CONFIG.FILE_PATH}`, {
                headers: { 'Authorization': `token ${CONFIG.GITHUB_TOKEN}` }
            });
            if (!response.ok) throw new Error('Repo not found');
            const json = await response.json();
            data = JSON.parse(atob(json.content));
            localStorage.setItem('gh_sha', json.sha);
        } else {
            const response = await fetch('donors.json');
            data = await response.json();
        }
        
        allDonors = data;
        renderDonors(allDonors);
    } catch (error) {
        console.error('Error loading donors:', error);
        grid.innerHTML = '<div class="col-span-full text-center py-12 text-red-500">Failed to sync. Please set your GitHub Token in Browser Console.</div>';
    }
}

function renderDonors(donors) {
    const grid = document.getElementById('donor-grid');
    const countLabel = document.getElementById('donor-count');
    grid.innerHTML = '';
    countLabel.textContent = `${donors.length} active donors in BD`;

    if (donors.length === 0) {
        grid.innerHTML = '<div class="col-span-full text-center py-12 text-slate-400">No donors found for this location.</div>';
        return;
    }

    donors.forEach(donor => {
        const card = document.createElement('div');
        card.className = 'bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group';
        card.innerHTML = `
            <div class="absolute top-0 right-0 w-16 h-16 blood-gradient opacity-5 rounded-bl-full group-hover:opacity-10 transition-opacity"></div>
            <div class="flex justify-between items-start mb-4">
                <div class="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-600 font-bold text-lg">
                    ${donor.bloodGroup}
                </div>
                <div class="text-right">
                    <span class="block text-xs font-bold text-red-600 uppercase tracking-tighter">${donor.district}</span>
                    <span class="block text-[10px] text-slate-400 font-medium">${donor.upazila || 'N/A'}</span>
                </div>
            </div>
            <h4 class="text-lg font-bold text-slate-900 mb-1">${donor.name}</h4>
            <p class="text-slate-500 text-sm mb-4"><i class="fas fa-clock mr-1"></i> Last donation: ${donor.lastDonation || 'Never'}</p>
            <a href="tel:${donor.phone}" class="flex items-center justify-center w-full py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-red-600 transition-colors">
                <i class="fas fa-phone mr-2"></i> Call Now
            </a>
        `;
        grid.appendChild(card);
    });
}

function applyFilters() {
    const district = document.getElementById('filter-district').value;
    const upazila = document.getElementById('filter-upazila').value;
    const group = document.getElementById('filter-group').value;

    const filtered = allDonors.filter(d => {
        return (!district || d.district === district) && 
               (!upazila || d.upazila === upazila) &&
               (!group || d.bloodGroup === group);
    });

    renderDonors(filtered);
}

function setupForm() {
    const form = document.getElementById('register-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const newDonor = {
            id: Date.now(),
            name: document.getElementById('reg-name').value,
            bloodGroup: document.getElementById('reg-group').value,
            district: document.getElementById('reg-district').value,
            upazila: document.getElementById('reg-upazila').value,
            phone: document.getElementById('reg-phone').value,
            lastDonation: document.getElementById('reg-date').value
        };

        if (CONFIG.GITHUB_TOKEN) {
            await saveToGitHub(newDonor);
        } else {
            allDonors.unshift(newDonor);
            renderDonors(allDonors);
            alert('Registered locally! Please set GitHub token for global sync.');
            toggleModal('register-modal');
        }
    });
}

async function saveToGitHub(newDonor) {
    try {
        const updatedList = [newDonor, ...allDonors];
        const sha = localStorage.getItem('gh_sha');

        const response = await fetch(`https://api.github.com/repos/${CONFIG.REPO_OWNER}/${CONFIG.REPO_NAME}/contents/${CONFIG.FILE_PATH}`, {
            method: 'PUT',
            headers: {
                'Authorization': `token ${CONFIG.GITHUB_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: `Donor Reg: ${newDonor.name} (${newDonor.district})`,
                content: btoa(unescape(encodeURIComponent(JSON.stringify(updatedList, null, 2)))),
                sha: sha
            })
        });

        if (response.ok) {
            const resJson = await response.json();
            localStorage.setItem('gh_sha', resJson.content.sha);
            allDonors = updatedList;
            renderDonors(allDonors);
            toggleModal('register-modal');
            alert('Cloud Sync Successful! You are now an active donor.');
        } else {
            throw new Error('Update Failed');
        }
    } catch (error) {
        console.error(error);
        alert('Sync failed. Check your GitHub settings.');
    }
}

function toggleModal(id) {
    const modal = document.getElementById(id);
    modal.classList.toggle('hidden');
}
