import { DUMMY_COURSE_PRETEST } from '@/datas/dummies/coursePretest';
import { getCoursePretestStorageConfig } from '@/config/coursePretest';

// Seed localStorage with dummy data if not present
export function ensureCoursePretestSeeded() {
  if (typeof window === 'undefined') return;
  const storageConfig = getCoursePretestStorageConfig();
  const pretestId = localStorage.getItem(`${storageConfig.getStoragePrefix()}:pretest_id`);
  if (pretestId) return; // already seeded

  localStorage.setItem(`${storageConfig.getStoragePrefix()}:pretest_id`, DUMMY_COURSE_PRETEST.pretest.pretest_id);
  localStorage.setItem(`${storageConfig.getStoragePrefix()}:pretest_code`, DUMMY_COURSE_PRETEST.pretest.pretest_code);
  localStorage.setItem(`${storageConfig.getStoragePrefix()}:respondent_id`, DUMMY_COURSE_PRETEST.respondent.respondent_id);
  localStorage.setItem(`${storageConfig.getStoragePrefix()}:token`, DUMMY_COURSE_PRETEST.token);
  localStorage.setItem(`${storageConfig.getStoragePrefix()}:token_expires_at`, DUMMY_COURSE_PRETEST.token_expires_at);
  localStorage.setItem(storageConfig.getTimeLeftKey(), String(DUMMY_COURSE_PRETEST.pretest.duration_seconds));
}

export function lastCoursePretest() {
  if (typeof window === 'undefined') return null;
  const storageConfig = getCoursePretestStorageConfig();
  const pretest_id = localStorage.getItem(`${storageConfig.getStoragePrefix()}:pretest_id`);
  if (!pretest_id) return null;
  return {
    pretest: { pretest_id },
    respondent: { respondent_id: localStorage.getItem(`${storageConfig.getStoragePrefix()}:respondent_id`) },
    token: localStorage.getItem(`${storageConfig.getStoragePrefix()}:token`),
    token_expires_at: localStorage.getItem(`${storageConfig.getStoragePrefix()}:token_expires_at`),
  };
}

export function lastCoursePretestTimeLeft() {
  if (typeof window === 'undefined') return 0;
  const storageConfig = getCoursePretestStorageConfig();
  const saved = localStorage.getItem(storageConfig.getTimeLeftKey());
  const seconds = parseInt(saved || '0', 10);
  return Number.isFinite(seconds) ? seconds : 0;
}


