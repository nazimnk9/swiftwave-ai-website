/**
 * CallPilot — Screening Call Live + Daily Digest
 * -----------------------------------------------------------------------------
 * Renders a live AI screening call and the digest it feeds. Everything on screen
 * is generated: 200 applicants, each with questions built from their own job
 * title and location, scored under one rule.
 *
 *   Screening logic
 *     every requirement answered yes  ->  AMBER, document request sent
 *     a no on any requirement         ->  UNSUCCESSFUL, screen ends there
 *     documents returned              ->  GREEN, ATS updated
 *
 *   const panel = CallPilotPanel(document.querySelector('#panel'), {
 *     rows: 8,                 // digest rows (auto-drops to 4 under 700px)
 *     qualifiedRate: [.30,.40] // fluctuates on every load
 *   });
 *   panel.destroy();
 *
 * No dependencies. Pairs with callpilot-panel.css.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) { module.exports = factory(); }
  else { root.CallPilotPanel = factory(); }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var APPLICANTS = [
    { name: "Grant Barrett", role: "Certified Nursing Assistant" },
    { name: "Lindsey Guerra", role: "Patient Access Representative" },
    { name: "Jennifer Washington", role: "Production Supervisor" },
    { name: "Andrew Yamada", role: "Manufacturing Engineer" },
    { name: "Christopher Fitzgerald", role: "Environmental Engineer" },
    { name: "Nathan Collins", role: "Metallurgist" },
    { name: "Joshua Vega", role: "Purchasing Agent" },
    { name: "Rosalind Alvarez", role: "Budget Analyst" },
    { name: "Renata Sullivan", role: "Ultrasound Technologist" },
    { name: "Preston Mitchell", role: "Executive Assistant" },
    { name: "Elena Kaplan", role: "Receiving Lead" },
    { name: "Imani Zamora", role: "Cost Accountant" },
    { name: "Lindsey Foster", role: "Plumber" },
    { name: "Zachary Brooks", role: "Collections Specialist" },
    { name: "Benjamin Ferrell", role: "EMT Paramedic" },
    { name: "Rosalind Hayashi", role: "Loader" },
    { name: "Justin Zamora", role: "Claims Adjuster" },
    { name: "Wesley Cabrera", role: "Records Clerk" },
    { name: "Kevin Bell", role: "Clinical Coordinator" },
    { name: "Eric Beaumont", role: "Communications Specialist" },
    { name: "Andrew Pennington", role: "Real Estate Analyst" },
    { name: "Daniel Ashford", role: "Underwriter" },
    { name: "Imani Peralta", role: "Material Handler" },
    { name: "Adam Amaro", role: "Millwright" },
    { name: "Yvette Mensah", role: "Dialysis Technician" },
    { name: "Nadine Merritt", role: "Diversity Recruiter" },
    { name: "Warren Yamada", role: "Compliance Officer" },
    { name: "Dustin Marchetti", role: "Field Service Engineer" },
    { name: "Kevin Bustos", role: "Carpenter" },
    { name: "Jeremy Nguyen", role: "Traffic Coordinator" },
    { name: "Dustin Rivas", role: "Customer Service Representative" },
    { name: "Brett Sinclair", role: "Tax Preparer" },
    { name: "Desmond Bridges", role: "Call Center Supervisor" },
    { name: "Matthew Kowalski", role: "Freight Broker" },
    { name: "Rosalind Coleman", role: "HRIS Analyst" },
    { name: "Omar Barrett", role: "Physical Therapist" },
    { name: "Sylvia Cortez", role: "Warehouse Associate" },
    { name: "Elizabeth Montoya", role: "Custodial Supervisor" },
    { name: "Keisha Cabrera", role: "Painter" },
    { name: "Colin Sinclair", role: "Phlebotomist" },
    { name: "Whitney Calloway", role: "Staff Accountant" },
    { name: "Aaliyah Merritt", role: "Order Picker" },
    { name: "Warren Alvarez", role: "Safety Manager" },
    { name: "Nia Grady", role: "Roofer" },
    { name: "Farrah Bustos", role: "Warehouse Clerk" },
    { name: "Daniel Mitchell", role: "Revenue Analyst" },
    { name: "Kwame Winslow", role: "Home Health Aide" },
    { name: "Garrett Montoya", role: "Transportation Manager" },
    { name: "Chad Carter", role: "Network Engineer" },
    { name: "Julian Crowder", role: "Auditor" },
    { name: "Shanice Radcliffe", role: "Industrial Engineer" },
    { name: "Yolanda Amaro", role: "Yard Jockey" },
    { name: "Imani Serrano", role: "Insurance Verifier" },
    { name: "Ricardo Delgado", role: "HVAC Technician" },
    { name: "Simone Hutchins", role: "Actuarial Analyst" },
    { name: "Tyrone Amaro", role: "Sterile Processing Technician" },
    { name: "Anthony Coleman", role: "Diesel Mechanic" },
    { name: "Desmond Ayala", role: "Packaging Engineer" },
    { name: "Jasmine Freeman", role: "Structural Engineer" },
    { name: "Malik Pennington", role: "Pipefitter" },
    { name: "Jasmine Kendrick", role: "Medical Assistant" },
    { name: "Elliot Crowder", role: "Chemical Engineer" },
    { name: "Rashida Boone", role: "Contracts Administrator" },
    { name: "Patrick Nguyen", role: "Electrician Apprentice" },
    { name: "Lucia Barrett", role: "Glazier" },
    { name: "Terrence Larkin", role: "Distribution Supervisor" },
    { name: "Terrence Reed", role: "Boilermaker" },
    { name: "Nolan Trejo", role: "Scrum Master" },
    { name: "Kevin Espinoza", role: "Cloud Architect" },
    { name: "Cody Thompson", role: "Warehouse Planner" },
    { name: "Tanya Cortez", role: "Design Engineer" },
    { name: "Lamar Radcliffe", role: "QA Engineer" },
    { name: "Noelle Delgado", role: "Retail Store Manager" },
    { name: "Hannah Kirkland", role: "Business Analyst" },
    { name: "Tyrone Hutchins", role: "Registered Nurse" },
    { name: "Franklin Hutchins", role: "Facilities Coordinator" },
    { name: "Ryan Ochoa", role: "DevOps Engineer" },
    { name: "Franklin Mitchell", role: "Treasury Analyst" },
    { name: "Eric Alvarez", role: "Facilities Technician" },
    { name: "Rafael Doyle", role: "Account Executive" },
    { name: "Adriana Okafor", role: "Project Manager" },
    { name: "Omar Calloway", role: "Procurement Specialist" },
    { name: "Hannah Bell", role: "Front Desk Coordinator" },
    { name: "James Ashford", role: "Onboarding Specialist" },
    { name: "Patrick Talbot", role: "Compensation Analyst" },
    { name: "Miguel Yamada", role: "Validation Engineer" },
    { name: "Michael Washington", role: "Veterinary Technician" },
    { name: "Rafael Radcliffe", role: "UX Designer" },
    { name: "Bryce Barrett", role: "Fleet Manager" },
    { name: "Sean Padilla", role: "Nurse Practitioner" },
    { name: "Denise Prentice", role: "Maintenance Technician" },
    { name: "Elena Okafor", role: "Payroll Specialist" },
    { name: "Nolan Salazar", role: "Import Export Clerk" },
    { name: "Miles Ochoa", role: "Pharmacy Technician" },
    { name: "Kwame Nguyen", role: "Reliability Engineer" },
    { name: "Gregory Bell", role: "Occupational Therapist" },
    { name: "Omar Sheridan", role: "Legal Secretary" },
    { name: "Monique Ochoa", role: "Warehouse Supervisor" },
    { name: "Adriana Hargrove", role: "Surveyor" },
    { name: "Latoya Whitfield", role: "Electrical Engineer" },
    { name: "Vincent Hayashi", role: "Training Coordinator" },
    { name: "Michael Rivas", role: "Assembly Technician" },
    { name: "Dustin Winslow", role: "Investment Analyst" },
    { name: "Nia Bustos", role: "Shipping Clerk" },
    { name: "Travis Hargrove", role: "Warehouse Manager" },
    { name: "Denise Coleman", role: "Database Administrator" },
    { name: "Paloma Kaplan", role: "Class A CDL Driver" },
    { name: "Blake Bermudez", role: "Bookkeeper" },
    { name: "Gabriela Radcliffe", role: "Supply Chain Planner" },
    { name: "Marisol Ibrahim", role: "Credit Analyst" },
    { name: "Franklin Sheridan", role: "Commissioning Engineer" },
    { name: "Aaron Bautista", role: "Groundskeeper" },
    { name: "Brett Crowder", role: "Demand Planner" },
    { name: "Priya Rennett", role: "Mobile Developer" },
    { name: "Jasmine Prentice", role: "Courier" },
    { name: "Travis Lindgren", role: "Risk Analyst" },
    { name: "Chad Mbeki", role: "Behavioral Technician" },
    { name: "Whitney Yamada", role: "Welder" },
    { name: "Anthony Kaplan", role: "Product Manager" },
    { name: "Ryan Boone", role: "Locksmith" },
    { name: "Craig Bautista", role: "Machine Learning Engineer" },
    { name: "Reid Whitfield", role: "Dental Hygienist" },
    { name: "Regina Peralta", role: "Learning Designer" },
    { name: "James Ochoa", role: "Operations Manager" },
    { name: "Chad Winslow", role: "Package Handler" },
    { name: "Rosa Larkin", role: "Ironworker" },
    { name: "Justin Rosales", role: "Quality Inspector" },
    { name: "Chantel Ochoa", role: "Warehouse Lead" },
    { name: "Lucia Vega", role: "Radiologic Technologist" },
    { name: "Tamika Sullivan", role: "Sanitation Technician" },
    { name: "Lindsey Salazar", role: "Medical Coder" },
    { name: "Franklin Ortega", role: "Financial Analyst" },
    { name: "Rosa Maddox", role: "Forklift Operator" },
    { name: "Nicholas Coleman", role: "Respiratory Therapist" },
    { name: "Samuel Rennett", role: "Platform Engineer" },
    { name: "Patrick Trejo", role: "Speech Language Pathologist" },
    { name: "Nadine Guerra", role: "Geotechnical Engineer" },
    { name: "Tanya Radcliffe", role: "Inventory Controller" },
    { name: "Farrah Larkin", role: "Case Manager" },
    { name: "Whitney Barrett", role: "Technical Writer" },
    { name: "Andre Carter", role: "Security Engineer" },
    { name: "Aisha Maddox", role: "Talent Sourcer" },
    { name: "Ryan Rivas", role: "Auto Body Technician" },
    { name: "Camila Vega", role: "Test Engineer" },
    { name: "Marisol Serrano", role: "CNC Operator" },
    { name: "Priya Holloway", role: "Controller" },
    { name: "Nathan Ferrell", role: "Petroleum Engineer" },
    { name: "Renata Trejo", role: "Recruiting Coordinator" },
    { name: "Estela Espinoza", role: "Blender Operator" },
    { name: "Rosalind Delgado", role: "Dispatcher" },
    { name: "Imani Sheridan", role: "Water Treatment Operator" },
    { name: "Curtis Kirkland", role: "Import Coordinator" },
    { name: "Rosalind Fitzgerald", role: "Project Engineer" },
    { name: "Andre Talbot", role: "Accounts Payable Clerk" },
    { name: "Patrick Rivas", role: "Territory Sales Manager" },
    { name: "David Doyle", role: "Treasury Manager" },
    { name: "Kevin Nunez", role: "Systems Analyst" },
    { name: "Maria Barrett", role: "Inventory Analyst" },
    { name: "Jonathan Hayashi", role: "Automation Engineer" },
    { name: "Farrah Peralta", role: "Software Engineer" },
    { name: "Justin Cabrera", role: "Administrative Coordinator" },
    { name: "Imani Lockhart", role: "Building Inspector" },
    { name: "Regina Bell", role: "Integration Engineer" },
    { name: "Christopher Marchetti", role: "Delivery Driver" },
    { name: "Eric Nakamura", role: "Surgical Technologist" },
    { name: "Elizabeth Ramirez", role: "Portfolio Analyst" },
    { name: "Bianca Cabrera", role: "Pricing Analyst" },
    { name: "Priya Alvarez", role: "Security Analyst" },
    { name: "Alicia Lockhart", role: "Packaging Operator" },
    { name: "Chantel Hollister", role: "Solutions Architect" },
    { name: "Marcus Mbeki", role: "HR Business Partner" },
    { name: "Miles Fitzgerald", role: "Employee Relations Manager" },
    { name: "Simone Bustos", role: "Front End Developer" },
    { name: "Travis Cabrera", role: "Marketing Coordinator" },
    { name: "Chantel Mbeki", role: "Mason" },
    { name: "Camila Cortez", role: "Mechanical Engineer" },
    { name: "Elena Hutchins", role: "Machinist" },
    { name: "Alicia Mensah", role: "Civil Engineer" },
    { name: "Matthew Montoya", role: "Financial Controller" },
    { name: "Renata Stroud", role: "Grants Manager" },
    { name: "Matthew Serrano", role: "Applications Engineer" },
    { name: "Alejandra Kowalski", role: "Salesforce Administrator" },
    { name: "Jamal Arroyo", role: "Loan Officer" },
    { name: "Denise Hayashi", role: "Line Operator" },
    { name: "Sean Freeman", role: "Process Engineer" },
    { name: "Nadine Kaplan", role: "Sheet Metal Worker" },
    { name: "Andrew Hutchins", role: "Site Reliability Engineer" },
    { name: "Nolan Vasquez", role: "Scheduling Coordinator" },
    { name: "Gabriela Vasquez", role: "Office Manager" },
    { name: "Malik Solano", role: "Route Driver" },
    { name: "Anita Sinclair", role: "Shift Lead" },
    { name: "Rosalind Bautista", role: "Quality Engineer" },
    { name: "Paloma Mensah", role: "Data Analyst" },
    { name: "Nia Maddox", role: "Customs Broker" },
    { name: "Denise Carter", role: "Billing Specialist" },
    { name: "Reid Pennington", role: "Logistics Coordinator" },
    { name: "Tessa Doyle", role: "Backend Developer" },
    { name: "David Rosales", role: "Data Engineer" },
    { name: "Blake Hargrove", role: "Benefits Administrator" },
    { name: "Ebony Solano", role: "Licensed Practical Nurse" }
  ];

  var CITIES = ['Columbus, OH','Fort Worth, TX','Austin, TX','Charlotte, NC','Phoenix, AZ',
    'Denver, CO','Tampa, FL','Cleveland, OH','Memphis, TN','Kansas City, MO','Indianapolis, IN',
    'Nashville, TN','Louisville, KY','Milwaukee, WI','Omaha, NE','Tucson, AZ','Fresno, CA',
    'Sacramento, CA','Raleigh, NC','Richmond, VA','Boise, ID','Des Moines, IA','Tulsa, OK','Buffalo, NY'];

  var SHIFTS = ['night shifts','weekend shifts','a rotating shift pattern','early starts','a four on four off rota'];

  var OUTCOME = {
    green: 'ATS Updated \u2014 Documents Received',
    amber: 'Document Request Sent',
    red:   'Unsuccessful'
  };

  var DEFAULTS = {
    rows: 8,                    // digest rows on desktop
    rowsMobile: 4,              // digest rows under 700px
    qualifiedRate: [0.30, 0.40],// share of applicants who pass screening
    returnRate: [0.64, 0.78],   // share of those who send documents back
    dayProgress: 0.58,          // how far through the day the tally starts
    stepMs: 1080,               // time per question
    gapMs: 1900,                // pause between calls
    backgroundMs: 2400,         // other applicants completing elsewhere
    callSeconds: [52, 67],      // duration the on-screen clock lands on
    redEvery: 4,                // show an unsuccessful roughly 1 call in this many
    masthead: 'Daily Digest'
  };

  var TEMPLATE =
    '<div class="cpp__head">' +
      '<span class="cpp__live"><i class="cpp__dot"></i> Screening call live</span>' +
      '<span class="cpp__timer" data-cpp="timer">00:00</span>' +
    '</div>' +
    '<div class="cpp__who">' +
      '<div class="cpp__name" data-cpp="name"></div>' +
      '<div class="cpp__role" data-cpp="role"></div>' +
    '</div>' +
    '<div class="cpp__wave" data-cpp="wave" aria-hidden="true"></div>' +
    '<div class="cpp__qa">' +
      '<div class="cpp__q cpp__fade" data-cpp="qBlock"><b>CallPilot asks</b><span data-cpp="q"></span></div>' +
      '<div class="cpp__a cpp__fade" data-cpp="aBlock"><b>Applicant</b><span class="cpp__ans" data-cpp="a"></span></div>' +
    '</div>' +
    '<div class="cpp__crit">' +
      '<div class="cpp__crit-h">Scoring against the advert</div>' +
      '<div data-cpp="crit"></div>' +
    '</div>' +
    '<div class="cpp__foot">' +
      '<span data-cpp="progress">Connecting</span>' +
      '<span class="cpp__verdict" data-cpp="verdict"><i></i><span data-cpp="verdictText"></span></span>' +
    '</div>' +
    '<div class="cpp__digest">' +
      '<div class="cpp__digest-h">' +
        '<span class="cpp__masthead" data-cpp="masthead"></span>' +
        '<span class="cpp__screened"><b data-cpp="screened">0</b> screened today</span>' +
      '</div>' +
      '<div class="cpp__tally">' +
        '<span class="is-g"><i></i><b data-cpp="tGreen">0</b> documents received</span>' +
        '<span class="is-a"><i></i><b data-cpp="tAmber">0</b> requested</span>' +
        '<span class="is-r"><i></i><b data-cpp="tRed">0</b> unsuccessful</span>' +
      '</div>' +
      '<ul class="cpp__list" data-cpp="list"></ul>' +
    '</div>';

  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function between(r) { return r[0] + Math.random() * (r[1] - r[0]); }

  function CallPilotPanel(container, options) {
    if (!container) { throw new Error('CallPilotPanel: container element is required'); }
    var o = options || {};
    var cfg = {}; for (var key in DEFAULTS) { cfg[key] = (key in o) ? o[key] : DEFAULTS[key]; }

    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var narrow  = window.matchMedia && window.matchMedia('(max-width: 700px)').matches;
    var maxRows = narrow ? cfg.rowsMobile : cfg.rows;

    container.classList.add('cpp');
    container.innerHTML = TEMPLATE;

    var el = {};
    Array.prototype.forEach.call(container.querySelectorAll('[data-cpp]'), function (n) {
      el[n.getAttribute('data-cpp')] = n;
    });
    el.masthead.textContent = cfg.masthead;

    for (var w = 0; w < 26; w++) {
      var bar = document.createElement('i');
      bar.style.animationDelay = (w * 0.075) + 's';
      el.wave.appendChild(bar);
    }

    /* ---- deal the day's outcomes ------------------------------------- */
    var pool = (o.applicants || APPLICANTS).map(function (a) { return { name: a.name, role: a.role }; });
    var TOTAL = pool.length;
    var qualified = Math.round(TOTAL * between(cfg.qualifiedRate));
    var greens = Math.round(qualified * between(cfg.returnRate));
    var FINAL = { green: greens, amber: qualified - greens, red: TOTAL - qualified };

    (function () {
      var bag = [], k;
      for (k = 0; k < FINAL.green; k++) { bag.push('green'); }
      for (k = 0; k < FINAL.amber; k++) { bag.push('amber'); }
      for (k = 0; k < FINAL.red;   k++) { bag.push('red'); }
      for (k = bag.length - 1; k > 0; k--) {
        var j = Math.floor(Math.random() * (k + 1)), t = bag[k]; bag[k] = bag[j]; bag[j] = t;
      }
      pool.forEach(function (a, i) { a.tone = bag[i]; a.city = pick(CITIES); });
    })();

    var START = {
      green: Math.round(FINAL.green * cfg.dayProgress),
      amber: Math.round(FINAL.amber * cfg.dayProgress),
      red:   Math.round(FINAL.red   * cfg.dayProgress)
    };
    var count = { green: START.green, amber: START.amber, red: START.red };

    function paintTally() {
      el.tGreen.textContent = count.green;
      el.tAmber.textContent = count.amber;
      el.tRed.textContent   = count.red;
      el.screened.textContent = count.green + count.amber + count.red;
    }

    /* ---- questions built from the applicant's own advert -------------- */
    function buildQuestions(a) {
      var yrs = 1 + Math.floor(Math.random() * 4);
      var wks = pick([2, 4, 6]);
      var town = a.city.split(',')[0];
      var qs = [
        { q: 'Do you have at least ' + yrs + ' year' + (yrs > 1 ? 's' : '') + ' experience as a ' + a.role + '?',
          c: yrs + ' year' + (yrs > 1 ? 's' : '') + ' as ' + a.role },
        { q: 'Do you have the right to work in the United States?', c: 'Right to work' },
        { q: 'Are you able to commute to ' + town + '?', c: 'Commutable to ' + town },
        { q: 'Are you available for ' + pick(SHIFTS) + '?', c: 'Shift availability' },
        { q: 'Can you start within ' + wks + ' weeks?', c: 'Available within ' + wks + ' weeks' }
      ];
      if (a.tone === 'red') {
        var no = 1 + Math.floor(Math.random() * 4);   // never the opening question
        qs.forEach(function (item, k) { item.a = k < no ? 'Yes' : (k === no ? 'No' : ''); });
      } else {
        qs.forEach(function (item) { item.a = 'Yes'; });
      }
      return qs;
    }

    /* ---- the digest --------------------------------------------------- */
    var mins = 7 * 60 + 6;
    function stamp() {
      mins += 1 + Math.floor(Math.random() * 3);
      return pad(Math.floor(mins / 60) % 24) + ':' + pad(mins % 60);
    }

    function pushRow(a, tone) {
      var li = document.createElement('li');
      li.className = 'cpp__row cpp__row--' + tone;
      li.innerHTML =
        '<span class="cpp__row-time">' + stamp() + '</span>' +
        '<span class="cpp__light"><i></i></span>' +
        '<span><span class="cpp__row-name">' + a.name + '</span>' +
        '<span class="cpp__row-role"> \u00b7 ' + a.role + '</span><br>' +
        '<span class="cpp__row-what">' + OUTCOME[tone] + '</span></span>';

      // never two unsuccessful on screen at once — a wall of red reads as a
      // failing product rather than a morning correctly filtered
      if (tone === 'red') {
        var old = el.list.querySelector('.cpp__row--red');
        if (old) { el.list.removeChild(old); }
      }
      el.list.insertBefore(li, el.list.firstChild);
      while (el.list.children.length > maxRows) { el.list.removeChild(el.list.lastChild); }

      count[tone]++;
      paintTally();
      if (onRow) { onRow(a, tone); }
      return li;
    }

    function turnGreen(li, a) {
      if (!li || !li.parentNode) { return; }
      li.className = 'cpp__row cpp__row--green';
      li.querySelector('.cpp__row-what').textContent = OUTCOME.green;
      if (count.amber > 0) { count.amber--; }
      count.green++;
      paintTally();
      if (onRow) { onRow(a, 'green'); }
    }

    var onRow = typeof o.onRow === 'function' ? o.onRow : null;

    var bi = 0;
    function backgroundRow() {
      var guard = 0;
      while (guard++ < pool.length) {
        var a = pool[bi];
        bi++;
        if (bi >= pool.length) {
          bi = 0; count.green = START.green; count.amber = START.amber; count.red = START.red;
        }
        if (a.tone === 'red' && el.list.querySelector('.cpp__row--red')) {
          count.red++;            // it still happened, it just does not stack on screen
          paintTally();
          continue;
        }
        var li = pushRow(a, a.tone === 'green' ? 'amber' : a.tone);
        if (a.tone === 'green') {
          (function (row, who) {
            setTimeout(function () { turnGreen(row, who); }, 3200 + Math.random() * 3000);
          })(li, a);
        }
        return;
      }
    }

    /* ---- reduced motion: one settled state ---------------------------- */
    if (reduced) {
      var still = pool[0]; still.tone = 'amber';
      var sq = buildQuestions(still);
      el.name.textContent = still.name;
      el.role.textContent = still.role + ' \u00b7 ' + still.city;
      el.q.textContent = sq[4].q;
      el.a.textContent = 'Yes'; el.a.className = 'cpp__ans cpp__ans--yes';
      el.qBlock.classList.add('is-on'); el.aBlock.classList.add('is-on');
      el.crit.innerHTML = sq.map(function (x) {
        return '<div class="cpp__req is-pass"><span class="cpp__box">\u2713</span>' + x.c + '</div>';
      }).join('');
      el.progress.textContent = 'Call complete';
      el.timer.textContent = '01:02';
      el.verdict.className = 'cpp__verdict is-on cpp__verdict--amber';
      el.verdictText.textContent = 'Document request sent';
      paintTally();
      for (var s = 0; s < maxRows; s++) { backgroundRow(); }
      return { destroy: teardown };
    }

    /* ---- the live call ------------------------------------------------ */
    var timers = [], clockId = null, bgId = null, stopped = false;
    var ci = -1, qi = 0, secs = 0, current = null, cqs = null, sinceRed = 0;

    function later(fn, ms) { timers.push(setTimeout(fn, ms)); }
    function clock(s) { return pad(Math.floor(s / 60)) + ':' + pad(s % 60); }

    // Walk the whole pool, but show an unsuccessful roughly one call in
    // cfg.redEvery rather than at the true rate — the tally carries the volume.
    function pickNext() {
      var guard = 0;
      while (guard++ < pool.length) {
        ci++; if (ci >= pool.length) { ci = 0; }
        var a = pool[ci];
        if (a.tone === 'red' && sinceRed < cfg.redEvery - 1) { sinceRed++; continue; }
        if (a.tone === 'red') { sinceRed = 0; } else { sinceRed++; }
        return a;
      }
      return pool[0];
    }

    function startCall() {
      if (stopped) { return; }
      current = pickNext();
      cqs = buildQuestions(current);

      secs = 0; el.timer.textContent = '00:00';
      clearInterval(clockId);
      var target = Math.round(between(cfg.callSeconds));
      var beat = Math.max(120, Math.round((cqs.length * cfg.stepMs) / target));
      clockId = setInterval(function () { secs++; el.timer.textContent = clock(secs); }, beat);

      el.name.textContent = current.name;
      el.role.textContent = current.role + ' \u00b7 ' + current.city;
      el.verdict.className = 'cpp__verdict'; el.verdictText.textContent = '';
      el.crit.innerHTML = cqs.map(function (x, i) {
        return '<div class="cpp__req" data-req="' + i + '"><span class="cpp__box">\u2713</span>' + x.c + '</div>';
      }).join('');

      qi = 0; ask();
    }

    function ask() {
      if (stopped) { return; }
      if (qi >= cqs.length) { return endQualified(); }
      var item = cqs[qi], n = qi;

      el.qBlock.classList.remove('is-on');
      el.aBlock.classList.remove('is-on');

      later(function () {
        el.q.textContent = item.q;
        el.progress.textContent = 'Question ' + (n + 1) + ' of ' + cqs.length;
        el.qBlock.classList.add('is-on');
      }, 120);

      later(function () {
        el.a.textContent = item.a;
        el.a.className = 'cpp__ans cpp__ans--' + (item.a === 'Yes' ? 'yes' : 'no');
        el.aBlock.classList.add('is-on');
      }, 620);

      later(function () {
        var req = el.crit.querySelector('[data-req="' + n + '"]');
        if (req) {
          if (item.a === 'Yes') { req.classList.add('is-pass'); }
          else { req.classList.add('is-fail'); req.querySelector('.cpp__box').textContent = '\u00d7'; }
        }
        if (item.a !== 'Yes') { return endUnsuccessful(n); }
        qi++; ask();
      }, cfg.stepMs);
    }

    function endUnsuccessful(n) {
      clearInterval(clockId);
      el.progress.textContent = 'Screen ended at question ' + (n + 1);
      el.verdict.className = 'cpp__verdict is-on cpp__verdict--red';
      el.verdictText.textContent = 'Unsuccessful';
      var who = current;
      later(function () { pushRow(who, 'red'); }, 420);
      later(startCall, cfg.gapMs);
    }

    function endQualified() {
      var a = current;
      clearInterval(clockId);
      el.progress.textContent = 'Call complete \u00b7 ' + el.timer.textContent;
      later(function () {
        el.verdict.className = 'cpp__verdict is-on cpp__verdict--amber';
        el.verdictText.textContent = 'Document request sent';
        var li = pushRow(a, 'amber');
        if (a.tone === 'green') {
          later(function () { turnGreen(li, a); }, 2800 + Math.random() * 2600);
        }
      }, 420);
      later(startCall, cfg.gapMs);
    }

    function teardown() {
      stopped = true;
      timers.forEach(clearTimeout); timers = [];
      clearInterval(clockId); clearInterval(bgId);
      if (observer) { observer.disconnect(); }
      container.innerHTML = '';
      container.classList.remove('cpp');
    }

    var observer = null;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(function (e) {
        if (!e[0].isIntersecting) { clearInterval(bgId); bgId = null; }
        else if (!bgId && !stopped) { bgId = setInterval(backgroundRow, cfg.backgroundMs); }
      }, { threshold: 0 });
      observer.observe(container);
    }

    paintTally();
    for (var z = 0; z < maxRows - 1; z++) { backgroundRow(); }
    later(startCall, 400);
    bgId = setInterval(backgroundRow, cfg.backgroundMs);

    return { destroy: teardown };
  }

  return CallPilotPanel;
}));
