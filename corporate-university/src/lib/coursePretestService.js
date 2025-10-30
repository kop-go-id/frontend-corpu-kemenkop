import { DUMMY_COURSE_PRETEST } from '@/datas/dummies/coursePretest';
import { getCoursePretestStorageConfig } from '@/config/coursePretest';

export async function getQuestionByPretestId(pretestId) {
  // In a real app, call API. Here, return dummy filtered by ID.
  if (!pretestId) throw new Error('pretestId required');
  return {
    questions: DUMMY_COURSE_PRETEST.questions,
  };
}

export async function getQuestionAnsweredByPretestId(pretestId, respondentId) {
  const storageConfig = getCoursePretestStorageConfig();
  const key = storageConfig.getAnswersKey(pretestId, respondentId);
  const raw = typeof window !== 'undefined' ? localStorage.getItem(key) : '[]';
  const answers = raw ? JSON.parse(raw) : [];
  return answers;
}

export async function setQuestionAnswerByPretestId(payload) {
  const { pretest_id, pretest_respondent_id, assessment_question_id, assessment_question_option_id } = payload;
  const storageConfig = getCoursePretestStorageConfig();
  const key = storageConfig.getAnswersKey(pretest_id, pretest_respondent_id);
  const raw = typeof window !== 'undefined' ? localStorage.getItem(key) : '[]';
  const answers = raw ? JSON.parse(raw) : [];

  const idx = answers.findIndex(a => a.assessment_question_id === assessment_question_id);
  const record = {
    assessment_question_id,
    user_answer_option_id: assessment_question_option_id,
  };
  if (idx >= 0) {
    answers[idx] = record;
  } else {
    answers.push(record);
  }
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(answers));
  }
  return { success: true };
}

export async function endPretest(payload) {
  // Simulate submission; clear time left.
  const storageConfig = getCoursePretestStorageConfig();
  if (typeof window !== 'undefined') {
    localStorage.setItem(storageConfig.getTimeLeftKey(), '0');
  }
  return { submission: { assessment_submission_id: 'dummy-submission-001' } };
}


