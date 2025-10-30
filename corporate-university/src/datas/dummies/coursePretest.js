// Dummy data for Course Pretest

export const DUMMY_COURSE_PRETEST = {
  pretest: {
    pretest_id: 'cp-pretest-001',
    pretest_code: 'CP-001',
    title: 'Formulir Survei Koperasi Desa/Kelurahan Merah Putih',
    duration_seconds: 25 * 60, // 25 minutes
  },
  respondent: {
    respondent_id: 'resp-001',
    name: 'John Doe',
  },
  token: 'dummy-token',
  token_expires_at: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
  questions: [
    {
      assessment_question_id: 'q1',
      instrument: 'A. Profil',
      question: 'Apa jenis koperasi Anda?',
      questionPrompt: null,
      options: [
        { option_id: 'q1o1', option_text: 'Koperasi Simpan Pinjam' },
        { option_id: 'q1o2', option_text: 'Koperasi Konsumen' },
        { option_id: 'q1o3', option_text: 'Koperasi Produsen' },
        { option_id: 'q1o4', option_text: 'Lainnya' },
      ],
    },
    {
      assessment_question_id: 'q2',
      instrument: 'A. Profil',
      question: 'Berapa jumlah anggota aktif saat ini?',
      questionPrompt: null,
      options: [
        { option_id: 'q2o1', option_text: '< 50' },
        { option_id: 'q2o2', option_text: '50 - 100' },
        { option_id: 'q2o3', option_text: '101 - 500' },
        { option_id: 'q2o4', option_text: '> 500' },
      ],
    },
    {
      assessment_question_id: 'q3',
      instrument: 'B. Digitalisasi',
      question: 'Apakah koperasi memiliki sistem pembukuan digital?',
      questionPrompt: null,
      options: [
        { option_id: 'q3o1', option_text: 'Ya' },
        { option_id: 'q3o2', option_text: 'Tidak' },
      ],
    },
    {
      assessment_question_id: 'q4',
      instrument: 'B. Digitalisasi',
      question: 'Seberapa sering transaksi dilakukan secara non-tunai?',
      questionPrompt: null,
      options: [
        { option_id: 'q4o1', option_text: 'Tidak Pernah' },
        { option_id: 'q4o2', option_text: 'Kadang-kadang' },
        { option_id: 'q4o3', option_text: 'Sering' },
        { option_id: 'q4o4', option_text: 'Selalu' },
      ],
    },
  ],
};


