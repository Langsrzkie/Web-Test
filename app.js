/**
 * CV. ANTAR NUSA TEKNIK - MAIN APPLICATION SCRIPT
 */

const CONFIG = {
    WA_PHONE: "62881024027021",
    EMERGENCY_PHONE: "0881024027021",
    MAPS_URL: "https://maps.google.com/?q=Jl.+Bendungan+Jago+No.34,+Jakarta+Pusat,+DKI+Jakarta+10650"
};

const productsData = [
    // 1. LIFT PENUMPANG
    {
        id: "lp1",
        title: "Mitsubishi NEXIEZ-MR Passenger Elevator (8 Person / 630 Kg)",
        oem: "MITSUBISHI-NEX-630",
        brand: "Mitsubishi",
        category: "penumpang",
        stockStatus: "Indent 14-21 Hari",
        troubleCode: "",
        image: "img/Lp1.jpg",
        specs: { speed: "1.0 - 1.75 m/s", cabin: "Hairline Stainless SUS304" }
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
        specs: { speed: "1.6 m/s", drive: "RegenDrive Flat Belt" }
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
        specs: { speed: "1.0 m/s", door: "Telescopic Center-Opening" }
    },

    // 2. LIFT BARANG
    {
        id: "lb1",
        title: "Kone TranSys Heavy Duty Industrial Freight Elevator (2000 Kg)",
        oem: "KONE-TRANSYS-2T",
        brand: "Kone",
        category: "barang",
        stockStatus: "Indent 14-30 Hari",
        troubleCode: "",
        image: "img/Lb.jpg",
        specs: { capacity: "2000 Kg / 2 Ton", floorProtection: "Checkered Steel 4mm" }
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
        specs: { capacity: "3000 Kg / 3 Ton", door: "2-Panel Vertical Bi-Parting" }
    },

    // 3. LIFT PASIEN
    {
        id: "lps1",
        title: "Mitsubishi Hospital Bed Elevator Cleanroom Series (1600 Kg)",
        oem: "MITSUBISHI-HSP-1600",
        brand: "Mitsubishi",
        category: "pasien",
        stockStatus: "Indent 14-21 Hari",
        troubleCode: "",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_g6sUlAU9rrLlbydWMY6B5F7UY2C68zSKTerZCVFYxZhpGS92_j1eDG4&s=10",
        specs: { capacity: "Stretcher Bed + 8 Personnel", feature: "Antibacterial Wall" }
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
        specs: { capacity: "1600 Kg Standar Kemenkes", door: "Extended Hold Button" }
    },

    // 4. ESKALATOR
    {
        id: "esk1",
        title: "Mitsubishi Commercial Escalator J-Type 30 Degree (Width 1000 mm)",
        oem: "MITSUBISHI-ESC-J1000",
        brand: "Mitsubishi",
        category: "eskalator",
        stockStatus: "Indent 21 Hari",
        troubleCode: "",
        image: "https://mitsubishi-shanghai.com/upload/3934/o/2-2-1-advantages-05.jpg",
        specs: { stepWidth: "1000 mm", speed: "0.5 m/s Inverter" }
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
        specs: { stepWidth: "800 mm", handrail: "Synthetic Rubber" }
    },

    // 5. SPAREPART
    {
        id: "sp1",
        title: "Monarch NICE3000+ Integrated Elevator Controller VVVF Inverter",
        oem: "MCTC-MCB-C2",
        brand: "Monarch",
        category: "sparepart",
        stockStatus: "Ready Stock",
        troubleCode: "ERR-02",
        image: "https://image.made-in-china.com/202f0j00DCwRezEhhIkb/Monarch-integrated-drive-and-controller-NICE3000-Monarch-elevator-inverter.webp",
        specs: { power: "7.5 kW - 22 kW 380V", compatibility: "Universal Sync/Async" }
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
        specs: { diameter: "750 mm / 5 Grooves", material: "Cast Iron FC-25" }
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
        specs: { type: "Electromechanical Safety", cert: "K3 Depnaker Approved" }
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
        specs: { pitch: "67.733 mm T67", material: "Hardened Carbon Steel" }
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
        specs: { ratedSpeed: "1.0 - 2.5 m/s", action: "Mechanical Trip & Cut-off" }
    },

    // --- KATEGORI: ALAT PEMADAM API & SPRINKLER OTOMATIS ---
    {
        id: "fp1",
        title: "Viking / Tyco Pendent Automatic Fire Sprinkler Head 68°C Glass Bulb (1/2 Inch NPT)",
        oem: "VK-102-K5.6",
        brand: "Viking",
        category: "proteksi_kebakaran",
        stockStatus: "Ready Stock",
        troubleCode: "",
        image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2023/2/23/c2a5938b-80fe-4fdc-ad44-1d2e3d749fd9.jpg~tplv-aphluv4xwc-resize-jpeg:700:0.jpg",
        specs: { temperature: "68°C (Bulb Merah)", thread: "1/2 Inch NPT / K-Factor 5.6" }
    },
    {
        id: "fp2",
        title: "Dry Chemical Powder Portable Fire Extinguisher (APAR 6 Kg ABC Powder)",
        oem: "APAR-ABC-6KG",
        brand: "Appron",
        category: "proteksi_kebakaran",
        stockStatus: "Ready Stock",
        troubleCode: "",
        image: "https://appron.co.id/wp-content/uploads/2021/11/Alat-Pemadam-Api-ABC-Powder-AP-60P-6-Kilogram-1.jpg",
        specs: { weight: "6 Kg Powder", rating: "ABC High Pressure Fire Hazard" }
    },
    {
        id: "fp3",
        title: "CO2 Carbon Dioxide Fire Extinguisher APAR 5 Kg Clean Agent",
        oem: "APAR-CO2-5KG",
        brand: "Appron",
        category: "proteksi_kebakaran",
        stockStatus: "Ready Stock",
        troubleCode: "",
        image: "https://appron.co.id/wp-content/uploads/2022/04/Alat-Pemadam-Api-APAR-AC-12-Carbon-Dioxide-CO2-5-Kg-3.jpg",
        specs: { gas: "CO2 Pure Clean Agent", application: "Ruang Server & Panel Listrik" }
    },

    // --- KATEGORI: DETEKTOR & SISTEM ALARM KEBAKARAN ---
    {
        id: "fa1",
        title: "Apollo XP95 Addressable Optical Smoke Detector Sensor",
        oem: "APOLLO-XP95-SMK",
        brand: "Apollo",
        category: "fire_alarm",
        stockStatus: "Ready Stock",
        troubleCode: "FA-LOOP-ERR",
        image: "https://c-tec.com/wp-content/uploads/2016/01/p_5_8_3_583-Apollo-XP95-55000-885-Optical-Smoke-Detector.jpg",
        specs: { type: "Addressable Optical Smoke", voltage: "17-28V DC Loop" }
    },
    {
        id: "fa2",
        title: "Nittan / Hong Chang Rate of Rise Heat Detector (Fixed Temp 60°C)",
        oem: "NITTAN-ROR-HD60",
        brand: "Nittan",
        category: "fire_alarm",
        stockStatus: "Ready Stock",
        troubleCode: "",
        image: "https://firealarm.id/wp-content/uploads/2020/02/fixed-temperature-heat-detector-hc-407a.jpg",
        specs: { coverage: "40 m2 (Tinggi H<4m)", type: "Thermal Sensing ROR" }
    },
    {
        id: "fa3",
        title: "Manual Call Point Glass Break Breakglass Emergency Button + Key Lock",
        oem: "MCP-BG-RED",
        brand: "Nohmi",
        category: "fire_alarm",
        stockStatus: "Ready Stock",
        troubleCode: "",
        image: "https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/c8ea395e-772e-4ce7-bcfb-117308676724/2302853d-4b68-4aeb-b9fc-88c18adf28ad.jpg",
        specs: { mounting: "Flush / Surface Wall", system: "Addressable / Conventional" }
    },
    {
        id: "fa4",
        title: "Fire Alarm Motorized Alarm Bell 6 Inch 24V DC Red Box",
        oem: "BELL-6IN-24V",
        brand: "Hong Chang",
        category: "fire_alarm",
        stockStatus: "Ready Stock",
        troubleCode: "",
        image: "https://media.cityelectricsupply.com/media/images/edwards_985129_p_lrg.webp",
        specs: { soundLevel: "95dB at 3 Meters", power: "24V DC 25mA" }
    },

    // --- KATEGORI: HYDRANT SYSTEM & PERALATAN TEKNIK GEDUNG ---
    {
        id: "hy1",
        title: "Indoor Hydrant Box Type B Full Set (Canvas Hose 1.5 Inch x 30 Meter + Nozzle)",
        oem: "HYD-BOX-TYPE-B",
        brand: "Hooseki",
        category: "hydrant_system",
        stockStatus: "Ready Stock",
        troubleCode: "",
        image: "img/hy1.png",
        specs: { dimension: "125 x 75 x 18 cm", includes: "Hose Reel, Nozzle & Valve" }
    },
    {
        id: "hy2",
        title: "Outdoor Pilar Hydrant Machino Coupling Twin Vane 4 x 2.5 Inch",
        oem: "HYD-PILAR-2WAY",
        brand: "Appron",
        category: "hydrant_system",
        stockStatus: "Ready Stock",
        troubleCode: "",
        image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2022/4/18/39598f05-8ccb-46f4-b4c6-ac8d3908eb74.jpg~tplv-aphluv4xwc-resize-jpeg:700:0.jpg",
        specs: { pressure: "10-16 Bar Output", connection: "Machino Standard Damkar" }
    },
    {
        id: "hy3",
        title: "Siemese Connection Two-Way Hydrant Inlet 4 x 2.5 Inch Wall Mounted",
        oem: "SIEMESE-S7-4X2.5",
        brand: "Hooseki",
        category: "hydrant_system",
        stockStatus: "Ready Stock",
        troubleCode: "",
        image: "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/7/28/6786f8db-5b03-4a21-b683-14a3b5f694e7.jpg.webp",
        specs: { checkValve: "Internal Spring Check", material: "Cast Brass Heavy Duty" }
    }
];

let currentBrand = "all";
let currentCategory = "all";
let currentB2BCategory = "Sparepart";

const consultationTemplates = {
    "Sparepart": "Halo Tim Antar Nusa Teknik, saya ingin menanyakan ketersediaan stok, part number, & penawaran harga suku cadang original OEM untuk kebutuhan gedung kami.",
    "Pasang": "Halo Tim Antar Nusa Teknik, saya ingin berkonsultasi mengenai rencana pemasangan unit baru (lift/eskalator/proteksi kebakaran) serta estimasi kelayakan teknis di gedung kami.",
    "Maintenance": "Halo Tim Antar Nusa Teknik, saya ingin mengajukan penawaran kontrak perawatan berkala (rutin bulanan/tahunan) untuk unit elevator atau sistem proteksi kebakaran di gedung kami.",
    "Konsultasi": "Halo Tim Antar Nusa Teknik, saya ingin berkonsultasi secara teknis mengenai kendala operasional, perbaikan, atau sistem keamanan gedung kami."
};

let authState = {
    isLoggedIn: false,
    userName: "",
    userCompany: "",
    userEmail: "",
    userPhone: ""
};

let pendingAction = null;

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
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
            b2bBtns.forEach(b => {
                b.classList.remove('active-b2b-pill', 'bg-amber-500', 'text-slate-950', 'border-amber-500');
                b.classList.add('bg-slate-100', 'dark:bg-slate-950', 'text-slate-700', 'dark:text-slate-300', 'border-slate-300', 'dark:border-slate-800');
            });
            btn.classList.add('active-b2b-pill', 'bg-amber-500', 'text-slate-950', 'border-amber-500');
            btn.classList.remove('bg-slate-100', 'dark:bg-slate-950', 'text-slate-700', 'dark:text-slate-300', 'border-slate-300', 'dark:border-slate-800');

            currentB2BCategory = btn.getAttribute('data-b2b') || 'Sparepart';
            const descTextarea = document.getElementById('consult_desc');
            if (descTextarea && consultationTemplates[currentB2BCategory]) {
                descTextarea.value = consultationTemplates[currentB2BCategory];
            }
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

// --- FITUR LIGHT / DARK MODE TOGGLE ---
function initTheme() {
    const savedTheme = localStorage.getItem('antar_nusa_theme');
    const htmlEl = document.documentElement;
    const themeIcon = document.getElementById('theme-icon');

    if (savedTheme === 'light') {
        htmlEl.classList.remove('dark');
        if (themeIcon) themeIcon.className = 'ri-sun-line';
    } else {
        htmlEl.classList.add('dark');
        if (themeIcon) themeIcon.className = 'ri-moon-line';
    }
}

function toggleTheme() {
    const htmlEl = document.documentElement;
    const themeIcon = document.getElementById('theme-icon');

    if (htmlEl.classList.contains('dark')) {
        htmlEl.classList.remove('dark');
        localStorage.setItem('antar_nusa_theme', 'light');
        if (themeIcon) themeIcon.className = 'ri-sun-line';
        showToast("Beralih ke Light Mode (Mode Terang)");
    } else {
        htmlEl.classList.add('dark');
        localStorage.setItem('antar_nusa_theme', 'dark');
        if (themeIcon) themeIcon.className = 'ri-moon-line';
        showToast("Beralih ke Dark Mode (Mode Gelap)");
    }
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    
    if (mobileMenu && hamburgerIcon) {
        mobileMenu.classList.toggle('hidden');
        if (mobileMenu.classList.contains('hidden')) {
            hamburgerIcon.className = 'ri-menu-3-line';
        } else {
            hamburgerIcon.className = 'ri-close-line';
        }
    }
}

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
        if (portalBtnText) portalBtnText.innerText = 'Portal';
        if (portalIndicator) portalIndicator.classList.add('hidden');
    }
}

function renderProducts(items) {
    const grid = document.getElementById('product-grid');
    const countLabel = document.getElementById('product-count-label');
    if (!grid) return;

    if (countLabel) countLabel.innerText = `Menampilkan ${items.length} produk & peralatan gedung`;

    if (items.length === 0) {
        grid.innerHTML = `<div class="col-span-2 lg:col-span-3 text-center py-10 text-xs text-slate-500 dark:text-slate-400 font-semibold glass-card rounded-2xl border border-slate-300 dark:border-slate-800 shadow-xl">Produk atau kode error tidak ditemukan.</div>`;
        return;
    }

    grid.innerHTML = items.map(p => {
        const specKey1 = Object.keys(p.specs)[0];
        const specVal1 = p.specs[specKey1];

        return `
            <div class="glass-card rounded-xl sm:rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-800/80 flex flex-col justify-between shadow-xl hover:border-amber-500/50 transition-all group">
                <div>
                    <div class="relative h-32 sm:h-52 bg-slate-100 dark:bg-slate-950 overflow-hidden">
                        <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                        <span class="absolute top-2 left-2 sm:top-3 sm:left-3 ${p.stockStatus === 'Ready Stock' ? 'bg-emerald-600' : 'bg-amber-600'} text-white text-[9px] sm:text-[10px] font-extrabold px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg shadow-md">
                            ${p.stockStatus}
                        </span>
                        <button onclick="toggleBookmark('${p.id}')" class="absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-white/80 dark:bg-slate-950/80 text-slate-700 dark:text-slate-300 flex items-center justify-center hover:text-amber-500 transition-colors">
                            <i class="ri-bookmark-line text-xs sm:text-sm"></i>
                        </button>
                        ${p.troubleCode ? `
                            <span class="absolute bottom-2 right-2 bg-red-600 text-white text-[9px] font-mono font-bold px-1.5 py-0.5 rounded shadow-md">
                                ${p.troubleCode}
                            </span>
                        ` : ''}
                    </div>
                    <div class="p-3 sm:p-5 space-y-1.5 sm:space-y-2.5">
                        <div class="flex items-center justify-between">
                            <span class="text-[9px] sm:text-[10px] font-mono font-bold text-amber-600 dark:text-amber-500 uppercase truncate max-w-[65%]">OEM: ${p.oem}</span>
                            <span class="text-[9px] sm:text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded">${p.brand}</span>
                        </div>
                        <h3 class="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white line-clamp-2 leading-tight" title="${p.title}">${p.title}</h3>
                        <div class="bg-slate-50 dark:bg-slate-950/70 p-2 sm:p-3 rounded-lg sm:rounded-xl border border-slate-200 dark:border-slate-800 space-y-1 text-[10px] sm:text-[11px]">
                            <div class="flex justify-between text-slate-500 dark:text-slate-400">
                                <span class="capitalize truncate">${specKey1}:</span>
                                <span class="text-slate-800 dark:text-slate-200 font-bold truncate ml-1">${specVal1}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-3 sm:p-5 pt-0 grid grid-cols-2 gap-1.5 sm:gap-2.5">
                    <button onclick="showProductDetail('${p.id}')" class="py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-slate-200 dark:bg-slate-900 hover:bg-slate-300 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-[11px] sm:text-xs border border-slate-300 dark:border-slate-700/80 transition-all">Detail</button>
                    <button onclick="askProductDirect('${p.title}', '${p.oem}', '${p.image}')" class="py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-[11px] sm:text-xs flex items-center justify-center gap-1 shadow-md transition-all">
                        <i class="ri-whatsapp-line text-sm"></i> Tanya
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
        <div class="flex justify-between border-b border-slate-200 dark:border-slate-900 pb-1">
            <span class="capitalize text-slate-500 dark:text-slate-400">${key}:</span>
            <span class="text-slate-800 dark:text-slate-200 font-bold">${val}</span>
        </div>
    `).join('');

    const waBtn = document.getElementById('modal-product-wa-btn');
    waBtn.setAttribute('onclick', `requireAuth(() => {
        askProductDirect('${product.title}', '${product.oem}', '${product.image}');
    })`);

    document.getElementById('product-detail-modal')?.classList.remove('hidden');
}

function closeProductDetailModal() { document.getElementById('product-detail-modal')?.classList.add('hidden'); }
function openEmergencyModal() { document.getElementById('emergency-modal')?.classList.remove('hidden'); }
function closeEmergencyModal() { document.getElementById('emergency-modal')?.classList.add('hidden'); }
function triggerEmergencyCall() { window.location.href = `tel:${CONFIG.EMERGENCY_PHONE}`; }
function triggerEmergencyWa() {
    window.open(`https://wa.me/${CONFIG.WA_PHONE}?text=${encodeURIComponent("DARURAT: Mohon bantuan teknisi segera untuk penanganan lift bermasalah / proteksi kebakaran di lokasi kami.")}`, '_blank');
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
        loginTab?.classList.remove('text-slate-500', 'dark:text-slate-400');
        registerTab?.classList.remove('bg-amber-500', 'text-slate-950', 'shadow-md');
        registerTab?.classList.add('text-slate-500', 'dark:text-slate-400');
        loginForm?.classList.remove('hidden');
        registerForm?.classList.add('hidden');
    } else {
        registerTab?.classList.add('bg-amber-500', 'text-slate-950', 'shadow-md');
        registerTab?.classList.remove('text-slate-500', 'dark:text-slate-400');
        loginTab?.classList.remove('bg-amber-500', 'text-slate-950', 'shadow-md');
        loginTab?.classList.add('text-slate-500', 'dark:text-slate-400');
        registerForm?.classList.remove('hidden');
        loginForm?.classList.add('hidden');
    }
}

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
        const desc = document.getElementById('consult_desc')?.value || 'Konsultasi umum perawatan dan pengadaan alat.';
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
                    `*Kategori:* Pengadaan Produk & Peralatan Gedung (${oem})\n` +
                    `*PIC:* ${authState.userName}\n` +
                    `*Perusahaan:* ${authState.userCompany}\n` +
                    `*WhatsApp:* ${authState.userPhone}\n` +
                    `*Email:* ${authState.userEmail}\n\n` +
                    `*Rincian Kebutuhan:*\n` +
                    `Halo Tim Antar Nusa Teknik, saya ingin menanyakan ketersediaan stok & penawaran harga untuk produk berikut:\n` +
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
                    `Halo Tim Antar Nusa Teknik, saya ingin berkonsultasi mengenai pengadaan unit, perawatan lift, atau alat proteksi kebakaran di gedung kami.`;
        window.open(`https://wa.me/${CONFIG.WA_PHONE}?text=${encodeURIComponent(msg)}`, '_blank');
    });
}

function openMapsLocation() { window.open(CONFIG.MAPS_URL, '_blank'); }

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