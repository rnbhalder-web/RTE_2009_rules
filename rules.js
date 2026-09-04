/* =========================================================
   RTE RULES DATABASE
   Source-based searchable rules index
   Version: September 2026
   ========================================================= */

const PDF_BASE = "pdf/";

const RTE_RULES = [

  /* =========================
     CORE RTE ACT
     ========================= */

  {
    id: "RTE-001",
    title: "Child's right to free and compulsory education",
    category: "Core RTE Act",
    section: "Section 3",
    keywords: [
      "section 3",
      "free education",
      "compulsory education",
      "6 years",
      "14 years",
      "child"
    ],
    summary:
      "Every child of the age of six to fourteen years has the right to free and compulsory education in a neighbourhood school till completion of elementary education.",
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
    title: "Age-appropriate admission and special provisions",
    category: "Age & Admission",
    section: "Section 4",
    keywords: [
      "section 4",
      "age appropriate",
      "age-appropriate admission",
      "special training",
      "out of school child"
    ],
    summary:
      "A child who has not been admitted to school or has not completed elementary education shall be admitted to an age-appropriate class and shall have a right to receive special training as prescribed.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 3,
        label: "RTE Act, Section 4"
      },
      {
        file: "13_RTE_Act_Clarification_on_Provisions.pdf",
        page: 1,
        label: "Clarification on Provisions"
      }
    ]
  },

  {
    id: "RTE-003",
    title: "25% admission for weaker sections and disadvantaged groups",
    category: "25% Admission",
    section: "Section 12(1)(c)",
    keywords: [
      "25%",
      "25 percent",
      "section 12",
      "12(1)(c)",
      "weaker section",
      "disadvantaged group",
      "admission"
    ],
    summary:
      "For schools covered by Section 12(1)(c), at least 25% of the Class I strength is the statutory reference point for admission of children belonging to weaker sections and disadvantaged groups.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 7,
        label: "RTE Act, Section 12(1)(c)"
      },
      {
        file: "04_Guidelines_Admission_Section_13_12_1_c_23-11-2010.pdf",
        page: 1,
        label: "2010 Admission Guideline"
      }
    ]
  },

  {
    id: "RTE-004",
    title: "25% provision where admission begins at pre-primary level",
    category: "25% Admission",
    section: "Section 12(1)(c)",
    keywords: [
      "pre-primary",
      "pre primary",
      "25%",
      "section 12(1)(c)",
      "nursery",
      "admission"
    ],
    summary:
      "Where a school admits children at the pre-primary level, the admission requirement under the guideline applies at that level.",
    sourcePages: [
      {
        file: "04_Guidelines_Admission_Section_13_12_1_c_23-11-2010.pdf",
        page: 1,
        label: "2010 Admission Guideline"
      }
    ]
  },

  {
    id: "RTE-005",
    title: "No capitation fee",
    category: "Admission",
    section: "Section 13(1)",
    keywords: [
      "capitation",
      "capitation fee",
      "donation",
      "admission fee",
      "section 13"
    ],
    summary:
      "No school or person shall collect any capitation fee while admitting a child.",
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
    keywords: [
      "screening",
      "screening procedure",
      "test",
      "interview",
      "admission test",
      "section 13"
    ],
    summary:
      "No child or parent shall be subjected to a screening procedure for admission.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 8,
        label: "RTE Act, Section 13"
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
    title: "Penalty for collecting capitation fee",
    category: "Admission",
    section: "Section 13(2)(a)",
    keywords: [
      "capitation",
      "penalty",
      "fine",
      "section 13(2)"
    ],
    summary:
      "Collection of capitation fee is subject to the penalty prescribed under Section 13.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 8,
        label: "RTE Act, Section 13(2)"
      }
    ]
  },

  {
    id: "RTE-008",
    title: "Penalty for screening procedure",
    category: "Admission",
    section: "Section 13(2)(b)",
    keywords: [
      "screening",
      "penalty",
      "fine",
      "test",
      "interview",
      "section 13(2)"
    ],
    summary:
      "Subjecting a child to a screening procedure is subject to the penalty prescribed under Section 13.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 8,
        label: "RTE Act, Section 13(2)"
      }
    ]
  },

  {
    id: "RTE-009",
    title: "Proof of age for admission",
    category: "Age & Admission",
    section: "Section 14",
    keywords: [
      "proof of age",
      "age proof",
      "date of birth",
      "section 14",
      "birth certificate"
    ],
    summary:
      "For admission, the age of a child shall be determined with reference to the proof of age specified under the applicable rules.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 8,
        label: "RTE Act, Section 14"
      }
    ]
  },

  {
    id: "RTE-010",
    title: "Admission cannot be denied merely for lack of age proof",
    category: "Age & Admission",
    section: "Section 14",
    keywords: [
      "age proof",
      "no denial",
      "admission",
      "birth certificate",
      "section 14"
    ],
    summary:
      "No child shall be denied admission for lack of age proof in the manner prohibited by the Act.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 8,
        label: "RTE Act, Section 14"
      },
      {
        file: "13_RTE_Act_Clarification_on_Provisions.pdf",
        page: 2,
        label: "Clarification on Provisions"
      }
    ]
  },

  {
    id: "RTE-011",
    title: "Admission cannot be denied because of late admission",
    category: "Age & Admission",
    section: "Section 15",
    keywords: [
      "late admission",
      "academic session",
      "section 15",
      "admission",
      "denial"
    ],
    summary:
      "No child shall be denied admission to a school even if admission is sought after the commencement of the academic year.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 8,
        label: "RTE Act, Section 15"
      },
      {
        file: "13_RTE_Act_Clarification_on_Provisions.pdf",
        page: 3,
        label: "Clarification on Provisions"
      }
    ]
  },

  {
    id: "RTE-012",
    title: "Regular examination for Classes V and VIII",
    category: "Examination",
    section: "Rule 16A",
    keywords: [
      "class 5",
      "class V",
      "class 8",
      "class VIII",
      "examination",
      "regular examination",
      "2024 amendment"
    ],
    summary:
      "Under the 2024 amendment reproduced in the supplied materials, a regular examination is to be held at the end of every academic year for Class V and Class VIII.",
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
    category: "Examination",
    section: "Rule 16A",
    keywords: [
      "re-examination",
      "re examination",
      "additional instruction",
      "two months",
      "2 months",
      "class V",
      "class VIII"
    ],
    summary:
      "If a child does not fulfil the notified promotion criteria, additional instruction and an opportunity for re-examination shall be provided within two months from declaration of results.",
    sourcePages: [
      {
        file: "12_RTE_Amendment_Rules_2024_GSR_777_E.pdf",
        page: 1,
        label: "RTE Amendment Rules, 2024"
      }
    ]
  },

  {
    id: "RTE-014",
    title: "Holding back after failure in re-examination",
    category: "Examination",
    section: "Rule 16A",
    keywords: [
      "holding back",
      "detention",
      "failed",
      "re-examination",
      "class V",
      "class VIII"
    ],
    summary:
      "If a child again fails to fulfil the promotion criteria in the re-examination, the child may be held back in Class V or Class VIII, as applicable, under the 2024 amendment reproduced in the supplied materials.",
    sourcePages: [
      {
        file: "12_RTE_Amendment_Rules_2024_GSR_777_E.pdf",
        page: 1,
        label: "RTE Amendment Rules, 2024"
      }
    ]
  },

  {
    id: "RTE-015",
    title: "No expulsion before completion of elementary education",
    category: "Examination & Expulsion",
    section: "Section 16",
    keywords: [
      "expulsion",
      "elementary education",
      "section 16",
      "school leaving"
    ],
    summary:
      "No child shall be expelled from school till the completion of elementary education.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 9,
        label: "RTE Act, Section 16"
      },
      {
        file: "12_RTE_Amendment_Rules_2024_GSR_777_E.pdf",
        page: 3,
        label: "RTE Amendment Rules, 2024"
      }
    ]
  },

  {
    id: "RTE-016",
    title: "No physical punishment or mental harassment",
    category: "Child Protection",
    section: "Section 17",
    keywords: [
      "physical punishment",
      "mental harassment",
      "corporal punishment",
      "section 17"
    ],
    summary:
      "No child shall be subjected to physical punishment or mental harassment.",
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
    category: "School Recognition",
    section: "Section 18",
    keywords: [
      "recognition",
      "school recognition",
      "section 18",
      "certificate"
    ],
    summary:
      "A school other than a school established, owned or controlled by the appropriate Government or local authority shall not be established or function without obtaining a certificate of recognition in the prescribed manner.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 9,
        label: "RTE Act, Section 18"
      },
      {
        file: "02_Model_Rules_RTE_2009.pdf",
        page: 5,
        label: "Model Rules"
      }
    ]
  },


  /* =========================
     SPECIAL TRAINING
     ========================= */

  {
    id: "RTE-018",
    title: "Special training for age-appropriate admission",
    category: "Special Training",
    section: "Section 4 / Rule 3",
    keywords: [
      "special training",
      "age appropriate",
      "age-appropriate",
      "rule 3",
      "section 4"
    ],
    summary:
      "Children admitted to an age-appropriate class may receive special training to enable them to come to the level of their peers.",
    sourcePages: [
      {
        file: "02_Model_Rules_RTE_2009.pdf",
        page: 1,
        label: "Model Rules, Rule 3"
      },
      {
        file: "13_RTE_Act_Clarification_on_Provisions.pdf",
        page: 1,
        label: "Clarification on Provisions"
      }
    ]
  },

  {
    id: "RTE-019",
    title: "Special training period: minimum three months, maximum two years",
    category: "Special Training",
    section: "Model Rules Rule 3",
    keywords: [
      "3 months",
      "three months",
      "2 years",
      "two years",
      "special training",
      "rule 3"
    ],
    summary:
      "The Model Rules provide a minimum special-training period of three months, extendable on assessment up to a maximum of two years.",
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
    category: "Special Training",
    section: "Model Rules Rule 3",
    keywords: [
      "learning material",
      "age appropriate material",
      "special training",
      "academic authority",
      "section 29"
    ],
    summary:
      "Special training should use specially designed, age-appropriate learning material approved by the academic authority under Section 29(1).",
    sourcePages: [
      {
        file: "02_Model_Rules_RTE_2009.pdf",
        page: 2,
        label: "Model Rules, Rule 3"
      }
    ]
  },


  /* =========================
     NEIGHBOURHOOD
     ========================= */

  {
    id: "RTE-021",
    title: "Neighbourhood distance for Classes I-V",
    category: "Neighbourhood School",
    section: "Model Rules Rule 4",
    keywords: [
      "1 km",
           "one kilometre",
      "classes I-V",
      "class 1",
      "class 5",
      "neighbourhood"
    ],
    summary:
      "The Model Rules specify a neighbourhood school within a walking distance of 1 kilometre for Classes I to V.",
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
    category: "Neighbourhood School",
    section: "Model Rules Rule 4",
    keywords: [
      "3 km",
      "three kilometre",
      "classes VI-VIII",
      "class 6",
      "class 8",
      "neighbourhood"
    ],
    summary:
      "The Model Rules specify a neighbourhood school within a walking distance of 3 kilometres for Classes VI to VIII.",
    sourcePages: [
      {
        file: "02_Model_Rules_RTE_2009.pdf",
        page: 3,
        label: "Model Rules, Rule 4"
      }
    ]
  },

  {
    id: "RTE-023",
    title: "Neighbourhood distance in difficult terrain",
    category: "Neighbourhood School",
    section: "Model Rules Rule 4",
    keywords: [
      "difficult terrain",
      "danger",
      "reduced distance",
      "neighbourhood",
      "school access"
    ],
    summary:
      "In difficult terrain or where the approach creates danger, the specified neighbourhood limits may be reduced as contemplated by the Model Rules.",
    sourcePages: [
      {
        file: "02_Model_Rules_RTE_2009.pdf",
        page: 3,
        label: "Model Rules, Rule 4"
      }
    ]
  },

  {
    id: "RTE-024",
    title: "Transportation or residential arrangements for small hamlets",
    category: "Neighbourhood School",
    section: "Model Rules Rule 4",
    keywords: [
      "small hamlet",
      "transportation",
      "free transportation",
      "residential facility",
      "neighbourhood"
    ],
    summary:
      "For small hamlets without a neighbourhood school, adequate arrangements such as free transportation or residential facilities may be made.",
    sourcePages: [
      {
        file: "02_Model_Rules_RTE_2009.pdf",
        page: 3,
        label: "Model Rules, Rule 4"
      }
    ]
  },


  /* =========================
     ADMISSION GUIDELINE
     ========================= */

  {
    id: "RTE-025",
    title: "Admission process should be non-discriminatory, rational and transparent",
    category: "Admission Guideline",
    section: "2010 Admission Guideline",
    keywords: [
      "non discriminatory",
      "non-discriminatory",
      "rational",
      "transparent",
      "admission policy",
      "2010 guideline"
    ],
    summary:
      "The 23 November 2010 admission guideline describes the objective of a non-discriminatory, rational and transparent admission process.",
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
    category: "25% Admission",
    section: "2010 Admission Guideline",
    keywords: [
      "random selection",
      "lottery",
      "25%",
      "weaker section",
      "disadvantaged group",
      "selection"
    ],
    summary:
      "For the predetermined 25% seats under Section 12(1)(c), the guideline provides for random selection from eligible applications.",
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
    title: "No testing or interview for admission selection",
    category: "Admission Guideline",
    section: "Section 13 / 2010 Guideline",
    keywords: [
      "test",
      "testing",
      "interview",
      "admission test",
      "screening",
      "selection"
    ],
    summary:
      "The admission guideline states that there shall be no testing or interviews for children or parents falling within or outside the specified categories.",
    sourcePages: [
      {
        file: "04_Guidelines_Admission_Section_13_12_1_c_23-11-2010.pdf",
        page: 2,
        label: "2010 Admission Guideline"
      }
    ]
  },

  {
    id: "RTE-028",
    title: "No profiling based on parental educational qualifications",
    category: "Admission Guideline",
    section: "2010 Admission Guideline",
    keywords: [
      "parental education",
      "educational qualification",
      "profiling",
      "admission",
      "selection"
    ],
    summary:
      "The admission policy should not profile a child based on the educational qualifications of the parents.",
    sourcePages: [
      {
        file: "04_Guidelines_Admission_Section_13_12_1_c_23-11-2010.pdf",
        page: 2,
        label: "2010 Admission Guideline"
      }
    ]
  },

  {
    id: "RTE-029",
    title: "School admission policy should be public",
    category: "Admission Guideline",
    section: "2010 Admission Guideline",
    keywords: [
      "public domain",
      "prospectus",
      "admission policy",
      "publicity",
      "school policy"
    ],
    summary:
      "The school admission policy should be placed in the public domain, given wide publicity and stated in the school prospectus.",
    sourcePages: [
      {
        file: "04_Guidelines_Admission_Section_13_12_1_c_23-11-2010.pdf",
        page: 2,
        label: "2010 Admission Guideline"
      }
    ]
  },


  /* =========================
     AGE CLARIFICATION
     ========================= */

  {
    id: "RTE-030",
    title: "Alternative documents for establishing age",
    category: "Age & Admission",
    section: "Clarification on Provisions",
    keywords: [
      "age proof",
      "age document",
      "ANM register",
      "Anganwadi",
      "parent declaration",
      "date of birth"
    ],
    summary:
      "The clarification document discusses alternative records that may be used for establishing age, including specified local records and a declaration by the parent or guardian in appropriate circumstances.",
    sourcePages: [
      {
        file: "13_RTE_Act_Clarification_on_Provisions.pdf",
        page: 2,
        label: "Clarification on Provisions"
      }
    ]
  },

  {
    id: "RTE-031",
    title: "Lack of age proof should not block admission",
    category: "Age & Admission",
    section: "Section 14",
    keywords: [
      "age proof",
      "no denial",
      "admission",
      "birth certificate",
      "parent declaration"
    ],
    summary:
      "The supplied clarification reinforces that lack of the specified age document should not be used to deny admission in the circumstances covered by the Act.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 8,
        label: "RTE Act, Section 14"
      },
      {
        file: "13_RTE_Act_Clarification_on_Provisions.pdf",
        page: 2,
        label: "Clarification on Provisions"
      }
    ]
  },

  {
    id: "RTE-032",
    title: "Admission even after commencement of academic session",
    category: "Age & Admission",
    section: "Section 15",
    keywords: [
      "late admission",
      "academic session",
      "academic year",
      "admission anytime",
      "section 15"
    ],
    summary:
      "The supplied materials state that admission cannot be denied merely because it is sought after the beginning of the academic year.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 8,
        label: "RTE Act, Section 15"
      },
      {
        file: "13_RTE_Act_Clarification_on_Provisions.pdf",
        page: 3,
        label: "Clarification on Provisions"
      }
    ]
  },

  {
    id: "RTE-033",
    title: "Special training for children admitted late or at an age-appropriate class",
    category: "Special Training",
    section: "Section 4 / Model Rules",
    keywords: [
      "late admission",
      "special training",
      "age appropriate",
      "academic session",
      "peer level"
    ],
    summary:
      "Children requiring it may receive special training so that they can reach the learning level of their peers and integrate into the age-appropriate class.",
    sourcePages: [
      {
        file: "02_Model_Rules_RTE_2009.pdf",
        page: 1,
        label: "Model Rules"
      },
      {
        file: "13_RTE_Act_Clarification_on_Provisions.pdf",
        page: 3,
        label: "Clarification on Provisions"
      }
    ]
  },


  /* =========================
     TEACHERS
     ========================= */

  {
    id: "RTE-034",
    title: "Minimum teacher qualification",
    category: "Teachers",
    section: "Section 23",
    keywords: [
      "teacher qualification",
      "minimum qualification",
      "section 23",
      "NCTE",
      "academic authority"
    ],
    summary:
      "The minimum qualifications of teachers are to be laid down by an authorised academic authority as contemplated by Section 23.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 11,
        label: "RTE Act, Section 23"
      }
    ]
  },

  {
    id: "RTE-035",
    title: "Relaxation of minimum teacher qualification",
    category: "Teachers",
    section: "Section 23(2)",
    keywords: [
      "teacher qualification",
      "relaxation",
      "section 23(2)",
      "five years",
      "Central Government"
    ],
    summary:
      "Where the statutory conditions are met, the Central Government may relax minimum teacher qualification requirements for the period specified by notification.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 11,
        label: "RTE Act, Section 23(2)"
      },
      {
        file: "03_Guidelines_Section_23_2_08-11-2010.pdf",
        page: 1,
        label: "8 November 2010 Guideline"
      }
    ]
  },

  {
    id: "RTE-036",
    title: "Maximum five-year relaxation under Section 23(2)",
    category: "Teachers",
    section: "Section 23(2)",
    keywords: [
      "five years",
      "5 years",
      "relaxation",
      "teacher qualification",
      "section 23(2)"
    ],
    summary:
      "The supplied 8 November 2010 guideline states that relaxation under Section 23(2) cannot exceed five years for the period specified in the notification.",
    sourcePages: [
      {
        file: "03_Guidelines_Section_23_2_08-11-2010.pdf",
        page: 1,
        label: "8 November 2010 Guideline"
      }
    ]
  },

  {
    id: "RTE-037",
    title: "West Bengal teacher qualification relaxation",
    category: "Teachers",
    section: "Section 23(2)",
    keywords: [
      "West Bengal",
      "teacher qualification",
      "relaxation",
      "TET",
      "31 March 2014",
      "2011 Gazette"
    ],
    summary:
      "The supplied 2011 Gazette material granted a time-limited relaxation for certain teacher qualification norms in West Bengal, subject to stated conditions, with validity up to 31 March 2014.",
    sourcePages: [
      {
        file: "05_Gazette_Teacher_Qualification_Relaxation_WB_Bihar_10-06-2011.pdf",
        page: 2,
        label: "2011 Gazette"
      }
    ]
  },


  /* =========================
     KVS
     ========================= */

  {
    id: "RTE-038",
    title: "KVS neighbourhood radius",
    category: "KVS",
    section: "Section 12(1)(c) Guidance",
    keywords: [
      "KVS",
      "Kendriya Vidyalaya",
      "5 km",
      "8 km",
      "neighbourhood",
      "metropolitan",
      "district headquarters"
    ],
    summary:
      "The supplied 2011 KVS communication specifies a neighbourhood radius of 5 km for Kendriya Vidyalayas in metropolitan towns and district headquarters and 8 km for other Kendriya Vidyalayas.",
    sourcePages: [
      {
        file: "06_KVS_Guidance_Section_12_1_c_02-02-2011.pdf",
        page: 1,
        label: "KVS Guidance, 2 February 2011"
      }
    ]
  },


  /* =========================
     CURRICULUM
     ========================= */

  {
    id: "RTE-039",
    title: "Curriculum and evaluation under Section 29",
    category: "Curriculum",
    section: "Section 29",
    keywords: [
      "section 29",
      "curriculum",
      "evaluation",
      "academic authority",
      "elementary education"
    ],
    summary:
      "The curriculum and evaluation procedure for elementary education shall be laid down by an academic authority specified by the appropriate Government.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 12,
        label: "RTE Act, Section 29"
      },
      {
        file: "07_Advisory_Section_29_31-01-2012.pdf",
        page: 1,
        label: "31 January 2012 Advisory"
      }
    ]
  },

  {
    id: "RTE-040",
    title: "Child-centred curriculum",
    category: "Curriculum",
    section: "Section 29(2)",
    keywords: [
      "child centred",
      "child-centred",
      "curriculum",
      "activities",
      "discovery",
      "exploration"
    ],
    summary:
      "The supplied advisory explains child-centred curriculum principles, including learning through activities, discovery and exploration and attention to the child's abilities and development.",
    sourcePages: [
      {
        file: "07_Advisory_Section_29_31-01-2012.pdf",
        page: 1,
        label: "31 January 2012 Advisory"
      }
    ]
  },

  {
    id: "RTE-041",
    title: "Age-appropriate curriculum and rationalisation of textbook load",
    category: "Curriculum",
    section: "Section 29",
    keywords: [
      "age appropriate",
      "curriculum",
      "textbook",
      "textbook load",
      "burden",
      "NCF 2005"
    ],
    summary:
      "The supplied advisory states that curricula and syllabi should be age-appropriate and discusses rationalisation of subject and textbook load to avoid unnecessary burden.",
    sourcePages: [
      {
        file: "07_Advisory_Section_29_31-01-2012.pdf",
        page: 2,
        label: "31 January 2012 Advisory"
      }
    ]
  },


  /* =========================
     CHILD GRIEVANCE
     ========================= */

  {
    id: "RTE-042",
    title: "Protection of educational rights",
    category: "Grievance",
    section: "Section 31",
    keywords: [
      "section 31",
      "educational rights",
      "child rights",
      "monitoring",
      "SCPCR"
    ],
    summary:
      "Section 31 provides for monitoring and protection of the child's right to education through the authorities specified in the Act.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 13,
        label: "RTE Act, Section 31"
      },
      {
        file: "08_Advisory_Sections_31_32_14-02-2012.pdf",
        page: 1,
        label: "14 February 2012 Advisory"
      }
    ]
  },

  {
    id: "RTE-043",
    title: "Grievance redressal under Section 32",
    category: "Grievance",
    section: "Section 32",
    keywords: [
      "section 32",
      "grievance",
      "complaint",
      "appeal",
      "local authority",
      "SCPCR",
      "REPA"
    ],
    summary:
      "The supplied materials describe a complaint and appeal framework for grievances concerning the child's right to education, including local authority handling and escalation arrangements.",
    sourcePages: [
      {
        file: "01_RTE_Act_2009_Updated_26-07-2021.pdf",
        page: 13,
        label: "RTE Act, Section 32"
      },
      {
        file: "08_Advisory_Sections_31_32_14-02-2012.pdf",
        page: 2,
        label: "14 February 2012 Advisory"
      }
    ]
  },


  /* =========================
     TEACHER GRIEVANCE
     ========================= */

  {
    id: "RTE-044",
    title: "Teacher grievance redressal mechanism",
    category: "Teacher Grievance",
    section: "Rule 21A",
    keywords: [
      "Rule 21A",
      "teacher grievance",
      "School Management Committee",
      "SMC",
      "2015 amendment"
    ],
    summary:
      "The 2015 amendment rules insert Rule 21A concerning grievance redressal for teachers. The School Management Committee is the first level for teacher grievances in the schools specified by the rule.",
    sourcePages: [
      {
        file: "11_RTE_Amendment_Rules_2015_GSR_755_E.pdf",
        page: 1,
        label: "RTE Amendment Rules, 2015"
      }
    ]
  },


  /* =========================
     2024 AMENDMENT
     ========================= */

  {
    id: "RTE-045",
    title: "Part VA: Examination and Holding Back in Certain Cases",
    category: "2024 Amendment",
    section: "Part VA",
    keywords: [
      "Part VA",
      "2024",
      "examination",
      "holding back",
      "RTE amendment"
    ],
    summary:
      "The 2024 amendment reproduced in the supplied materials inserts Part VA titled 'Examination and Holding Back in Certain Cases'.",
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
    title: "Annual examination in Class V and Class VIII",
    category: "2024 Amendment",
    section: "Rule 16A",
    keywords: [
      "Class V",
      "Class VIII",
      "annual examination",
      "regular examination",
      "2024"
    ],
    summary:
      "A regular examination is to be held at the end of every academic year in Class V and Class VIII under the supplied 2024 amendment.",
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
    category: "2024 Amendment",
    section: "Rule 16A",
    keywords: [
      "re-examination",
      "two months",
      "2 months",
      "additional instruction",
      "promotion criteria"
    ],
    summary:
      "Additional instruction and an opportunity for re-examination shall be provided within two months from declaration of results where the child does not fulfil the notified promotion criteria.",
    sourcePages: [
      {
        file: "12_RTE_Amendment_Rules_2024_GSR_777_E.pdf",
        page: 1,
        label: "RTE Amendment Rules, 2024"
      }
    ]
  },

  {
    id: "RTE-048",
    title: "Specialised support for children held back",
    category: "2024 Amendment",
    section: "Rule 16A",
    keywords: [
      "specialised inputs",
      "learning gaps",
      "held back",
      "teacher",
      "parents",
      "2024"
    ],
    summary:
      "During holding back, the class teacher should guide the child and parents as necessary and provide specialised inputs after identifying learning gaps.",
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
    title: "Competency-based examination and re-examination",
    category: "2024 Amendment",
    section: "Rule 16A",
    keywords: [
      "competency based",
      "competency-based",
      "holistic development",
      "examination",
      "memorisation",
      "2024"
    ],
    summary:
      "The examination and re-examination are to be competency-based and aimed at holistic development rather than memorisation and procedural skills.",
    sourcePages: [
      {
        file: "12_RTE_Amendment_Rules_2024_GSR_777_E.pdf",
        page: 3,
        label: "RTE Amendment Rules, 2024"
      }
    ]
  },


  /* =========================
     RESIDENTIAL SCHOOLS
     ========================= */

  {
    id: "RTE-050",
    title: "Application of Section 12(1)(c) to residential schools",
    category: "Residential Schools",
    section: "Section 12(1)(c)",
    keywords: [
      "residential school",
      "boarding",
      "day scholar",
      "section 12",
      "12(1)(c)"
    ],
    summary:
      "The supplied 13 July 2012 guideline addresses Section 12(1)(c) in relation to residential schools and distinguishes day scholars from residential boarders.",
    sourcePages: [
      {
        file: "09_Guidelines_Residential_Schools_13-07-2012.pdf",
        page: 1,
        label: "13 July 2012 Residential School Guideline"
      }
    ]
  },


  /* =========================
     MINORITY INSTITUTIONS
     ========================= */

  {
    id: "RTE-051",
    title: "RTE applicability to minority educational institutions",
    category: "Minority Institutions",
    section: "Articles 29-30 context",
    keywords: [
      "minority institution",
      "minority school",
      "Article 29",
      "Article 30",
      "RTE applicability",
      "holding back"
    ],
    summary:
      "The supplied 27 August 2014 clarification discusses applicability of RTE provisions to minority educational institutions in the context of Articles 29 and 30 of the Constitution.",
    sourcePages: [
      {
        file: "10_Clarification_Minority_Institutions_27-08-2014.pdf",
        page: 1,
        label: "27 August 2014 Clarification"
      }
    ]
  },


  /* =========================
     RECOGNITION / FREE ENTITLEMENTS
     ========================= */

  {
    id: "RTE-052",
    title: "Conditions relating to school recognition",
    category: "School Recognition",
    section: "Model Rules",
    keywords: [
      "recognition",
      "school recognition",
      "capitation",
      "screening",
      "recognition certificate",
      "Model Rules"
    ],
    summary:
      "The Model Rules contain recognition procedures and conditions, including compliance with the RTE Act and rules, non-collection of capitation fee and no screening procedure.",
    sourcePages: [
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
      }
    ]
  },

  {
    id: "RTE-053",
    title: "Free textbooks, writing materials and uniforms",
    category: "Free Entitlements",
    section: "Model Rules",
    keywords: [
      "free textbooks",
      "textbooks",
      "writing materials",
      "uniform",
      "free materials",
      "children with disabilities"
    ],
    summary:
      "The Model Rules provide for specified free materials, including textbooks, writing materials and uniforms, with special learning/support material for children with disabilities where applicable.",
    sourcePages: [
      {
        file: "02_Model_Rules_RTE_2009.pdf",
        page: 15,
        label: "Model Rules"
      }
    ]
  },


  /* =========================
     REFERENCE BOOK
     ========================= */

  {
    id: "RTE-054",
    title: "RTE Rules Reference Book",
    category: "Reference",
    section: "Source-based compilation",
    keywords: [
      "reference book",
      "source",
      "RTE rules",
      "government documents",
      "gazette",
      "searchable"
    ],
    summary:
      "Source-based searchable compilation of the supplied Government, Gazette, guideline and clarification documents. The book does not independently verify amendments or government instructions not included in the supplied documents.",
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
   HELPER FUNCTIONS
   ========================================================= */

/**
 * Get one rule by ID.
 */
function getRuleById(id) {
  return RTE_RULES.find(rule => rule.id === id) || null;
}


/**
 * Get all rules belonging to a category.
 */
function getRulesByCategory(category) {
  return RTE_RULES.filter(rule => rule.category === category);
}


/**
 * Search rules by:
 * ID
 * title
 * category
 * section
 * keywords
 * summary
 */
function searchRules(query) {

  if (!query || !query.trim()) {
    return RTE_RULES;
  }

  const q = query.toLowerCase().trim();

  return RTE_RULES.filter(rule => {

    const searchableText = [
      rule.id,
      rule.title,
      rule.category,
      rule.section,
      rule.summary,
      ...(rule.keywords || [])
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(q);
  });
}


/**
 * Return URL for the first source page.
 *
 * Example:
 * pdf/01_RTE_Act_2009_Updated_26-07-2021.pdf#page=8
 */
function getSourceUrl(rule) {

  if (!rule || !rule.sourcePages || !rule.sourcePages.length) {
    return "#";
  }

  const source = rule.sourcePages[0];

  return (
    PDF_BASE +
    encodeURIComponent(source.file) +
    "#page=" +
    source.page
  );
}


/**
 * Return all source links for a rule.
 *
 * Useful when one rule is supported by multiple documents.
 */
function getSourceLinks(rule) {

  if (!rule || !rule.sourcePages) {
    return [];
  }

  return rule.sourcePages.map(source => ({
    label: source.label,
    file: source.file,
    page: source.page,
    url:
      PDF_BASE +
      encodeURIComponent(source.file) +
      "#page=" +
      source.page
  }));
}


/**
 * Get all available categories.
 */
function getCategories() {

  return [
    ...new Set(
      RTE_RULES.map(rule => rule.category)
    )
  ].sort();
}
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
