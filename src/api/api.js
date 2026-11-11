import axios from 'axios';

const base = axios.create({
    baseURL: 'https://morjatkpuqhaoutqamtt.supabase.co',
    headers: {
        'apikey': 'sb_publishable_eegAPADyVGU3sdaDG8aJnQ_2KuTFfLy',
        'Content-Type': 'application/json'
    }
});

const api = axios.create({
    ...base.defaults,
    baseURL: `${base.defaults.baseURL}/rest/v1`
});

export default api;
