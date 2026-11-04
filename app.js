/**
 * CV. ANTAR NUSA TEKNIK - MAIN APPLICATION SCRIPT
 */

const CONFIG = {
    WA_PHONE: "6281234567890",
    EMERGENCY_PHONE: "081234567890",
    MAPS_URL: "https://maps.google.com/?q=Jl.+Bendungan+Jago+No.34,+Jakarta+Pusat,+DKI+Jakarta+10650"
};

const productsData = [
    // ==========================================
    // 1. KATEGORI: LIFT PENUMPANG (PASSENGER ELEVATOR)
    // ==========================================
    {
        id: "lp1",
        title: "Mitsubishi NEXIEZ-MR Passenger Elevator (8 Person / 630 Kg)",
        oem: "MITSUBISHI-NEX-630",
        brand: "Mitsubishi",
        category: "penumpang",
        stockStatus: "Indent 14-21 Hari",
        troubleCode: "",
        image: "img/Lp1.jpg",
        specs: { speed: "1.0 - 1.75 m/s", cabin: "Hairline Stainless Steel SUS304" }
    },
    {
        id: "lp2",
        title: "Otis Gen2 Comfort Machine-Roomless (MRL) Elevator (10 Person / 800 Kg)",
        oem: "OTIS-GEN2-MRL800",
        brand: "Otis",
        category: "penumpang",
        stockStatus: "Indent 14-21 Hari",
        troubleCode: "",
        image: "img/Lp2.jpg",
        specs: { speed: "1.6 m/s", drive: "RegenDrive Energy Saving Flat Belt" }
    },
    {
        id: "lp3",
        title: "Schindler 3300 Passenger Elevator Modern Low-Rise (13 Person / 1000 Kg)",
        oem: "SCHINDLER-3300-1000",
        brand: "Schindler",
        category: "penumpang",
        stockStatus: "Indent 14 Hari",
        troubleCode: "",
        image: "img/Lp3.jpg",
        specs: { speed: "1.0 m/s", door: "Telescopic Automatic Center-Opening" }
    },

    // ==========================================
    // 2. KATEGORI: LIFT BARANG (FREIGHT ELEVATOR)
    // ==========================================
    {
        id: "lb1",
        title: "Kone TranSys Heavy Duty Industrial Freight Elevator (2000 Kg)",
        oem: "KONE-TRANSYS-2T",
        brand: "Kone",
        category: "barang",
        stockStatus: "Indent 14-30 Hari",
        troubleCode: "",
        image: "img/Lb.jpg",
        specs: { capacity: "2000 Kg / 2 Ton", floorProtection: "Checkered Steel Plate 4mm" }
    },
    {
        id: "lb2",
        title: "Hyundai Heavy Freight Elevator Heavy-Duty Cargo (3000 Kg)",
        oem: "HYUNDAI-FRT-3T",
        brand: "Hyundai",
        category: "barang",
        stockStatus: "Indent 30 Hari",
        troubleCode: "",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCa-KEx0XNfw5ACMBcMuZWGTW0zk0iGlMmpf-KxZF2FJO6bwGgF8vs5c&s=10",
        specs: { capacity: "3000 Kg / 3 Ton", door: "2-Panel Vertical Bi-Parting Door" }
    },

    // ==========================================
    // 3. KATEGORI: LIFT PASIEN / RUMAH SAKIT (BED ELEVATOR)
    // ==========================================
    {
        id: "lps1",
        title: "Mitsubishi Hospital Bed Elevator Cleanroom Series (1600 Kg)",
        oem: "MITSUBISHI-HSP-1600",
        brand: "Mitsubishi",
        category: "pasien",
        stockStatus: "Indent 14-21 Hari",
        troubleCode: "",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_g6sUlAU9rrLlbydWMY6B5F7UY2C68zSKTerZCVFYxZhpGS92_j1eDG4&s=10",
        specs: { capacity: "Stretcher Bed + 8 Personnel", feature: "Antibacterial Wall & Smooth Start" }
    },
    {
        id: "lps2",
        title: "Schindler 5500 Bed Elevator Emergency Medical Response (1600 Kg)",
        oem: "SCHINDLER-5500-MED",
        brand: "Schindler",
        category: "pasien",
        stockStatus: "Indent 21 Hari",
        troubleCode: "",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqJqNyMnhk_tHGtfkYm4bfYoCzkn349eGGz9H9ShSl51BjUq49ClGhl9-B&s=10",
        specs: { capacity: "1600 Kg Standard Kemenkes", door: "Extended Hold Button & Priority Recall" }
    },

    // ==========================================
    // 4. KATEGORI: ESKALATOR (ESCALATOR & MOVING WALK)
    // ==========================================
    {
        id: "esk1",
        title: "Mitsubishi Commercial Escalator J-Type 30 Degree (Width 1000 mm)",
        oem: "MITSUBISHI-ESC-J1000",
        brand: "Mitsubishi",
        category: "eskalator",
        stockStatus: "Indent 21 Hari",
        troubleCode: "",
        image: "https://mitsubishi-shanghai.com/upload/3934/o/2-2-1-advantages-05.jpg",
        specs: { stepWidth: "1000 mm", speed: "0.5 m/s Inverter Energy Saver" }
    },
    {
        id: "esk2",
        title: "Kone TravelMaster 110 Commercial Heavy Traffic Escalator",
        oem: "KONE-TM110-800",
        brand: "Kone",
        category: "eskalator",
        stockStatus: "Indent 21 Hari",
        troubleCode: "",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcFzRTM0gz6rWdxRz0QIl95u50O5nNi3geFFDpVHZvSnhM1jIaVjDwwdM&s=10",
        specs: { stepWidth: "800 mm", handrail: "High-Durability Synthetic Rubber" }
    },

    // ==========================================
    // 5. KATEGORI: SPAREPART & KOMPONEN TEKNIS (SPAREPART)
    // ==========================================
    {
        id: "sp1",
        title: "Monarch NICE3000+ Integrated Elevator Controller VVVF Inverter",
        oem: "MCTC-MCB-C2",
        brand: "Monarch",
        category: "sparepart",
        stockStatus: "Ready Stock",
        troubleCode: "ERR-02",
        image: "https://image.made-in-china.com/202f0j00DCwRezEhhIkb/Monarch-integrated-drive-and-controller-NICE3000-Monarch-elevator-inverter.webp",
        specs: { power: "7.5 kW - 22 kW 380V", compatibility: "Universal Synchronous/Async Motor" }
    },
    {
        id: "sp2",
        title: "Otis Traction Sheave Pulley Roda Traksi Motor 18ATF (D750mm)",
        oem: "OTIS-SLV-18ATF",
        brand: "Otis",
        category: "sparepart",
        stockStatus: "Ready Stock",
        troubleCode: "",
        image: "https://parts.kone.com/product-images/large/KM51439551-PIC000000000269807",
        specs: { diameter: "750 mm / 5 Grooves", material: "Cast Iron FC-25 High Friction" }
    },
    {
        id: "sp3",
        title: "Schindler Door Lock Interlock Switch Assembly (DL90)",
        oem: "SCHINDLER-DL90-S",
        brand: "Schindler",
        category: "sparepart",
        stockStatus: "Ready Stock",
        troubleCode: "E-42",
        image: "https://www.davenportliftcontrol.com/images/product-zoom/6010264/smart--door-lock-compl--links-central.jpg",
        specs: { type: "Electromechanical Safety Contacts", cert: "Sertifikasi Standar K3 Depnaker" }
    },
    {
        id: "sp4",
        title: "Mitsubishi Escalator Step Roller Chain Assembly T67",
        oem: "MITSUBISHI-J619000",
        brand: "Mitsubishi",
        category: "sparepart",
        stockStatus: "Ready Stock",
        troubleCode: "",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2bJawHEWibgcFcAIlwDcAkszMQsafg3R_jAIf5o-Ttl5_e-K563b5Bo08&s=10",
        specs: { pitch: "67.733 mm T67", material: "Hardened Carbon Steel & Polyurethane Roller" }
    },
    {
        id: "sp5",
        title: "Hyundai Speed Governor Over-Speed Safety Device System",
        oem: "HYUNDAI-SGV-12A",
        brand: "Hyundai",
        category: "sparepart",
        stockStatus: "Indent 2-3 Hari",
        troubleCode: "ERR-33",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX1takYI8OkCl81u1Fk-k26dDOk9y3VtiulQkXAJ3h1kLgYDamJhbmgMlC&s=10",
        specs: { ratedSpeed: "1.0 - 2.5 m/s", action: "Mechanical Trip & Switch Cut-off" }
    }
];

let currentBrand = "all";
let currentCategory = "all";
let currentB2BCategory = "Sparepart";

let authState = {
    isLoggedIn: false,
    userName: "",
    userCompany: "",
    userEmail: "",
    userPhone: ""
};

let pendingAction = null;

document.addEventListener('DOMContentLoaded', () => {
    checkSavedSession();
    renderProducts(productsData);

    const searchInput = document.getElementById('product-search-input');
    if (searchInput) searchInput.addEventListener('input', filterProducts);

    const brandBtns = document.querySelectorAll('.brand-pill');
    brandBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            brandBtns.forEach(b => b.classList.remove('active-brand-pill', 'bg-amber-500', 'text-slate-950'));
            btn.classList.add('active-brand-pill', 'bg-amber-500', 'text-slate-950');
            currentBrand = btn.getAttribute('data-brand') || 'all';
            filterProducts();
        });
    });

    const catBtns = document.querySelectorAll('.cat-pill');
    catBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            catBtns.forEach(b => b.classList.remove('active-cat-pill', 'bg-amber-500', 'text-slate-950'));
            btn.classList.add('active-cat-pill', 'bg-amber-500', 'text-slate-950');
            currentCategory = btn.getAttribute('data-category') || 'all';
            filterProducts();
        });
    });

    const b2bBtns = document.querySelectorAll('.b2b-pill');
    b2bBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            b2bBtns.forEach(b => b.classList.remove('active-b2b-pill', 'bg-amber-500', 'text-slate-950'));
            btn.classList.add('active-b2b-pill', 'bg-amber-500', 'text-slate-950');
            currentB2BCategory = btn.getAttribute('data-b2b') || 'Sparepart';
        });
    });

    const surveyDate = document.getElementById('survey_date');
    if (surveyDate) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        surveyDate.min = tomorrow.toISOString().split('T')[0];
    }

    calculateEstimate();
});

function checkSavedSession() {
    const saved = localStorage.getItem('antar_nusa_auth');
    if (saved) {
        try {
            authState = JSON.parse(saved);
            updateAuthUI();
        } catch(e) {}
    }
}

function updateAuthUI() {
    const portalBtnText = document.getElementById('portal-btn-label');
    const portalIndicator = document.getElementById('portal-indicator');
    if (authState.isLoggedIn) {
        if (portalBtnText) portalBtnText.innerText = authState.userName.split(' ')[0];
        if (portalIndicator) portalIndicator.classList.remove('hidden');
    } else {
        if (portalBtnText) portalBtnText.innerText = 'Portal Client';
        if (portalIndicator) portalIndicator.classList.add('hidden');
    }
}

function renderProducts(items) {
    const grid = document.getElementById('product-grid');
    const countLabel = document.getElementById('product-count-label');
    if (!grid) return;

    if (countLabel) countLabel.innerText = `Menampilkan ${items.length} produk & suku cadang`;

    if (items.length === 0) {
        grid.innerHTML = `<div class="col-span-3 text-center py-10 text-xs text-slate-400 font-semibold glass-card rounded-2xl border border-slate-800 shadow-xl">Produk atau kode error tidak ditemukan.</div>`;
        return;
    }

    grid.innerHTML = items.map(p => {
        const specKey1 = Object.keys(p.specs)[0];
        const specVal1 = p.specs[specKey1];
        const specKey2 = Object.keys(p.specs)[1];
        const specVal2 = p.specs[specKey2];

        return `
            <div class="glass-card rounded-2xl overflow-hidden border border-slate-800/80 flex flex-col justify-between shadow-2xl hover:border-amber-500/50 transition-all group">
                <div>
                    <div class="relative h-52 bg-slate-950 overflow-hidden">
                        <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                        <span class="absolute top-3 left-3 ${p.stockStatus === 'Ready Stock' ? 'bg-emerald-600' : 'bg-amber-600'} text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg shadow-md">
                            ${p.stockStatus}
                        </span>
                        <button onclick="toggleBookmark('${p.id}')" class="absolute top-3 right-3 w-8 h-8 rounded-lg bg-slate-950/80 text-slate-300 flex items-center justify-center hover:text-amber-500 transition-colors">
                            <i class="ri-bookmark-line text-sm"></i>
                        </button>
                        ${p.troubleCode ? `
                            <span class="absolute bottom-3 right-3 bg-red-600 text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow-md">
                                ${p.troubleCode}
                            </span>
                        ` : ''}
                    </div>
                    <div class="p-5 space-y-2.5">
                        <div class="flex items-center justify-between">
                            <span class="text-[10px] font-mono font-bold text-amber-500 uppercase">OEM: ${p.oem}</span>
                            <span class="text-[10px] font-bold text-slate-400 bg-slate-900 px-2 py-0.5 rounded">${p.brand}</span>
                        </div>
                        <h3 class="text-sm font-extrabold text-white line-clamp-1" title="${p.title}">${p.title}</h3>
                        <div class="bg-slate-950/70 p-3 rounded-xl border border-slate-800 space-y-1.5 text-[11px]">
                            <div class="flex justify-between text-slate-400">
                                <span class="capitalize">${specKey1}:</span>
                                <span class="text-slate-200 font-bold">${specVal1}</span>
                            </div>
                            <div class="flex justify-between text-slate-400">
                                <span class="capitalize">${specKey2}:</span>
                                <span class="text-slate-200 font-bold">${specVal2}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-5 pt-0 grid grid-cols-2 gap-2.5">
                    <button onclick="showProductDetail('${p.id}')" class="py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-xs border border-slate-700/80 transition-all">Detail</button>
                    <button onclick="askProductDirect('${p.title}', '${p.oem}', '${p.image}')" class="py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all">
                        <i class="ri-whatsapp-line text-base"></i> Tanyakan
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function filterProducts() {
    const query = (document.getElementById('product-search-input')?.value || '').toLowerCase();

    const filtered = productsData.filter(p => {
        const matchesQuery = p.title.toLowerCase().includes(query) || 
                             p.oem.toLowerCase().includes(query) || 
                             (p.troubleCode && p.troubleCode.toLowerCase().includes(query));
        const matchesBrand = (currentBrand === 'all') || (p.brand.toLowerCase() === currentBrand.toLowerCase());
        const matchesCategory = (currentCategory === 'all') || (p.category.toLowerCase() === currentCategory.toLowerCase());
        
        return matchesQuery && matchesBrand && matchesCategory;
    });

    renderProducts(filtered);
}

function requireAuth(actionCallback) {
    if (authState.isLoggedIn) {
        actionCallback();
    } else {
        pendingAction = actionCallback;
        showToast("Silakan daftar atau masuk akun terlebih dahulu.");
        openPortalModal();
        switchPortalTab('login');
    }
}

function toggleBookmark(id) {
    requireAuth(() => {
        showToast("Produk berhasil disimpan ke menu Disimpan.");
    });
}

function showProductDetail(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    document.getElementById('modal-product-img').src = product.image;
    document.getElementById('modal-product-status').innerText = product.stockStatus;
    document.getElementById('modal-product-status').className = `absolute top-3 left-3 ${product.stockStatus === 'Ready Stock' ? 'bg-emerald-600' : 'bg-amber-600'} text-white text-[10px] font-extrabold px-3 py-1 rounded-lg shadow-md`;
    document.getElementById('modal-product-oem').innerText = `OEM: ${product.oem}`;
    document.getElementById('modal-product-brand').innerText = product.brand;
    document.getElementById('modal-product-title').innerText = product.title;

    const specsContainer = document.getElementById('modal-product-specs');
    specsContainer.innerHTML = Object.entries(product.specs).map(([key, val]) => `
        <div class="flex justify-between border-b border-slate-900 pb-1">
            <span class="capitalize text-slate-400">${key}:</span>
            <span class="text-slate-200 font-bold">${val}</span>
        </div>
    `).join('');

    const waBtn = document.getElementById('modal-product-wa-btn');
    waBtn.setAttribute('onclick', `requireAuth(() => {
        askProductDirect('${product.title}', '${product.oem}', '${product.image}');
    })`);

    document.getElementById('product-detail-modal')?.classList.remove('hidden');
}

function closeProductDetailModal() {
    document.getElementById('product-detail-modal')?.classList.add('hidden');
}

function openEmergencyModal() { document.getElementById('emergency-modal')?.classList.remove('hidden'); }
function closeEmergencyModal() { document.getElementById('emergency-modal')?.classList.add('hidden'); }
function triggerEmergencyCall() { window.location.href = `tel:${CONFIG.EMERGENCY_PHONE}`; }
function triggerEmergencyWa() {
    window.open(`https://wa.me/${CONFIG.WA_PHONE}?text=${encodeURIComponent("DARURAT: Mohon bantuan teknisi segera untuk penanganan lift bermasalah / terjebak di lokasi kami.")}`, '_blank');
}

function openTroubleCodeModal() { document.getElementById('trouble-modal')?.classList.remove('hidden'); }
function closeTroubleCodeModal() { document.getElementById('trouble-modal')?.classList.add('hidden'); }
function applyTroubleCodeSearch(code) {
    const input = document.getElementById('product-search-input');
    if (input) input.value = code;
    closeTroubleCodeModal();
    filterProducts();
    showToast(`Mencari solusi untuk kode error: ${code}`);
}

function openHistoryModal() {
    requireAuth(() => {
        document.getElementById('history-modal')?.classList.remove('hidden');
    });
}
function closeHistoryModal() { document.getElementById('history-modal')?.classList.add('hidden'); }

function openSavedModal() {
    requireAuth(() => {
        document.getElementById('saved-modal')?.classList.remove('hidden');
    });
}
function closeSavedModal() { document.getElementById('saved-modal')?.classList.add('hidden'); }

function openPortalModal() { document.getElementById('portal-modal')?.classList.remove('hidden'); }
function closePortalModal() { document.getElementById('portal-modal')?.classList.add('hidden'); }

function switchPortalTab(tab) {
    const loginTab = document.getElementById('portal-login-tab');
    const registerTab = document.getElementById('portal-register-tab');
    const loginForm = document.getElementById('portal-login-form');
    const registerForm = document.getElementById('portal-register-form');
    const alertBox = document.getElementById('login-alert-box');

    if (alertBox) alertBox.classList.add('hidden');

    if (tab === 'login') {
        loginTab?.classList.add('bg-amber-500', 'text-slate-950', 'shadow-md');
        loginTab?.classList.remove('text-slate-400');
        registerTab?.classList.remove('bg-amber-500', 'text-slate-950', 'shadow-md');
        registerTab?.classList.add('text-slate-400');
        loginForm?.classList.remove('hidden');
        registerForm?.classList.add('hidden');
    } else {
        registerTab?.classList.add('bg-amber-500', 'text-slate-950', 'shadow-md');
        registerTab?.classList.remove('text-slate-400');
        loginTab?.classList.remove('bg-amber-500', 'text-slate-950', 'shadow-md');
        loginTab?.classList.add('text-slate-400');
        registerForm?.classList.remove('hidden');
        loginForm?.classList.add('hidden');
    }
}

// --- FUNGSI VALIDASI REGISTRASI & LOGIN ---

function getRegisteredUsers() {
    const users = localStorage.getItem('antar_nusa_registered_users');
    return users ? JSON.parse(users) : [];
}

function saveRegisteredUser(user) {
    const users = getRegisteredUsers();
    users.push(user);
    localStorage.setItem('antar_nusa_registered_users', JSON.stringify(users));
}

function handlePortalRegister(e) {
    e.preventDefault();
    const name = document.getElementById('reg_name').value.trim();
    const company = document.getElementById('reg_company').value.trim();
    const email = document.getElementById('reg_email').value.trim().toLowerCase();
    const phone = document.getElementById('reg_phone').value.trim();
    const password = document.getElementById('reg_password').value;

    if (!name || !company || !email || !phone || !password) {
        showToast("Mohon isi semua kolom pendaftaran dengan benar!");
        return;
    }

    const registeredUsers = getRegisteredUsers();
    const existingUser = registeredUsers.find(u => u.email === email);

    if (existingUser) {
        showToast("Email sudah terdaftar! Silakan masuk (login).");
        switchPortalTab('login');
        document.getElementById('login_email').value = email;
        return;
    }

    const newUser = { name, company, email, phone, password };
    saveRegisteredUser(newUser);

    authState = {
        isLoggedIn: true,
        userName: newUser.name,
        userCompany: newUser.company,
        userEmail: newUser.email,
        userPhone: newUser.phone
    };

    localStorage.setItem('antar_nusa_auth', JSON.stringify(authState));
    updateAuthUI();
    closePortalModal();
    showToast(`Pendaftaran berhasil! Selamat datang, ${name}.`);

    if (pendingAction) {
        const act = pendingAction;
        pendingAction = null;
        act();
    }
}

function handlePortalLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login_email').value.trim().toLowerCase();
    const password = document.getElementById('login_password').value;

    const registeredUsers = getRegisteredUsers();
    const validUser = registeredUsers.find(u => u.email === email && u.password === password);

    const alertBox = document.getElementById('login-alert-box');
    const alertText = document.getElementById('login-alert-text');

    if (!validUser) {
        if (alertBox && alertText) {
            alertText.innerText = "Email belum terdaftar atau kata sandi salah. Silakan buat akun di menu 'Daftar Akun Baru'.";
            alertBox.classList.remove('hidden');
        }
        showToast("Login gagal! Akun belum terdaftar.");
        return;
    }

    if (alertBox) alertBox.classList.add('hidden');

    authState = {
        isLoggedIn: true,
        userName: validUser.name,
        userCompany: validUser.company,
        userEmail: validUser.email,
        userPhone: validUser.phone
    };

    localStorage.setItem('antar_nusa_auth', JSON.stringify(authState));
    updateAuthUI();
    closePortalModal();
    showToast(`Selamat datang kembali, ${validUser.name}!`);

    if (pendingAction) {
        const act = pendingAction;
        pendingAction = null;
        act();
    }
}

function logoutClient() {
    authState = { isLoggedIn: false, userName: "", userCompany: "", userEmail: "", userPhone: "" };
    localStorage.removeItem('antar_nusa_auth');
    updateAuthUI();
    closePortalModal();
    showToast("Berhasil keluar dari akun.");
}

function calculateEstimate() {
    const service = document.getElementById('calc-service-type')?.value || 'maintenance';
    const units = parseInt(document.getElementById('calc-units')?.value) || 1;
    const location = document.getElementById('calc-location')?.value || 'jakarta';
    const resultElement = document.getElementById('calc-result-price');

    if (!resultElement) return;

    let baseMin = 1500000;
    let baseMax = 2500000;

    if (service === 'annual_contract') { baseMin = 16000000; baseMax = 28000000; }
    else if (service === 'overhaul') { baseMin = 12000000; baseMax = 25000000; }
    else if (service === 'inverter') { baseMin = 18000000; baseMax = 35000000; }

    let mult = location === 'other' ? 1.25 : (location === 'tangerang' ? 1.05 : 1.0);
    const totalMin = Math.round(baseMin * units * mult);
    const totalMax = Math.round(baseMax * units * mult);

    resultElement.innerText = `Rp ${totalMin.toLocaleString('id-ID')} - Rp ${totalMax.toLocaleString('id-ID')}`;
}

function sendEstimatorToWa() {
    requireAuth(() => {
        const msg = `*PERMINTAAN PENAWARAN B2B - ANTAR NUSA TEKNIK*\n\n` +
                    `*Status Akun:* Terverifikasi\n` +
                    `*Kategori:* Kalkulator Anggaran & Kontrak\n` +
                    `*PIC:* ${authState.userName}\n` +
                    `*Perusahaan:* ${authState.userCompany}\n` +
                    `*WhatsApp:* ${authState.userPhone}\n` +
                    `*Email:* ${authState.userEmail}\n\n` +
                    `*Rincian Kebutuhan:*\n` +
                    `Halo Tim Antar Nusa Teknik, saya ingin mengajukan estimasi anggaran dari kalkulator web dengan kisaran harga ${document.getElementById('calc-result-price').innerText}.`;
        window.open(`https://wa.me/${CONFIG.WA_PHONE}?text=${encodeURIComponent(msg)}`, '_blank');
    });
}

function handleSurveyBookingSubmit(e) {
    e.preventDefault();
    requireAuth(() => {
        const building = document.getElementById('survey_building').value;
        const date = document.getElementById('survey_date').value;
        const time = document.getElementById('survey_time').value;
        const address = document.getElementById('survey_address').value;

        const msg = `*PERMINTAAN PENAWARAN B2B - ANTAR NUSA TEKNIK*\n\n` +
                    `*Status Akun:* Terverifikasi\n` +
                    `*Kategori:* Booking Survey Lapangan\n` +
                    `*PIC:* ${authState.userName}\n` +
                    `*Perusahaan:* ${authState.userCompany}\n` +
                    `*WhatsApp:* ${authState.userPhone}\n` +
                    `*Email:* ${authState.userEmail}\n\n` +
                    `*Rincian Kebutuhan:*\n` +
                    `Halo Tim Antar Nusa Teknik, saya ingin menjadwalkan survey lokasi untuk gedung *${building}*.\n` +
                    `- Tanggal: ${date} (${time})\n` +
                    `- Alamat: ${address}`;
        window.open(`https://wa.me/${CONFIG.WA_PHONE}?text=${encodeURIComponent(msg)}`, '_blank');
    });
}

function handleConsultationSubmit(e) {
    e.preventDefault();
    requireAuth(() => {
        const desc = document.getElementById('consult_desc')?.value || 'Konsultasi umum perawatan dan pengadaan sparepart.';
        const msg = `*PERMINTAAN PENAWARAN B2B - ANTAR NUSA TEKNIK*\n\n` +
                    `*Status Akun:* Terverifikasi\n` +
                    `*Kategori:* Konsultasi Umum (${currentB2BCategory})\n` +
                    `*PIC:* ${authState.userName}\n` +
                    `*Perusahaan:* ${authState.userCompany}\n` +
                    `*WhatsApp:* ${authState.userPhone}\n` +
                    `*Email:* ${authState.userEmail}\n\n` +
                    `*Rincian Kebutuhan:*\n` +
                    `Halo Tim Antar Nusa Teknik, ${desc}`;
        window.open(`https://wa.me/${CONFIG.WA_PHONE}?text=${encodeURIComponent(msg)}`, '_blank');
    });
}

function askProductDirect(title, oem, image) {
    requireAuth(() => {
        const imgUrl = image || 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80';
        const msg = `*PERMINTAAN PENAWARAN B2B - ANTAR NUSA TEKNIK*\n\n` +
                    `*Status Akun:* Terverifikasi\n` +
                    `*Kategori:* Pengadaan Produk & Suku Cadang (${oem})\n` +
                    `*PIC:* ${authState.userName}\n` +
                    `*Perusahaan:* ${authState.userCompany}\n` +
                    `*WhatsApp:* ${authState.userPhone}\n` +
                    `*Email:* ${authState.userEmail}\n\n` +
                    `*Rincian Kebutuhan:*\n` +
                    `Halo Tim Antar Nusa Teknik, saya ingin menanyakan ketersediaan stok & penawaran harga untuk unit/barang berikut:\n` +
                    `- Nama Barang: ${title}\n` +
                    `- Foto Barang: ${imgUrl}`;
        window.open(`https://wa.me/${CONFIG.WA_PHONE}?text=${encodeURIComponent(msg)}`, '_blank');
    });
}

function triggerWaConsultation() {
    requireAuth(() => {
        const msg = `*PERMINTAAN PENAWARAN B2B - ANTAR NUSA TEKNIK*\n\n` +
                    `*Status Akun:* Terverifikasi\n` +
                    `*Kategori:* Layanan Cepat / Konsultasi WhatsApp\n` +
                    `*PIC:* ${authState.userName}\n` +
                    `*Perusahaan:* ${authState.userCompany}\n` +
                    `*WhatsApp:* ${authState.userPhone}\n` +
                    `*Email:* ${authState.userEmail}\n\n` +
                    `*Rincian Kebutuhan:*\n` +
                    `Halo Tim Antar Nusa Teknik, saya ingin berkonsultasi mengenai pengadaan unit atau perawatan lift/eskalator di gedung kami.`;
        window.open(`https://wa.me/${CONFIG.WA_PHONE}?text=${encodeURIComponent(msg)}`, '_blank');
    });
}

function openMapsLocation() {
    window.open(CONFIG.MAPS_URL, '_blank');
}

function quickSelectService(serviceName) {
    requireAuth(() => {
        const msg = `*PERMINTAAN PENAWARAN B2B - ANTAR NUSA TEKNIK*\n\n` +
                    `*Status Akun:* Terverifikasi\n` +
                    `*Kategori:* Layanan Pilihan (${serviceName})\n` +
                    `*PIC:* ${authState.userName}\n` +
                    `*Perusahaan:* ${authState.userCompany}\n` +
                    `*WhatsApp:* ${authState.userPhone}\n` +
                    `*Email:* ${authState.userEmail}\n\n` +
                    `*Rincian Kebutuhan:*\n` +
                    `Halo Tim Antar Nusa Teknik, saya ingin menanyakan info layanan: *${serviceName}*.`;
        window.open(`https://wa.me/${CONFIG.WA_PHONE}?text=${encodeURIComponent(msg)}`, '_blank');
    });
}

function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'pointer-events-auto bg-slate-900 text-white border border-amber-500/80 px-4 py-3 rounded-2xl shadow-2xl text-xs font-bold flex items-center justify-between gap-3 toast-animate';
    toast.innerHTML = `
        <div class="flex items-center gap-2.5">
            <i class="ri-checkbox-circle-fill text-amber-500 text-lg"></i>
            <span>${message}</span>
        </div>
        <button onclick="this.parentElement.remove()" class="text-slate-400 hover:text-white"><i class="ri-close-line text-base"></i></button>
    `;
    container.appendChild(toast);
    setTimeout(() => { if (toast.parentElement) toast.remove(); }, 4500);
}