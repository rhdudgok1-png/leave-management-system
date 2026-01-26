// 활성 토큰 목록 - 관리자가 업데이트하는 파일
window.ACTIVE_TOKENS = {
    "MASTER-ADMIN-2025-INIT": {
        "name": "마스터 관리자",
        "role": "admin",
        "expires": "2026-12-31"
    },
    "USR-2025-ADM-Y28AEF-208874": {
        "name": "김진아",
        "role": "admin",
        "expires": "2027-01-26"
    },
    "USR-2025-ADM-7HVW49-332138": {
        "name": "test",
        "role": "admin",
        "expires": "2027-01-26"
    }
};

// 마스터 관리자 토큰 (최초 설정용)
window.MASTER_TOKEN = 'MASTER-ADMIN-2025-INIT';
if (!window.ACTIVE_TOKENS[window.MASTER_TOKEN]) {
    window.ACTIVE_TOKENS[window.MASTER_TOKEN] = {
        name: '마스터 관리자',
        role: 'admin', 
        expires: '2026-12-31'
    };
}
