// Authentication Modal Logic
let isLoginMode = true;

function toggleAuthModal(mode) {
  const modal = document.getElementById('auth-modal');
  const modalContent = document.getElementById('auth-modal-content');
  
  if (mode) {
    isLoginMode = mode === 'login';
    updateAuthUI();
    modal.classList.remove('hidden');
    // Slight delay to allow display:block to apply before animating opacity
    setTimeout(() => {
      modal.classList.remove('opacity-0');
      modalContent.classList.remove('scale-95');
    }, 10);
  } else {
    modal.classList.add('opacity-0');
    modalContent.classList.add('scale-95');
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 300);
  }
}

function closeAuthModal() {
  toggleAuthModal(null);
}

function toggleAuthMode() {
  isLoginMode = !isLoginMode;
  updateAuthUI();
}

function updateAuthUI() {
  const title = document.getElementById('modal-title');
  const subtitle = document.getElementById('modal-subtitle');
  const nameField = document.getElementById('name-field');
  const submitBtn = document.getElementById('modal-submit-btn');
  const toggleText = document.getElementById('modal-toggle-text');

  if (isLoginMode) {
    title.innerText = 'Welcome Back';
    subtitle.innerText = 'Enter your details to access your dashboard.';
    nameField.classList.add('hidden');
    submitBtn.innerText = 'Log In';
    toggleText.innerHTML = `Don't have an account? <button type="button" onclick="toggleAuthMode()" class="text-primary-600 font-semibold hover:underline">Sign up</button>`;
  } else {
    title.innerText = 'Create Account';
    subtitle.innerText = 'Join NairaReads and start earning today.';
    nameField.classList.remove('hidden');
    submitBtn.innerText = 'Register';
    toggleText.innerHTML = `Already have an account? <button type="button" onclick="toggleAuthMode()" class="text-primary-600 font-semibold hover:underline">Log in</button>`;
  }
}

// Simulation of Login/Dashboard Navigation
function handleLogin(e) {
  e.preventDefault();
  // Simulate API call
  const btn = document.getElementById('modal-submit-btn');
  const originalText = btn.innerText;
  btn.innerText = 'Processing...';
  btn.disabled = true;

  setTimeout(() => {
    closeAuthModal();
    document.getElementById('landing-view').style.display = 'none';
    document.getElementById('dashboard-view').classList.remove('hidden');
    btn.innerText = originalText;
    btn.disabled = false;
  }, 1000);
}

function logout() {
  document.getElementById('dashboard-view').classList.add('hidden');
  document.getElementById('landing-view').style.display = 'block';
  window.scrollTo(0,0);
}

// Dashboard Tab Switching
function switchTab(tabId) {
  // Hide all tabs
  document.querySelectorAll('.dash-tab').forEach(tab => {
    tab.classList.add('hidden');
  });
  
  // Show selected tab
  document.getElementById(`tab-${tabId}`).classList.remove('hidden');
  
  // Update nav active state
  document.querySelectorAll('.dash-nav-item').forEach(nav => {
    nav.classList.remove('active');
  });
  
  // Find the clicked nav and make it active (using onclick attribute matching for simplicity)
  event.currentTarget.classList.add('active');
}