// 활성 토큰 목록 - 관리자가 업데이트하는 파일
// [2026-04-17 보안 업데이트] 이전 토큰 전부 무효화 (깃허브 공개 저장소에 노출됐었음)
window.ACTIVE_TOKENS = {};

// 마스터 관리자 토큰 (최초 설정용)
window.MASTER_TOKEN = 'MASTER-ADMIN-2026-DYQ0TX-DIZ2K4';
if (!window.ACTIVE_TOKENS[window.MASTER_TOKEN]) {
    window.ACTIVE_TOKENS[window.MASTER_TOKEN] = {
        name: '마스터 관리자',
        role: 'admin',
        expires: '2027-12-31'
    };
}
