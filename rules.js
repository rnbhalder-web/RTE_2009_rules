const PDF_BASE = "pdf/";

const RTE_RULES = [

  {
    id: "RTE-001",
    title: "Child's right to free and compulsory education",
    category: "Core RTE Act",
    section: "Section 3",
    keywords: ["6-14 years", "free education", "compulsory education", "neighbourhood school"],
    summary: "Every child aged six to fourteen years has the right to free and compulsory education in a neighbourhood school until completion of elementary education.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 3,
        label: "RTE Act, Section 3"
      }
    ]
  },

  {
    id: "RTE-002",
    title: "Age-appropriate admission and special training",
    category: "Age-appropriate admission",
    section: "Section 4",
    keywords: ["age appropriate", "special training", "late admission", "Section 4"],
    summary: "A child who was not admitted to school or could not complete elementary education is to be admitted to an age-appropriate class and provided special training as required.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 5,
        label: "RTE Act, Section 4"
      },
      {
        file: "13_RTE_Act_Clarification_on_Provisions.pdf",
        page: 1,
        label: "RTE clarification"
      },
      {
        file: "13_RTE_Act_Clarification_on_Provisions.pdf",
        page: 3,
        label: "RTE clarification"
      }
    ]
  },

  {
    id: "RTE-003",
    title: "25% admission for weaker and disadvantaged groups",
    category: "Admission / 25%",
    section: "Section 12(1)(c)",
    keywords: ["25%", "weaker section", "disadvantaged group", "Class I", "admission"],
    summary: "The schools covered by Section 12(1)(c) are required to admit children belonging to weaker sections and disadvantaged groups in the specified proportion.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 8,
        label: "RTE Act, Section 12"
      },
      {
        file: "04_Guidelines_Admission_Section_13_12_1_c_23-11-2010.pdf",
        page: 1,
        label: "2010 Admission Guideline"
      },
      {
        file: "04_Guidelines_Admission_Section_13_12_1_c_23-11-2010.pdf",
        page: 2,
        label: "2010 Admission Guideline"
      }
    ]
  },

  {
    id: "RTE-004",
    title: "25% provision where admission begins at pre-school level",
    category: "Admission / 25%",
    section: "Section 12(1)(c)",
    keywords: ["pre-school", "pre-primary", "25%", "admission"],
    summary: "Where a school provides admission at the pre-primary or pre-school level, the Section 12(1)(c) admission requirement applies at that level as described in the admission guideline.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 8,
        label: "RTE Act, Section 12"
      },
      {
        file: "04_Guidelines_Admission_Section_13_12_1_c_23-11-2010.pdf",
        page: 1,
        label: "2010 Admission Guideline"
      }
    ]
  },

  {
    id: "RTE-005",
    title: "Prohibition of capitation fee",
    category: "Admission",
    section: "Section 13(1)",
    keywords: ["capitation fee", "donation", "admission fee", "Section 13"],
    summary: "No school or person is to collect capitation fee in connection with admission.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 8,
        label: "RTE Act, Section 13"
      }
    ]
  },

  {
    id: "RTE-006",
    title: "No screening procedure for admission",
    category: "Admission",
    section: "Section 13(1)",
    keywords: ["screening", "test", "interview", "admission test", "Section 13"],
    summary: "No child or parent is to be subjected to a screening procedure for admission.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 8,
        label: "RTE Act, Section 13"
      },
      {
        file: "04_Guidelines_Admission_Section_13_12_1_c_23-11-2010.pdf",
        page: 1,
        label: "2010 Admission Guideline"
      },
      {
        file: "04_Guidelines_Admission_Section_13_12_1_c_23-11-2010.pdf",
        page: 2,
        label: "2010 Admission Guideline"
      }
    ]
  },

  {
    id: "RTE-007",
    title: "Penalty for capitation fee",
    category: "Admission",
    section: "Section 13(2)",
    keywords: ["capitation", "penalty", "fine"],
    summary: "Collection of capitation fee attracts the statutory penalty provided under the Act.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 8,
        label: "RTE Act, Section 13"
      }
    ]
  },

  {
    id: "RTE-008",
    title: "Penalty for screening procedure",
    category: "Admission",
    section: "Section 13(2)",
    keywords: ["screening", "penalty", "fine", "test", "interview"],
    summary: "Using a prohibited screening procedure for admission attracts the statutory penalty.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 8,
        label: "RTE Act, Section 13"
      }
    ]
  },

  {
    id: "RTE-009",
    title: "Proof of age for admission",
    category: "Age proof",
    section: "Section 14",
    keywords: ["age proof", "proof of age", "birth certificate", "admission"],
    summary: "Admission is ordinarily supported by proof of age as provided under the Act and applicable rules.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 9,
        label: "RTE Act, Section 14"
      },
      {
        file: "02_Model_Rules_RTE_2009.pdf",
        page: 5,
        label: "Model Rules"
      }
    ]
  },

  {
    id: "RTE-010",
    title: "Admission cannot be denied for lack of age proof",
    category: "Age proof",
    section: "Section 14(2)",
    keywords: ["age proof", "no denial", "admission", "Section 14(2)"],
    summary: "A child cannot be denied admission merely because the required age proof is not available.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 9,
        label: "RTE Act, Section 14"
      },
      {
        file: "02_Model_Rules_RTE_2009.pdf",
        page: 5,
        label: "Model Rules"
      }
    ]
  },

  {
    id: "RTE-011",
    title: "Admission cannot be denied because it is sought late in the academic year",
    category: "Admission",
    section: "Section 15",
    keywords: ["late admission", "academic year", "Section 15", "admission"],
    summary: "Admission cannot be denied merely because it is sought at a later point during the academic year.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 9,
        label: "RTE Act, Section 15"
      },
      {
        file: "02_Model_Rules_RTE_2009.pdf",
        page: 5,
        label: "Model Rules"
      }
    ]
  },

  {
    id: "RTE-012",
    title: "Regular examination for Classes V and VIII",
    category: "Examination / Holding Back",
    section: "Rule 16A",
    keywords: ["Class V", "Class VIII", "examination", "regular examination", "2024"],
    summary: "The 2024 amendment provides for a regular examination at the end of every academic year for Class V and Class VIII.",
    sourcePages: [
      {
        file: "12_RTE_Amendment_Rules_2024_GSR_777_E.pdf",
        page: 1,
        label: "RTE Amendment Rules, 2024"
      }
    ]
  },

  {
    id: "RTE-013",
    title: "Additional instruction and re-examination",
    category: "Examination / Holding Back",
    section: "Rule 16A",
    keywords: ["re-examination", "additional instruction", "2 months", "Class V", "Class VIII"],
    summary: "A child who does not fulfil the promotion criteria must receive additional instruction and an opportunity for re-examination within two months of declaration of results.",
    sourcePages: [
      {
        file: "12_RTE_Amendment_Rules_2024_GSR_777_E.pdf",
        page: 2,
        label: "RTE Amendment Rules, 2024"
      }
    ]
  },

  {
    id: "RTE-014",
    title: "Holding back after re-examination",
    category: "Examination / Holding Back",
    section: "Rule 16A",
    keywords: ["holding back", "Class V", "Class VIII", "re-examination", "2024"],
    summary: "If the child again does not fulfil the notified promotion criteria in the re-examination, the child may be held back in Class V or VIII as applicable.",
    sourcePages: [
      {
        file: "12_RTE_Amendment_Rules_2024_GSR_777_E.pdf",
        page: 2,
        label: "RTE Amendment Rules, 2024"
      }
    ]
  },

  {
    id: "RTE-015",
    title: "No expulsion until completion of elementary education",
    category: "Examination / Holding Back",
    section: "Section 16 / amended framework",
    keywords: ["expulsion", "elementary education", "holding back"],
    summary: "No child may be expelled from school until completion of elementary education.",
    sourcePages: [
      {
        file: "12_RTE_Amendment_Rules_2024_GSR_777_E.pdf",
        page: 3,
        label: "RTE Amendment Rules, 2024"
      },
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 9,
        label: "RTE Act"
      }
    ]
  },

  {
    id: "RTE-016",
    title: "No physical punishment or mental harassment",
    category: "Child protection",
    section: "Section 17",
    keywords: ["physical punishment", "mental harassment", "corporal punishment"],
    summary: "No child is to be subjected to physical punishment or mental harassment.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 9,
        label: "RTE Act, Section 17"
      }
    ]
  },

  {
    id: "RTE-017",
    title: "Recognition of schools",
    category: "Recognition / School norms",
    section: "Sections 18-19",
    keywords: ["recognition", "school recognition", "norms", "Section 18", "Section 19"],
    summary: "Schools covered by the Act must comply with the applicable recognition requirements and prescribed norms.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 10,
        label: "RTE Act"
      },
      {
        file: "02_Model_Rules_RTE_2009.pdf",
        page: 6,
        label: "Model Rules"
      },
      {
        file: "02_Model_Rules_RTE_2009.pdf",
        page: 7,
        label: "Model Rules"
      }
    ]
  },

  {
    id: "RTE-018",
    title: "Special training for age-appropriate admission",
    category: "Age-appropriate admission",
    section: "Section 4 / Rule 3",
    keywords: ["special training", "age appropriate", "Rule 3", "Section 4"],
    summary: "Children admitted to an age-appropriate class may receive special training to bring them to the level of their peers.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 5,
        label: "RTE Act, Section 4"
      },
      {
        file: "02_Model_Rules_RTE_2009.pdf",
        page: 1,
        label: "Model Rules"
      },
      {
        file: "02_Model_Rules_RTE_2009.pdf",
        page: 2,
        label: "Model Rules"
      },
      {
        file: "13_RTE_Act_Clarification_on_Provisions.pdf",
        page: 1,
        label: "RTE clarification"
      },
      {
        file: "13_RTE_Act_Clarification_on_Provisions.pdf",
        page: 3,
        label: "RTE clarification"
      }
    ]
  },

  {
    id: "RTE-019",
    title: "Special training period: minimum three months and maximum two years",
    category: "Special training",
    section: "Rule 3",
    keywords: ["three months", "two years", "special training", "assessment"],
    summary: "The model rules provide a minimum special-training period of three months, extendable after assessment up to a maximum of two years.",
    sourcePages: [
      {
        file: "02_Model_Rules_RTE_2009.pdf",
        page: 2,
        label: "Model Rules, Rule 3"
      }
    ]
  },

  {
    id: "RTE-020",
    title: "Age-appropriate learning material for special training",
    category: "Special training",
    section: "Rule 3",
    keywords: ["learning material", "age appropriate", "special training", "academic authority"],
    summary: "Special training should use specially designed, age-appropriate learning material approved by the academic authority under Section 29(1).",
    sourcePages: [
      {
        file: "02_Model_Rules_RTE_2009.pdf",
        page: 1,
        label: "Model Rules"
      },
      {
        file: "02_Model_Rules_RTE_2009.pdf",
        page: 2,
        label: "Model Rules"
      }
    ]
  },

  {
    id: "RTE-021",
    title: "Neighbourhood distance for Classes I-V",
    category: "Neighbourhood school",
    section: "Rule 4",
    keywords: ["1 km", "Classes I-V", "neighbourhood school", "walking distance"],
    summary: "The model rules specify a neighbourhood school within a walking distance of 1 kilometre for Classes I-V.",
    sourcePages: [
      {
        file: "02_Model_Rules_RTE_2009.pdf",
        page: 2,
        label: "Model Rules, Rule 4"
      }
    ]
  },

  {
    id: "RTE-022",
    title: "Neighbourhood distance for Classes VI-VIII",
    category: "Neighbourhood school",
    section: "Rule 4",
    keywords: ["3 km", "Classes VI-VIII", "neighbourhood school", "walking distance"],
    summary: "The model rules specify a neighbourhood school within a walking distance of 3 kilometres for Classes VI-VIII.",
    sourcePages: [
      {
        file: "02_Model_Rules_RTE_2009.pdf",
        page: 2,
        label: "Model Rules, Rule 4"
      },
      {
        file: "02_Model_Rules_RTE_2009.pdf",
        page: 3,
        label: "Model Rules, Rule 4"
      }
    ]
  },

  {
    id: "RTE-023",
    title: "Difficult terrain and reduced neighbourhood distance",
    category: "Neighbourhood school",
    section: "Rule 4",
    keywords: ["difficult terrain", "danger", "neighbourhood", "distance"],
    summary: "Where terrain or the approach to school creates difficulty or danger, the specified neighbourhood limits may be reduced as provided in the rules.",
    sourcePages: [
      {
        file: "02_Model_Rules_RTE_2009.pdf",
        page: 2,
        label: "Model Rules"
      },
      {
        file: "02_Model_Rules_RTE_2009.pdf",
        page: 3,
        label: "Model Rules"
      }
    ]
  },

  {
    id: "RTE-024",
    title: "Transportation or residential arrangements for small hamlets",
    category: "Neighbourhood school",
    section: "Rule 4",
    keywords: ["small hamlet", "transportation", "residential facility", "neighbourhood"],
    summary: "For small hamlets without a neighbourhood school, appropriate arrangements such as free transportation or residential facilities may be made.",
    sourcePages: [
      {
        file: "02_Model_Rules_RTE_2009.pdf",
        page: 3,
        label: "Model Rules"
      }
    ]
  },

  {
    id: "RTE-025",
    title: "Non-discriminatory and transparent admission process",
    category: "Admission / 25%",
    section: "Section 12(1)(c) / Section 13",
    keywords: ["transparent", "non-discriminatory", "admission policy", "25%"],
    summary: "The admission guideline requires a rational, reasonable, just and transparent admission process.",
    sourcePages: [
      {
        file: "04_Guidelines_Admission_Section_13_12_1_c_23-11-2010.pdf",
        page: 1,
        label: "2010 Admission Guideline"
      }
    ]
  },

  {
    id: "RTE-026",
    title: "Random selection for the 25% admission pool",
    category: "Admission / 25%",
    section: "Section 12(1)(c)",
    keywords: ["random selection", "25%", "weaker section", "disadvantaged group"],
    summary: "For the 25% admission pool, the guideline provides for random selection from the applications received from eligible children.",
    sourcePages: [
      {
        file: "04_Guidelines_Admission_Section_13_12_1_c_23-11-2010.pdf",
        page: 1,
        label: "2010 Admission Guideline"
      }
    ]
  },

  {
    id: "RTE-027",
    title: "No testing or interview for admission",
    category: "Admission",
    section: "Section 13 / Admission Guideline",
    keywords: ["testing", "interview", "screening", "admission"],
    summary: "The admission guideline states that there shall be no testing or interviews for any child or parent for selection.",
    sourcePages: [
      {
        file: "04_Guidelines_Admission_Section_13_12_1_c_23-11-2010.pdf",
        page: 1,
        label: "2010 Admission Guideline"
      }
    ]
  },

  {
    id: "RTE-028",
    title: "No profiling based on parental educational qualification",
    category: "Admission",
    section: "Admission Guideline",
    keywords: ["parental education", "profiling", "admission policy"],
    summary: "The admission policy should not profile a child based on the educational qualifications of the parents.",
    sourcePages: [
      {
        file: "04_Guidelines_Admission_Section_13_12_1_c_23-11-2010.pdf",
        page: 1,
        label: "2010 Admission Guideline"
      }
    ]
  },

  {
    id: "RTE-029",
    title: "Admission policy should be in the public domain",
    category: "Admission",
    section: "Admission Guideline",
    keywords: ["public domain", "prospectus", "admission policy", "publicity"],
    summary: "The school's admission policy should be placed in the public domain, given wide publicity and stated in the school prospectus.",
    sourcePages: [
      {
        file: "04_Guidelines_Admission_Section_13_12_1_c_23-11-2010.pdf",
        page: 1,
        label: "2010 Admission Guideline"
      }
    ]
  },

  {
    id: "RTE-030",
    title: "Alternative documents may establish age",
    category: "Age proof",
    section: "Section 14",
    keywords: ["ANM register", "Anganwadi", "declaration", "age proof", "affidavit"],
    summary: "The clarification explains that documents other than a birth certificate may be accepted for determining age, subject to the applicable delegated legislation.",
    sourcePages: [
      {
        file: "13_RTE_Act_Clarification_on_Provisions.pdf",
        page: 10,
        label: "RTE clarification"
      }
    ]
  },

  {
    id: "RTE-031",
    title: "Right to admission despite absence of age proof",
    category: "Age proof",
    section: "Section 14(2)",
    keywords: ["age proof", "no denial", "admission", "right to education"],
    summary: "The clarification states that the right to education cannot be denied because age proof is unavailable.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 9,
        label: "RTE Act"
      },
      {
        file: "13_RTE_Act_Clarification_on_Provisions.pdf",
        page: 10,
        label: "RTE clarification"
      }
    ]
  },

  {
    id: "RTE-032",
    title: "Admission at any point during the academic session",
    category: "Admission",
    section: "Section 15",
    keywords: ["academic session", "late admission", "migration", "displacement", "admission"],
    summary: "Admission should not be denied merely because it is sought after the beginning of the academic session.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 9,
        label: "RTE Act, Section 15"
      },
      {
        file: "13_RTE_Act_Clarification_on_Provisions.pdf",
        page: 10,
        label: "RTE clarification"
      }
    ]
  },

  {
    id: "RTE-033",
    title: "Special training for children admitted late",
    category: "Special training",
    section: "Rule 3 / Section 15 context",
    keywords: ["six months", "special training", "late admission", "Head Teacher"],
    summary: "The clarification notes that children admitted after six months from the beginning of the academic session may be provided special training as determined by the Head Teacher.",
    sourcePages: [
      {
        file: "02_Model_Rules_RTE_2009.pdf",
        page: 5,
        label: "Model Rules"
      },
      {
        file: "13_RTE_Act_Clarification_on_Provisions.pdf",
        page: 10,
        label: "RTE clarification"
      }
    ]
  },

  {
    id: "RTE-034",
    title: "Minimum teacher qualification",
    category: "Teachers",
    section: "Section 23(1)",
    keywords: ["teacher qualification", "Section 23", "NCTE", "Classes I-VIII"],
    summary: "Minimum qualifications for appointment as a teacher are to be laid down by the authorised academic authority under Section 23.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 11,
        label: "RTE Act, Section 23"
      },
      {
        file: "03_Guidelines_Section_23_2_08-11-2010.pdf",
        page: 1,
        label: "8 Nov 2010 Guideline"
      }
    ]
  },

  {
    id: "RTE-035",
    title: "Relaxation of teacher qualification under Section 23(2)",
    category: "Teachers",
    section: "Section 23(2)",
    keywords: ["relaxation", "teacher qualification", "Section 23(2)", "Central Government"],
    summary: "The Central Government may relax minimum teacher qualification requirements in the circumstances specified by Section 23(2).",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 11,
        label: "RTE Act, Section 23"
      },
      {
        file: "03_Guidelines_Section_23_2_08-11-2010.pdf",
        page: 1,
        label: "8 Nov 2010 Guideline"
      },
      {
        file: "03_Guidelines_Section_23_2_08-11-2010.pdf",
        page: 2,
        label: "8 Nov 2010 Guideline"
      }
    ]
  },

  {
    id: "RTE-036",
    title: "Maximum five-year period for Section 23(2) relaxation",
    category: "Teachers",
    section: "Section 23(2)",
    keywords: ["five years", "relaxation", "teacher qualification"],
    summary: "The Section 23(2) relaxation cannot exceed the period specified in the notification, which is not to exceed five years.",
    sourcePages: [
      {
        file: "03_Guidelines_Section_23_2_08-11-2010.pdf",
        page: 1,
        label: "8 Nov 2010 Guideline"
      },
      {
        file: "03_Guidelines_Section_23_2_08-11-2010.pdf",
        page: 2,
        label: "8 Nov 2010 Guideline"
      },
      {
        file: "03_Guidelines_Section_23_2_08-11-2010.pdf",
        page: 3,
        label: "8 Nov 2010 Guideline"
      },
      {
        file: "03_Guidelines_Section_23_2_08-11-2010.pdf",
        page: 4,
        label: "8 Nov 2010 Guideline"
      },
      {
        file: "03_Guidelines_Section_23_2_08-11-2010.pdf",
        page: 5,
        label: "8 Nov 2010 Guideline"
      }
    ]
  },

  {
    id: "RTE-037",
    title: "West Bengal teacher qualification relaxation",
    category: "Teachers",
    section: "Section 23(2)",
    keywords: ["West Bengal", "teacher qualification", "relaxation", "TET", "31 March 2014"],
    summary: "The 2011 Gazette notification granted a time-limited relaxation to West Bengal subject to specified conditions, including TET-related requirements.",
    sourcePages: [
      {
        file: "05_Gazette_Teacher_Qualification_Relaxation_WB_Bihar_10-06-2011.pdf",
        page: 2,
        label: "2011 Teacher Qualification Gazette"
      },
      {
        file: "05_Gazette_Teacher_Qualification_Relaxation_WB_Bihar_10-06-2011.pdf",
        page: 3,
        label: "2011 Teacher Qualification Gazette"
      },
      {
        file: "05_Gazette_Teacher_Qualification_Relaxation_WB_Bihar_10-06-2011.pdf",
        page: 4,
        label: "2011 Teacher Qualification Gazette"
      },
      {
        file: "05_Gazette_Teacher_Qualification_Relaxation_WB_Bihar_10-06-2011.pdf",
        page: 5,
        label: "2011 Teacher Qualification Gazette"
      }
    ]
  },

  {
    id: "RTE-038",
    title: "KVS neighbourhood radius",
    category: "Neighbourhood school",
    section: "Section 12(1)(c)",
    keywords: ["KVS", "Kendriya Vidyalaya", "5 km", "8 km", "neighbourhood"],
    summary: "The 2011 KVS communication provides a defined neighbourhood radius of 5 km for metropolitan towns and district headquarters and 8 km for other Kendriya Vidyalayas.",
    sourcePages: [
      {
        file: "06_KVS_Guidance_Section_12_1_c_02-02-2011.pdf",
        page: 1,
        label: "KVS Guidance, 2 Feb 2011"
      }
    ]
  },

  {
    id: "RTE-039",
    title: "Curriculum and evaluation under Section 29",
    category: "Curriculum / Evaluation",
    section: "Section 29",
    keywords: ["Section 29", "curriculum", "evaluation", "academic authority"],
    summary: "The curriculum and evaluation procedure for elementary education are to be laid down by the academic authority specified by the appropriate Government.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 13,
        label: "RTE Act, Section 29"
      },
      {
        file: "07_Advisory_Section_29_31-01-2012.pdf",
        page: 1,
        label: "Section 29 Advisory"
      }
    ]
  },

  {
    id: "RTE-040",
    title: "Child-centred curriculum",
    category: "Curriculum / Evaluation",
    section: "Section 29(2)",
    keywords: ["child-centred", "activities", "discovery", "exploration", "curriculum"],
    summary: "The Section 29 advisory emphasises child-centred learning through activities, discovery and exploration and other statutory principles.",
    sourcePages: [
      {
        file: "07_Advisory_Section_29_31-01-2012.pdf",
        page: 1,
        label: "Section 29 Advisory"
      },
      {
        file: "07_Advisory_Section_29_31-01-2012.pdf",
        page: 2,
        label: "Section 29 Advisory"
      },
      {
        file: "07_Advisory_Section_29_31-01-2012.pdf",
        page: 3,
        label: "Section 29 Advisory"
      },
      {
        file: "07_Advisory_Section_29_31-01-2012.pdf",
        page: 4,
        label: "Section 29 Advisory"
      }
    ]
  },

  {
    id: "RTE-041",
    title: "Age-appropriate curriculum and rationalised textbook load",
    category: "Curriculum / Evaluation",
    section: "Section 29",
    keywords: ["age appropriate", "curriculum load", "textbooks", "NCF 2005"],
    summary: "The advisory calls for age-appropriate curricula and syllabi and rationalisation of subjects and textbooks to avoid unnecessary curriculum load.",
    sourcePages: [
      {
        file: "07_Advisory_Section_29_31-01-2012.pdf",
        page: 1,
        label: "Section 29 Advisory"
      },
      {
        file: "07_Advisory_Section_29_31-01-2012.pdf",
        page: 2,
        label: "Section 29 Advisory"
      },
      {
        file: "07_Advisory_Section_29_31-01-2012.pdf",
        page: 3,
        label: "Section 29 Advisory"
      },
      {
        file: "07_Advisory_Section_29_31-01-2012.pdf",
        page: 4,
        label: "Section 29 Advisory"
      }
    ]
  },

  {
    id: "RTE-042",
    title: "Protection of children's educational rights",
    category: "Grievance redressal",
    section: "Section 31",
    keywords: ["Section 31", "child rights", "SCPCR", "educational rights"],
    summary: "Section 31 provides for monitoring and protection of children's right to education through the prescribed child-rights mechanisms.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 13,
        label: "RTE Act, Section 31"
      },
      {
        file: "08_Advisory_Sections_31_32_14-02-2012.pdf",
        page: 2,
        label: "Sections 31-32 Advisory"
      },
      {
        file: "08_Advisory_Sections_31_32_14-02-2012.pdf",
        page: 3,
        label: "Sections 31-32 Advisory"
      },
      {
        file: "08_Advisory_Sections_31_32_14-02-2012.pdf",
        page: 4,
        label: "Sections 31-32 Advisory"
      }
    ]
  },

  {
    id: "RTE-043",
    title: "Grievance redressal under Section 32",
    category: "Grievance redressal",
    section: "Section 32",
    keywords: ["Section 32", "grievance", "complaint", "appeal", "local authority"],
    summary: "The Section 32 framework provides a mechanism for written complaints concerning violation of a child's right under the Act and subsequent appeal arrangements.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 13,
        label: "RTE Act, Section 32"
      },
      {
        file: "08_Advisory_Sections_31_32_14-02-2012.pdf",
        page: 2,
        label: "Sections 31-32 Advisory"
      },
      {
        file: "08_Advisory_Sections_31_32_14-02-2012.pdf",
        page: 3,
        label: "Sections 31-32 Advisory"
      },
      {
        file: "08_Advisory_Sections_31_32_14-02-2012.pdf",
        page: 4,
        label: "Sections 31-32 Advisory"
      }
    ]
  },

  {
    id: "RTE-044",
    title: "Teacher grievance redressal mechanism",
    category: "Teacher grievance",
    section: "Rule 21A",
    keywords: ["Rule 21A", "teacher grievance", "School Management Committee", "2015"],
    summary: "The 2015 amendment inserts Rule 21A providing a grievance redressal mechanism for teachers in the schools covered by the rule.",
    sourcePages: [
      {
        file: "11_RTE_Amendment_Rules_2015_GSR_755_E.pdf",
        page: 1,
        label: "RTE Amendment Rules, 2015"
      },
      {
        file: "11_RTE_Amendment_Rules_2015_GSR_755_E.pdf",
        page: 2,
        label: "RTE Amendment Rules, 2015"
      },
      {
        file: "11_RTE_Amendment_Rules_2015_GSR_755_E.pdf",
        page: 3,
        label: "RTE Amendment Rules, 2015"
      },
      {
        file: "11_RTE_Amendment_Rules_2015_GSR_755_E.pdf",
        page: 4,
        label: "RTE Amendment Rules, 2015"
      }
    ]
  },

  {
    id: "RTE-045",
    title: "Part VA: Examination and Holding Back in Certain Cases",
    category: "Examination / Holding Back",
    section: "Part VA",
    keywords: ["Part VA", "2024 amendment", "examination", "holding back"],
    summary: "The 2024 amendment inserts Part VA concerning examination and holding back in certain cases.",
    sourcePages: [
      {
        file: "12_RTE_Amendment_Rules_2024_GSR_777_E.pdf",
        page: 1,
        label: "RTE Amendment Rules, 2024"
      }
    ]
  },

  {
    id: "RTE-046",
    title: "Class V and Class VIII regular examination",
    category: "Examination / Holding Back",
    section: "Rule 16A",
    keywords: ["Class V", "Class VIII", "regular examination", "academic year"],
    summary: "A regular examination is to be held at the end of every academic year in Class V and Class VIII.",
    sourcePages: [
      {
        file: "12_RTE_Amendment_Rules_2024_GSR_777_E.pdf",
        page: 1,
        label: "RTE Amendment Rules, 2024"
      }
    ]
  },

  {
    id: "RTE-047",
    title: "Re-examination within two months",
    category: "Examination / Holding Back",
    section: "Rule 16A",
    keywords: ["re-examination", "two months", "additional instruction"],
    summary: "A child who does not meet the notified promotion criteria must be given additional instruction and an opportunity for re-examination within two months from declaration of results.",
    sourcePages: [
      {
        file: "12_RTE_Amendment_Rules_2024_GSR_777_E.pdf",
        page: 2,
        label: "RTE Amendment Rules, 2024"
      }
    ]
  },

  {
    id: "RTE-048",
    title: "Specialised support for children held back",
    category: "Examination / Holding Back",
    section: "Rule 16A",
    keywords: ["specialised support", "learning gaps", "held back", "teacher", "parents"],
    summary: "During holding back, the class teacher should guide the child and parents and provide specialised inputs after identifying learning gaps.",
    sourcePages: [
      {
        file: "12_RTE_Amendment_Rules_2024_GSR_777_E.pdf",
        page: 2,
        label: "RTE Amendment Rules, 2024"
      }
    ]
  },

  {
    id: "RTE-049",
    title: "Competency-based examination and holistic development",
    category: "Examination / Holding Back",
    section: "Rule 16A",
    keywords: ["competency based", "holistic development", "examination", "assessment"],
    summary: "The examination and re-examination are to be competency-based and aimed at holistic development rather than memorisation and procedural skills.",
    sourcePages: [
      {
        file: "12_RTE_Amendment_Rules_2024_GSR_777_E.pdf",
        page: 3,
        label: "RTE Amendment Rules, 2024"
      }
    ]
  },

  {
    id: "RTE-050",
    title: "RTE application to residential schools",
    category: "Residential schools",
    section: "Section 12(1)(c)",
    keywords: ["residential school", "day scholar", "boarder", "Section 12(1)(c)"],
    summary: "The 2012 residential-school guideline addresses the limited application of Section 12(1)(c), including its application to day scholars rather than residential boarders in the circumstances described.",
    sourcePages: [
      {
        file: "09_Guidelines_Residential_Schools_13-07-2012.pdf",
        page: 1,
        label: "Residential Schools Guideline"
      }
    ]
  },

  {
    id: "RTE-051",
    title: "RTE applicability to minority educational institutions",
    category: "Minority institutions",
    section: "Articles 29-30 context",
    keywords: ["minority institution", "Article 29", "Article 30", "RTE applicability"],
    summary: "The 2014 clarification discusses applicability of RTE provisions to minority educational institutions in the context of Articles 29 and 30 of the Constitution.",
    sourcePages: [
      {
        file: "10_Clarification_Minority_Institutions_27-08-2014.pdf",
        page: 1,
        label: "Minority Institutions Clarification"
      }
    ]
  },

  {
    id: "RTE-052",
    title: "Conditions and continuing requirements for school recognition",
    category: "Recognition / School norms",
    section: "Sections 18-19 / Model Rules",
    keywords: ["recognition", "conditions", "school norms", "capitation", "screening", "accounts"],
    summary: "The recognition framework includes compliance with the RTE Act and rules, prohibition of capitation and screening, prescribed school standards, records and other conditions.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 10,
        label: "RTE Act"
      },
      {
        file: "02_Model_Rules_RTE_2009.pdf",
        page: 5,
        label: "Model Rules"
      },
      {
        file: "02_Model_Rules_RTE_2009.pdf",
        page: 6,
        label: "Model Rules"
      },
      {
        file: "02_Model_Rules_RTE_2009.pdf",
        page: 7,
        label: "Model Rules"
      },
      {
        file: "02_Model_Rules_RTE_2009.pdf",
        page: 15,
        label: "Model Rules"
      },
      {
        file: "02_Model_Rules_RTE_2009.pdf",
        page: 22,
        label: "Model Rules"
      }
    ]
  },

  {
    id: "RTE-053",
    title: "Free textbooks, writing materials and uniforms",
    category: "Free entitlements",
    section: "Model Rules",
    keywords: ["free textbooks", "writing materials", "uniform", "free entitlement"],
    summary: "The model rules provide for specified free entitlements including textbooks, writing materials and uniforms for children covered by the relevant provisions.",
    sourcePages: [
      {
        file: "02_Model_Rules_RTE_2009.pdf",
        page: 3,
        label: "Model Rules"
      }
    ]
  },

  {
    id: "RTE-054",
    title: "RTE Rules Reference Book",
    category: "Reference",
    section: "Reference",
    keywords: ["reference book", "source register", "rules", "PDF"],
    summary: "Searchable source-based compilation of the supplied RTE Act, rules, amendments, guidelines, advisories and clarifications.",
    sourcePages: [
      {
        file: "00_RTE_Rules_Reference_Book_September_2026.pdf",
        page: 1,
        label: "RTE Rules Reference Book"
      }
    ]
  }

];


/* =========================================================
   SOURCE DOCUMENTS
   ========================================================= */

const SOURCE_DOCUMENTS = [

  {
    id: "SOURCE-1",
    title: "RTE Act, 2009 (updated 26-07-2021)",
    description: "Principal Act",
    date: "Updated 26-07-2021",
    pages: 17,
    file: "01_RTE_Act_2009_Updated_26-07-2021.pdf"
  },

  {
    id: "SOURCE-2",
    title: "Model Rules under the RTE Act, 2009",
    description: "Model Rules",
    date: "",
    pages: 22,
    file: "02_Model_Rules_RTE_2009.pdf"
  },

  {
    id: "SOURCE-3",
    title: "Guidelines under Section 35(1) regarding Section 23(2)",
    description: "Teacher qualification / relaxation",
    date: "8 Nov 2010",
    pages: 5,
    file: "03_Guidelines_Section_23_2_08-11-2010.pdf"
  },

  {
    id: "SOURCE-4",
    title: "Guidelines under Section 35(1) on admission, Section 13(1) and Section 12(1)(c)",
    description: "Admission / screening / 25%",
    date: "23 Nov 2010",
    pages: 2,
    file: "04_Guidelines_Admission_Section_13_12_1_c_23-11-2010.pdf"
  },

  {
    id: "SOURCE-5",
    title: "Gazette notifications on teacher-qualification relaxation",
    description: "West Bengal and Bihar relaxation",
    date: "10 Jun 2011",
    pages: 5,
    file: "05_Gazette_Teacher_Qualification_Relaxation_WB_Bihar_10-06-2011.pdf"
  },

  {
    id: "SOURCE-6",
    title: "Guidance on Section 12(1)(c) for Kendriya Vidyalaya Sangathan",
    description: "KVS neighbourhood",
    date: "2 Feb 2011",
    pages: 1,
    file: "06_KVS_Guidance_Section_12_1_c_02-02-2011.pdf"
  },

  {
    id: "SOURCE-7",
    title: "Advisory on Section 29",
    description: "Curriculum / evaluation",
    date: "31 Jan 2012",
    pages: 4,
    file: "07_Advisory_Section_29_31-01-2012.pdf"
  },

  {
    id: "SOURCE-8",
    title: "Advisory on Sections 31 and 32",
    description: "Child-rights monitoring / grievances",
    date: "14 Feb 2012",
    pages: 4,
    file: "08_Advisory_Sections_31_32_14-02-2012.pdf"
  },

  {
    id: "SOURCE-9",
    title: "Guidelines under Section 35(1) for Residential Schools",
    description: "Residential schools",
    date: "13 Jul 2012",
    pages: 1,
    file: "09_Guidelines_Residential_Schools_13-07-2012.pdf"
  },

  {
    id: "SOURCE-10",
    title: "Clarification on RTE applicability to minority educational institutions",
    description: "Minority institutions",
    date: "27 Aug 2014",
    pages: 1,
    file: "10_Clarification_Minority_Institutions_27-08-2014.pdf"
  },

  {
    id: "SOURCE-11",
    title: "RTE (Amendment) Rules, 2015, G.S.R. 755(E)",
    description: "Teacher grievance mechanism",
    date: "2015",
    pages: 4,
    file: "11_RTE_Amendment_Rules_2015_GSR_755_E.pdf"
  },

  {
    id: "SOURCE-12",
    title: "RTE (Amendment) Rules, 2024, G.S.R. 777(E)",
    description: "Examination / holding back",
    date: "2024",
    pages: 3,
    file: "12_RTE_Amendment_Rules_2024_GSR_777_E.pdf"
  },

  {
    id: "EXTRA-1",
    title: "THE RIGHT OF CHILDREN TO FREE AND COMPULSORY EDUCATION ACT, 2009 - Clarification on Provisions",
    description: "Age-appropriate admission / special training clarification",
    date: "2009",
    pages: 17,
    file: "13_RTE_Act_Clarification_on_Provisions.pdf"
  },

  {
    id: "REFERENCE-BOOK",
    title: "RTE Rules Reference Book",
    description: "Searchable, topic-indexed, source-linked compilation",
    date: "September 2026",
    pages: 0,
    file: "00_RTE_Rules_Reference_Book_September_2026.pdf"
  }

];


/* =========================================================
   HELPER FUNCTIONS
   ========================================================= */

function getRuleById(id) {
  return RTE_RULES.find(rule => rule.id === id);
}


function getRulesByCategory(category) {
  return RTE_RULES.filter(rule => rule.category === category);
}


function searchRules(query) {

  const q = String(query || "").trim().toLowerCase();

  if (!q) {
    return RTE_RULES;
  }

  return RTE_RULES.filter(rule => {

    const sourceText = (rule.sourcePages || [])
      .map(source => `${source.file} ${source.label} page ${source.page}`)
      .join(" ");

    const searchableText = [
      rule.id,
      rule.title,
      rule.category,
      rule.section,
      rule.summary,
      ...(rule.keywords || []),
      sourceText
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(q);
  });
}


function getSourceUrl(rule) {

  if (!rule || !rule.sourcePages || !rule.sourcePages.length) {
    return "#";
  }

  const source = rule.sourcePages[0];

  return `${PDF_BASE}${encodeURIComponent(source.file)}#page=${source.page}`;
}


function getSourceLinks(rule) {

  if (!rule || !rule.sourcePages) {
    return [];
  }

  return rule.sourcePages.map(source => ({
    label: source.label,
    page: source.page,
    file: source.file,
    url: `${PDF_BASE}${encodeURIComponent(source.file)}#page=${source.page}`
  }));
}


function getCategories() {

  return [
    ...new Set(
      RTE_RULES.map(rule => rule.category)
    )
  ];
}
