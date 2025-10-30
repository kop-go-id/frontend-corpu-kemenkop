// Storage configuration and helpers for Course Pretest

const STORAGE_PREFIX = 'cp:pretest';

export function getCoursePretestStorageConfig() {
  return {
    getStoragePrefix: () => STORAGE_PREFIX,
    getPretestCode: () => {
      if (typeof window === 'undefined') return '';
      return localStorage.getItem(`${STORAGE_PREFIX}:pretest_code`) || '';
    },
    getExitUrl: (_code) => '/',

    // Identity helpers
    getPretestId: () => {
      if (typeof window === 'undefined') return '';
      return localStorage.getItem(`${STORAGE_PREFIX}:pretest_id`) || '';
    },
    getRespondentId: () => {
      if (typeof window === 'undefined') return '';
      return localStorage.getItem(`${STORAGE_PREFIX}:respondent_id`) || '';
    },
    getToken: () => {
      if (typeof window === 'undefined') return '';
      return localStorage.getItem(`${STORAGE_PREFIX}:token`) || '';
    },
    getTokenExpires: () => {
      if (typeof window === 'undefined') return '';
      return localStorage.getItem(`${STORAGE_PREFIX}:token_expires_at`) || '';
    },

    getFinishUrl: (submissionId) => `/`,

    // Dynamic keys
    getLastOpenedQuestionKey: (pretestId) => `${STORAGE_PREFIX}:last_opened:${pretestId}`,
    getFlaggedQuestionsKey: (pretestId) => `${STORAGE_PREFIX}:flagged:${pretestId}`,
    getAnswersKey: (pretestId, respondentId) => `${STORAGE_PREFIX}:answers:${pretestId}:${respondentId}`,
    getTimeLeftKey: () => `${STORAGE_PREFIX}:time_left`,
  };
}


