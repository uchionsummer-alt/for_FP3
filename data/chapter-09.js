// 公開過去問の分析に基づく再構成問題。照合記録はreviews.json。
const FP3_CHAPTER_09 = [
  {
    "id": "q9_1",
    "chapterId": "ch9",
    "unitId": "u9_1",
    "type": "mcq",
    "question": "資料の基本生活費が毎年同じ変動率で複利増加するとき、3年後の基本生活費はいくらか。計算途中は丸めず、万円未満を四捨五入する。",
    "options": [
      "255万円",
      "264万円",
      "254万円"
    ],
    "answer": 0,
    "explanation": "240×1.02の3乗＝254.68992万円なので255万円です。毎年4.8万円を単純に足すのではなく、増加後の金額に次年の変動率を掛けます。端数処理は指定された最終段階で行います。",
    "revision": 3,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202605",
        "questionNumber": 2,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2026年5月公表分 問2",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_a.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "previousLawsDate": "2024-04-01",
    "materials": {
      "caption": "資料（記載のない条件・税・費用は考慮しない）",
      "columns": [
        "項目",
        "内容"
      ],
      "rows": [
        [
          "基準年の生活費",
          "240万円"
        ],
        [
          "年間変動率",
          "2%"
        ],
        [
          "経過年数",
          "3年"
        ]
      ]
    },
    "calculationCheck": {
      "formula": "Math.round(240*1.02**3)",
      "value": 255,
      "unit": "万円",
      "target": "answer"
    },
    "practiceGroup": "cashflow",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_1_2",
    "chapterId": "ch9",
    "unitId": "u9_1",
    "type": "mcq",
    "question": "資料の当年末金融資産残高はいくらか。「前年末残高×（1＋運用利率）＋年間収支」で計算し、万円未満を四捨五入する。",
    "options": [
      "788万円",
      "796万円",
      "803万円"
    ],
    "answer": 1,
    "explanation": "年間収支は650－612＝38万円。前年末残高に運用を反映した750×1.01＝757.5万円へ38万円を加え795.5万円、四捨五入して796万円です。当年の年間収支まで1年運用しない点に注意します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202605",
        "questionNumber": 2,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2026年5月公表分 問2",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_a.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      },
      {
        "paperId": "j3_202505",
        "questionNumber": 2,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2025年5月公表分 問2",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_a.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "materials": {
      "caption": "資料（記載のない条件・税・費用は考慮しない）",
      "columns": [
        "項目",
        "内容"
      ],
      "rows": [
        [
          "前年末金融資産",
          "750万円"
        ],
        [
          "運用利率",
          "1%"
        ],
        [
          "当年可処分所得合計",
          "650万円"
        ],
        [
          "当年支出合計",
          "612万円"
        ]
      ]
    },
    "calculationCheck": {
      "formula": "Math.round(750*1.01+650-612)",
      "value": 796,
      "unit": "万円",
      "target": "answer"
    },
    "practiceGroup": "cashflow",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_1_3",
    "chapterId": "ch9",
    "unitId": "u9_1",
    "type": "mcq",
    "question": "基準年から2年後の年間収支はいくらか。給与・生活費はそれぞれ基準年から複利計算し、万円未満を四捨五入してから合計する。その他の支出は固定とする。",
    "options": [
      "54万円",
      "62万円",
      "42万円"
    ],
    "answer": 2,
    "explanation": "給与600×1.01の2乗＝612.06→612万円。生活費240×1.02の2乗＝249.696→250万円。支出250＋168＋80＋24＋48＝570万円。収支は612－570＝42万円です。表への記入単位に合わせてから合計します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202505",
        "questionNumber": 2,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2025年5月公表分 問2",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_a.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      },
      {
        "paperId": "j3_202605",
        "questionNumber": 2,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2026年5月公表分 問2",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_a.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "materials": {
      "caption": "資料（記載のない条件・税・費用は考慮しない）",
      "columns": [
        "項目",
        "内容"
      ],
      "rows": [
        [
          "給与可処分所得・基準年",
          "600万円、年1%増"
        ],
        [
          "基本生活費・基準年",
          "240万円、年2%増"
        ],
        [
          "2年後の住居費・教育費",
          "168万円・80万円"
        ],
        [
          "2年後の保険料・その他",
          "24万円・48万円"
        ]
      ]
    },
    "calculationCheck": {
      "formula": "Math.round(600*1.01**2)-(Math.round(240*1.02**2)+168+80+24+48)",
      "value": 42,
      "unit": "万円",
      "target": "answer"
    },
    "practiceGroup": "cashflow",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_1_4",
    "chapterId": "ch9",
    "unitId": "u9_1",
    "type": "mcq",
    "question": "資料から2年後末の金融資産残高を求める。各年末に「前年末残高×1.02＋当年収支」で計算し、各年ごとに万円未満を四捨五入する。",
    "options": [
      "470万円",
      "450万円",
      "462万円"
    ],
    "answer": 0,
    "explanation": "1年後末は600×1.02－200＝412万円。2年後末は412×1.02＋50＝470.24→470万円です。2年間の収支を先にまとめて運用したり、赤字の年の運用益を落としたりしないようにします。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202405",
        "questionNumber": 2,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2024年5月公表分 問2",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_a.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      },
      {
        "paperId": "j3_202605",
        "questionNumber": 2,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2026年5月公表分 問2",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_a.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "materials": {
      "caption": "資料（記載のない条件・税・費用は考慮しない）",
      "columns": [
        "項目",
        "内容"
      ],
      "rows": [
        [
          "基準年末金融資産",
          "600万円"
        ],
        [
          "運用利率",
          "各年2%"
        ],
        [
          "1年後の年間収支",
          "マイナス200万円"
        ],
        [
          "2年後の年間収支",
          "プラス50万円"
        ]
      ]
    },
    "calculationCheck": {
      "formula": "Math.round(Math.round(600*1.02-200)*1.02+50)",
      "value": 470,
      "unit": "万円",
      "target": "answer"
    },
    "practiceGroup": "cashflow",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_1_5",
    "chapterId": "ch9",
    "unitId": "u9_1",
    "type": "mcq",
    "question": "給与収入欄を「可処分所得」、住居費に住宅ローン返済を含めて作る家計のキャッシュフロー表として、適切な扱いはどれか。",
    "options": [
      "可処分所得から所得税・社会保険料をさらに差し引く",
      "住宅ローンの元金返済も年間の現金支出に含める",
      "住宅ローン返済は利息部分だけを現金支出に含める"
    ],
    "answer": 1,
    "explanation": "家計の年間収支は現金の動きなので、ローン元金の返済も支出です。一方、可処分所得から税・社会保険料を再度引くと二重控除になります。税務上の必要経費とは見方が異なります。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202605",
        "questionNumber": 2,
        "relationship": "related_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2026年5月公表分 問2",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_a.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。"
      }
    ],
    "examAlignment": "scope_supplement",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "practiceGroup": "cashflow",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
      "https://www.jafp.or.jp/know/fp/sheet/"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_2_1",
    "chapterId": "ch9",
    "unitId": "u9_2",
    "type": "mcq",
    "question": "資料の家計の純資産はいくらか。全て現時点の金額とする。",
    "options": [
      "4,890万円",
      "2,200万円",
      "2,290万円"
    ],
    "answer": 2,
    "explanation": "資産は400＋800＋300＋100＋90＋3,200＝4,890万円。純資産＝4,890－2,600＝2,290万円です。生命保険は死亡保険金でなく解約返戻金相当額を含めます。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202605",
        "questionNumber": 3,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2026年5月公表分 問3",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_a.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "materials": {
      "caption": "資料（記載のない条件・税・費用は考慮しない）",
      "columns": [
        "項目",
        "内容"
      ],
      "rows": [
        [
          "普通預金・定期預金",
          "400万円・800万円"
        ],
        [
          "上場株式・投資信託の時価",
          "300万円・100万円"
        ],
        [
          "生命保険の解約返戻金",
          "90万円"
        ],
        [
          "自宅時価",
          "3,200万円"
        ],
        [
          "住宅ローン残高",
          "2,600万円"
        ]
      ]
    },
    "calculationCheck": {
      "formula": "400+800+300+100+90+3200-2600",
      "value": 2290,
      "unit": "万円",
      "target": "answer"
    },
    "practiceGroup": "balance",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_2_2",
    "chapterId": "ch9",
    "unitId": "u9_2",
    "type": "mcq",
    "question": "資料の純資産はいくらか。購入額ではなく、現在の資産価額で計算する。",
    "options": [
      "1,970万円",
      "2,200万円",
      "2,350万円"
    ],
    "answer": 0,
    "explanation": "700＋350＋120＋3,800－3,000＝1,970万円です。株式は時価350万円、生命保険は解約返戻金120万円を使います。購入代金500万円や払込保険料200万円をそのまま資産額にしません。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202505",
        "questionNumber": 3,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2025年5月公表分 問3",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_a.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      },
      {
        "paperId": "j3_202405",
        "questionNumber": 3,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2024年5月公表分 問3",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_a.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "materials": {
      "caption": "資料（記載のない条件・税・費用は考慮しない）",
      "columns": [
        "項目",
        "内容"
      ],
      "rows": [
        [
          "預金",
          "700万円"
        ],
        [
          "株式",
          "購入額500万円、現在時価350万円"
        ],
        [
          "生命保険",
          "払込保険料200万円、解約返戻金120万円"
        ],
        [
          "自宅の時価",
          "3,800万円"
        ],
        [
          "住宅ローン残高",
          "3,000万円"
        ]
      ]
    },
    "calculationCheck": {
      "formula": "700+350+120+3800-3000",
      "value": 1970,
      "unit": "万円",
      "target": "answer"
    },
    "practiceGroup": "balance",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_2_3",
    "chapterId": "ch9",
    "unitId": "u9_2",
    "type": "mcq",
    "question": "純資産1,500万円の家計が、預金500万円と住宅ローン2,500万円で時価3,000万円の住宅を購入した直後の純資産はいくらか。諸費用や価格変動はない。",
    "options": [
      "1,000万円",
      "1,500万円",
      "4,000万円"
    ],
    "answer": 1,
    "explanation": "預金は500万円減り、住宅3,000万円が増えるので資産は差引2,500万円増。負債も2,500万円増え、純資産の増減は0です。購入額をそのまま純資産の増加とはしません。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202605",
        "questionNumber": 3,
        "relationship": "related_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2026年5月公表分 問3",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_a.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。"
      }
    ],
    "examAlignment": "scope_supplement",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "1500+3000-500-2500",
      "value": 1500,
      "unit": "万円",
      "target": "answer"
    },
    "practiceGroup": "balance",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/know/fp/sheet/"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_2_4",
    "chapterId": "ch9",
    "unitId": "u9_2",
    "type": "mcq",
    "question": "資産時価3,500万円、負債2,200万円の家計が、預金100万円でローン元金100万円を繰上返済し、その後保有株式の時価が50万円下落した。純資産はいくらか。利息・費用なし。",
    "options": [
      "1,350万円",
      "1,150万円",
      "1,250万円"
    ],
    "answer": 2,
    "explanation": "元金返済は資産・負債が同額減るので純資産は変わりません。株式時価下落50万円だけ純資産が減り、3,500－2,200－50＝1,250万円です。返済額を純資産からさらに引かないようにします。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202605",
        "questionNumber": 3,
        "relationship": "related_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2026年5月公表分 問3",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_a.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。"
      }
    ],
    "examAlignment": "scope_supplement",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "3500-2200-50",
      "value": 1250,
      "unit": "万円",
      "target": "answer"
    },
    "practiceGroup": "balance",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/know/fp/sheet/"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_2_5",
    "chapterId": "ch9",
    "unitId": "u9_2",
    "type": "mcq",
    "question": "家計バランスシートの資料として、適切な組合せはどれか。",
    "options": [
      "生命保険は解約返戻金相当額、ローンは現在の元金残高を計上",
      "生命保険は将来の満期保険金、ローンは当初借入額を計上",
      "生命保険は死亡保険金額、ローンは年間返済額を計上"
    ],
    "answer": 0,
    "explanation": "現在時点の財産・債務を一覧にするため、解約返戻金相当額と現在の借入残高を使います。将来の保障額や当初の借入額ではなく、同じ時点の価額をそろえることが重要です。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202405",
        "questionNumber": 3,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2024年5月公表分 問3",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_a.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      },
      {
        "paperId": "j3_202605",
        "questionNumber": 3,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2026年5月公表分 問3",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_a.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "practiceGroup": "balance",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_3_1",
    "chapterId": "ch9",
    "unitId": "u9_3",
    "type": "mcq",
    "question": "一括元本100万円を年2%で5年間運用する。資料の係数から適切なものを選んだ5年後の元利合計はいくらか。",
    "options": [
      "905,730円",
      "1,104,080円",
      "1,212,160円"
    ],
    "answer": 1,
    "explanation": "一括元本→将来の元利合計は終価係数です。1,000,000×1.10408＝1,104,080円。現価係数は逆に将来の目標額から現在元本を求め、資本回収係数は毎年の返済・取崩額を求めます。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202405",
        "questionNumber": 4,
        "relationship": "related_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2024年5月公表分 問4",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_a.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。"
      }
    ],
    "examAlignment": "scope_supplement",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "materials": {
      "caption": "資料（記載のない条件・税・費用は考慮しない）",
      "columns": [
        "項目",
        "内容"
      ],
      "rows": [
        [
          "期間・利率",
          "5年・年2%"
        ],
        [
          "終価係数",
          "1.10408"
        ],
        [
          "現価係数",
          "0.90573"
        ],
        [
          "資本回収係数",
          "0.21216"
        ]
      ]
    },
    "calculationCheck": {
      "formula": "1000000*1.10408",
      "value": 1104080,
      "unit": "円",
      "target": "answer"
    },
    "practiceGroup": "coefficient",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_3_2",
    "chapterId": "ch9",
    "unitId": "u9_3",
    "type": "mcq",
    "question": "5年後に500万円を用意するため、現在一括で準備する元本はいくらか。年2%で運用し、資料の適切な係数を使う。",
    "options": [
      "5,520,400円",
      "23,567,500円",
      "4,528,650円"
    ],
    "answer": 2,
    "explanation": "将来の額→現在一括元本は現価係数です。5,000,000×0.90573＝4,528,650円。終価係数を掛けると将来価値への計算になってしまいます。複数回受取を割り引く年金現価係数とも違います。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202505",
        "questionNumber": 4,
        "relationship": "related_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2025年5月公表分 問4",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_a.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。"
      }
    ],
    "examAlignment": "scope_supplement",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "materials": {
      "caption": "資料（記載のない条件・税・費用は考慮しない）",
      "columns": [
        "項目",
        "内容"
      ],
      "rows": [
        [
          "終価係数",
          "1.10408"
        ],
        [
          "現価係数",
          "0.90573"
        ],
        [
          "年金現価係数",
          "4.71350"
        ]
      ]
    },
    "calculationCheck": {
      "formula": "5000000*0.90573",
      "value": 4528650,
      "unit": "円",
      "target": "answer"
    },
    "practiceGroup": "coefficient",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_3_3",
    "chapterId": "ch9",
    "unitId": "u9_3",
    "type": "mcq",
    "question": "10年後に300万円を積み立てたい。毎年末積立、年2%運用として必要な毎年の積立額はいくらか。資料の係数を使い、千円未満を切り上げる。",
    "options": [
      "274,000円",
      "334,000円",
      "2,461,000円"
    ],
    "answer": 0,
    "explanation": "目標額→毎年積立額は減債基金係数です。3,000,000×0.09133＝273,990円、千円未満切上げで274,000円です。四捨五入や切捨てと、資本回収係数との取り違えに注意します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202505",
        "questionNumber": 4,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2025年5月公表分 問4",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_a.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "materials": {
      "caption": "資料（記載のない条件・税・費用は考慮しない）",
      "columns": [
        "項目",
        "内容"
      ],
      "rows": [
        [
          "減債基金係数",
          "0.09133"
        ],
        [
          "資本回収係数",
          "0.11133"
        ],
        [
          "現価係数",
          "0.82030"
        ]
      ]
    },
    "calculationCheck": {
      "formula": "Math.ceil(3000000*0.09133/1000)*1000",
      "value": 274000,
      "unit": "円",
      "target": "answer"
    },
    "practiceGroup": "coefficient",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_3_4",
    "chapterId": "ch9",
    "unitId": "u9_3",
    "type": "mcq",
    "question": "現在の600万円を年2%で運用しながら、5年間で毎年末同額ずつ取り崩す。年間取崩額はいくらか。資料の適切な係数を使う。",
    "options": [
      "1,200,000円",
      "1,272,960円",
      "1,152,960円"
    ],
    "answer": 1,
    "explanation": "現在元本→毎年取崩額は資本回収係数です。6,000,000×0.21216＝1,272,960円。単純に5分割した120万円では運用益を反映せず、減債基金係数は積立の問題に使う係数です。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202605",
        "questionNumber": 4,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2026年5月公表分 問4",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_a.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "materials": {
      "caption": "資料（記載のない条件・税・費用は考慮しない）",
      "columns": [
        "項目",
        "内容"
      ],
      "rows": [
        [
          "資本回収係数",
          "0.21216"
        ],
        [
          "減債基金係数",
          "0.19216"
        ],
        [
          "終価係数",
          "1.10408"
        ]
      ]
    },
    "calculationCheck": {
      "formula": "6000000*0.21216",
      "value": 1272960,
      "unit": "円",
      "target": "answer"
    },
    "practiceGroup": "coefficient",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_3_5",
    "chapterId": "ch9",
    "unitId": "u9_3",
    "type": "mcq",
    "question": "毎年末30万円ずつ10年間積み立て、年2%で複利運用する。10年後の合計額はいくらか。資料の適切な係数を使う。",
    "options": [
      "2,694,777円",
      "3,000,000円",
      "3,284,916円"
    ],
    "answer": 2,
    "explanation": "毎年積立額→将来合計額は年金終価係数です。300,000×10.94972＝3,284,916円。一括元本の終価係数や、毎年受取を現在価値へ割り引く年金現価係数とは目的が異なります。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202405",
        "questionNumber": 4,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2024年5月公表分 問4",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_a.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "materials": {
      "caption": "資料（記載のない条件・税・費用は考慮しない）",
      "columns": [
        "項目",
        "内容"
      ],
      "rows": [
        [
          "終価係数",
          "1.21899"
        ],
        [
          "年金終価係数",
          "10.94972"
        ],
        [
          "年金現価係数",
          "8.98259"
        ]
      ]
    },
    "calculationCheck": {
      "formula": "300000*10.94972",
      "value": 3284916,
      "unit": "円",
      "target": "answer"
    },
    "practiceGroup": "coefficient",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_3_6",
    "chapterId": "ch9",
    "unitId": "u9_3",
    "type": "mcq",
    "question": "今後10年間、毎年末30万円ずつ取り崩したい。年2%で運用する場合、現在必要な一括元本はいくらか。資料の係数を使う。",
    "options": [
      "2,694,777円",
      "3,000,000円",
      "3,284,916円"
    ],
    "answer": 0,
    "explanation": "毎年受取額→現在元本は年金現価係数です。300,000×8.98259＝2,694,777円です。運用しながら受け取るため、単純な30万円×10年より少ない元本で計算されます。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202405",
        "questionNumber": 4,
        "relationship": "related_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2024年5月公表分 問4",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_a.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。"
      }
    ],
    "examAlignment": "scope_supplement",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "materials": {
      "caption": "資料（記載のない条件・税・費用は考慮しない）",
      "columns": [
        "項目",
        "内容"
      ],
      "rows": [
        [
          "年金現価係数",
          "8.98259"
        ],
        [
          "年金終価係数",
          "10.94972"
        ],
        [
          "現価係数",
          "0.82030"
        ]
      ]
    },
    "calculationCheck": {
      "formula": "300000*8.98259",
      "value": 2694777,
      "unit": "円",
      "target": "answer"
    },
    "practiceGroup": "coefficient",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_3_7",
    "chapterId": "ch9",
    "unitId": "u9_3",
    "type": "mcq",
    "question": "元本1,000万円を20年間、年2%で運用しながら毎年末均等に取り崩す。年間取崩額を求めるために用いる係数はどれか。",
    "options": [
      "年金現価係数16.35143",
      "資本回収係数0.06116",
      "現価係数0.67297"
    ],
    "answer": 1,
    "explanation": "現在元本から毎年の受取額を求めるため資本回収係数です。年取崩額は10,000,000×0.06116＝611,600円。現在元本を年金現価係数で割る関係とも対応しますが、本問では提示された資本回収係数を使います。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202605",
        "questionNumber": 4,
        "relationship": "related_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2026年5月公表分 問4",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_a.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。"
      }
    ],
    "examAlignment": "scope_supplement",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "10000000*0.06116",
      "value": 611600,
      "unit": "円",
      "target": "explanation"
    },
    "practiceGroup": "coefficient",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_4_1",
    "chapterId": "ch9",
    "unitId": "u9_4",
    "type": "mcq",
    "question": "資料の生命保険で病気により死亡した。入院・手術はなく、各契約は有効で支払要件を満たす。保険金の合計はいくらか。",
    "options": [
      "3,800万円",
      "300万円",
      "2,300万円"
    ],
    "answer": 2,
    "explanation": "病気の死亡は終身300万円＋定期特約2,000万円＝2,300万円です。災害死亡の条件を満たさないため災害割増1,500万円は加算しません。証券から原因に応じた保障だけを選びます。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202405",
        "questionNumber": 12,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2024年5月公表分 問12",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_a.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "materials": {
      "caption": "資料（記載のない条件・税・費用は考慮しない）",
      "columns": [
        "項目",
        "内容"
      ],
      "rows": [
        [
          "終身主契約・死亡保険金",
          "300万円"
        ],
        [
          "定期保険特約・死亡保険金",
          "2,000万円"
        ],
        [
          "災害割増特約",
          "事故死亡時のみ1,500万円"
        ]
      ]
    },
    "calculationCheck": {
      "formula": "300+2000",
      "value": 2300,
      "unit": "万円",
      "target": "answer"
    },
    "practiceGroup": "policy",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_4_2",
    "chapterId": "ch9",
    "unitId": "u9_4",
    "type": "mcq",
    "question": "資料の医療保険で、対象の入院68日と、給付倍率20倍の対象手術1回があった。今回以前の受取はなく、他の給付はない。合計はいくらか。",
    "options": [
      "56万円",
      "61.6万円",
      "42万円"
    ],
    "answer": 0,
    "explanation": "入院は60日の支払限度を適用し7,000×60＝420,000円。手術は7,000×20＝140,000円。合計560,000円＝56万円です。実入院68日をそのまま使う61.6万円ではありません。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202505",
        "questionNumber": 12,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2025年5月公表分 問12",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_a.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "materials": {
      "caption": "資料（記載のない条件・税・費用は考慮しない）",
      "columns": [
        "項目",
        "内容"
      ],
      "rows": [
        [
          "入院日額",
          "7,000円、初日から支給"
        ],
        [
          "1入院の限度",
          "60日"
        ],
        [
          "手術給付金",
          "日額×20倍"
        ]
      ]
    },
    "calculationCheck": {
      "formula": "(7000*Math.min(68,60)+7000*20)/10000",
      "value": 56,
      "unit": "万円",
      "target": "answer"
    },
    "practiceGroup": "policy",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_4_3",
    "chapterId": "ch9",
    "unitId": "u9_4",
    "type": "mcq",
    "question": "入院5日目から支払う契約で、病気による入院25日と給付倍率40倍の手術1回があった。日額6,000円で他の制限・給付はない。受取合計はいくらか。",
    "options": [
      "150,000円",
      "366,000円",
      "390,000円"
    ],
    "answer": 1,
    "explanation": "入院給付は最初の4日間を除き（25－4）×6,000＝126,000円。手術240,000円を加え366,000円です。「5日目から」と「5日以上入院なら初日から」は違う条件なので、資料の表現を読み分けます。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202405",
        "questionNumber": 12,
        "relationship": "related_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2024年5月公表分 問12",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_a.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。"
      }
    ],
    "examAlignment": "scope_supplement",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "(25-4)*6000+6000*40",
      "value": 366000,
      "unit": "円",
      "target": "answer"
    },
    "practiceGroup": "policy",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_4_4",
    "chapterId": "ch9",
    "unitId": "u9_4",
    "type": "mcq",
    "question": "初めてがんと診断され20日入院し、手術20倍を1回受け、その後交通事故で死亡した。資料の給付は全て併給でき、支払条件を満たす。合計はいくらか。",
    "options": [
      "192万円",
      "112万円",
      "120万円"
    ],
    "answer": 2,
    "explanation": "診断80万円＋入院8,000×20＝16万円＋手術8,000×20＝16万円＋非がん死亡8,000×10＝8万円、計120万円。死亡原因が交通事故なので、がん死亡の100倍は使いません。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202605",
        "questionNumber": 12,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2026年5月公表分 問12",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_a.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "materials": {
      "caption": "資料（記載のない条件・税・費用は考慮しない）",
      "columns": [
        "項目",
        "内容"
      ],
      "rows": [
        [
          "がん診断給付",
          "初回80万円"
        ],
        [
          "がん入院日額",
          "8,000円、初日から"
        ],
        [
          "手術給付",
          "日額の20倍"
        ],
        [
          "死亡給付",
          "がん死亡は日額100倍、がん以外は10倍"
        ]
      ]
    },
    "calculationCheck": {
      "formula": "80+(8000*20+8000*20+8000*10)/10000",
      "value": 120,
      "unit": "万円",
      "target": "answer"
    },
    "practiceGroup": "policy",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_4_5",
    "chapterId": "ch9",
    "unitId": "u9_4",
    "type": "mcq",
    "question": "資料から遺族の必要保障額を求める。現時点で死亡した場合に必要な追加死亡保障額はいくらか。税・社会保険料は生活費に含まれる。",
    "options": [
      "2,200万円",
      "2,800万円",
      "3,600万円"
    ],
    "answer": 0,
    "explanation": "支出9,000＋3,300＋900＋200＝13,400万円。収入7,200＋2,600＋800＝10,600万円。さらに金融資産600万円を充当し、13,400－10,600－600＝2,200万円です。死亡退職金は収入側に置きます。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202605",
        "questionNumber": 13,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2026年5月公表分 問13",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_a.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "materials": {
      "caption": "資料（記載のない条件・税・費用は考慮しない）",
      "columns": [
        "項目",
        "内容"
      ],
      "rows": [
        [
          "将来生活費・住居費",
          "9,000万円・3,300万円"
        ],
        [
          "教育費・葬式費用",
          "900万円・200万円"
        ],
        [
          "公的年金・給与等",
          "7,200万円・2,600万円"
        ],
        [
          "死亡退職金・充当金融資産",
          "800万円・600万円"
        ]
      ]
    },
    "calculationCheck": {
      "formula": "9000+3300+900+200-7200-2600-800-600",
      "value": 2200,
      "unit": "万円",
      "target": "answer"
    },
    "practiceGroup": "protection",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_5_1",
    "chapterId": "ch9",
    "unitId": "u9_5",
    "type": "mcq",
    "question": "資料の株式のPERとPBRの組合せはどれか。",
    "options": [
      "PER0.083倍・PBR0.667倍",
      "PER12倍・PBR1.5倍",
      "PER1.5倍・PBR12倍"
    ],
    "answer": 1,
    "explanation": "PER＝1,800÷150＝12倍、PBR＝1,800÷1,200＝1.5倍です。PERは利益、PBRは純資産を分母に使います。逆数にした選択肢にも注意しましょう。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202605",
        "questionNumber": 6,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2026年5月公表分 問6",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_a.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "materials": {
      "caption": "資料（記載のない条件・税・費用は考慮しない）",
      "columns": [
        "項目",
        "内容"
      ],
      "rows": [
        [
          "株価",
          "1,800円"
        ],
        [
          "1株純利益",
          "150円"
        ],
        [
          "1株純資産",
          "1,200円"
        ]
      ]
    },
    "calculationCheck": {
      "formula": "1800/150",
      "value": 12,
      "unit": "倍",
      "target": "answer"
    },
    "practiceGroup": "stock",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
      "https://www.jpx.co.jp/glossary/ka/73.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_5_2",
    "chapterId": "ch9",
    "unitId": "u9_5",
    "type": "mcq",
    "question": "2銘柄の資料から判断した記述として、正しいものはどれか。各指標だけで比較するものとする。",
    "options": [
      "PBRではB社の方が割安である",
      "配当利回りはB社の方が高い",
      "PERではB社の方が割安である"
    ],
    "answer": 2,
    "explanation": "PERはA15倍・B10倍でBが低い。PBRはA1.5倍・B2倍でAが低い。配当利回りはA2%・B1.5%です。株価そのものが高いBが、全ての指標でも割高になるわけではありません。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202405",
        "questionNumber": 6,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2024年5月公表分 問6",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_a.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "materials": {
      "caption": "資料（記載のない条件・税・費用は考慮しない）",
      "columns": [
        "項目",
        "内容"
      ],
      "rows": [
        [
          "A社・株価／EPS／BPS／年配当",
          "1,500円／100円／1,000円／30円"
        ],
        [
          "B社・株価／EPS／BPS／年配当",
          "3,000円／300円／1,500円／45円"
        ]
      ]
    },
    "calculationCheck": {
      "formula": "3000/300",
      "value": 10,
      "unit": "倍",
      "target": "explanation"
    },
    "practiceGroup": "stock",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_5_3",
    "chapterId": "ch9",
    "unitId": "u9_5",
    "type": "mcq",
    "question": "株価3,000円、1株純利益240円、1株年配当60円の会社の配当性向と配当利回りの組合せはどれか。",
    "options": [
      "配当性向25%・利回り2%",
      "配当性向2%・利回り25%",
      "配当性向40%・利回り5%"
    ],
    "answer": 0,
    "explanation": "配当性向＝60÷240×100＝25%、配当利回り＝60÷3,000×100＝2%。両方の分子は配当ですが、分母が利益か株価かで違います。資料のBPSなど不要な数値があっても使いません。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202505",
        "questionNumber": 6,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2025年5月公表分 問6",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_a.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      },
      {
        "paperId": "g3_202605",
        "questionNumber": 42,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問42",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "60/240*100",
      "value": 25,
      "unit": "%",
      "target": "answer"
    },
    "practiceGroup": "stock",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf",
      "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_5_4",
    "chapterId": "ch9",
    "unitId": "u9_5",
    "type": "mcq",
    "question": "1株純利益180円、1株純資産1,500円、株価2,700円の会社のROEはいくらか。",
    "options": [
      "6.67%",
      "12%",
      "15倍"
    ],
    "answer": 1,
    "explanation": "ROE＝180÷1,500×100＝12%。株価2,700円は計算に使いません。株価÷利益で求めるPER15倍、利益÷株価の6.67%と混同しないよう、指標の定義と単位を確認します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 42,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問42",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "180/1500*100",
      "value": 12,
      "unit": "%",
      "target": "answer"
    },
    "practiceGroup": "stock",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_5_5",
    "chapterId": "ch9",
    "unitId": "u9_5",
    "type": "mcq",
    "question": "会社の当期純利益1億2,000万円、発行済株式数60万株、株価1,800円とする。自己株式等の調整はない。PERはいくらか。",
    "options": [
      "15倍",
      "200倍",
      "9倍"
    ],
    "answer": 2,
    "explanation": "1株純利益＝120,000,000円÷600,000株＝200円。PER＝1,800÷200＝9倍です。まず会社全体の利益を1株当たりに直す必要があります。万円・万株の単位をそろえて計算します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202605",
        "questionNumber": 6,
        "relationship": "related_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2026年5月公表分 問6",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_a.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。"
      }
    ],
    "examAlignment": "scope_supplement",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "1800/(120000000/600000)",
      "value": 9,
      "unit": "倍",
      "target": "answer"
    },
    "practiceGroup": "stock",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jpx.co.jp/glossary/ka/73.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_6_1",
    "chapterId": "ch9",
    "unitId": "u9_6",
    "type": "mcq",
    "question": "資料の土地に建てる建物の建築面積の最高限度はいくらか。緩和や他の制限はない。",
    "options": [
      "132㎡",
      "440㎡",
      "528㎡"
    ],
    "answer": 0,
    "explanation": "建築面積には建蔽率を使い、220×60%＝132㎡です。容積率や前面道路による制限は主に延べ面積の計算です。求めるのが建築面積か延べ面積かを最初に確認します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202605",
        "questionNumber": 9,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2026年5月公表分 問9",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_a.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "materials": {
      "caption": "資料（記載のない条件・税・費用は考慮しない）",
      "columns": [
        "項目",
        "内容"
      ],
      "rows": [
        [
          "敷地",
          "220㎡"
        ],
        [
          "指定建蔽率・指定容積率",
          "60%・200%"
        ],
        [
          "前面道路幅員・容積率法定乗数",
          "6m・0.4"
        ]
      ]
    },
    "calculationCheck": {
      "formula": "220*0.6",
      "value": 132,
      "unit": "㎡",
      "target": "answer"
    },
    "practiceGroup": "building",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_6_2",
    "chapterId": "ch9",
    "unitId": "u9_6",
    "type": "mcq",
    "question": "資料の土地に建てる延べ面積の最高限度はいくらか。床面積不算入等はない。",
    "options": [
      "210㎡",
      "1,260㎡",
      "1,400㎡"
    ],
    "answer": 1,
    "explanation": "道路幅員による容積率は6×0.6＝3.6＝360%。指定400%より小さい360%を使い、350×3.6＝1,260㎡です。建蔽率60%や指定容積率だけを使う誤りに注意します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202405",
        "questionNumber": 9,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2024年5月公表分 問9",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_a.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "materials": {
      "caption": "資料（記載のない条件・税・費用は考慮しない）",
      "columns": [
        "項目",
        "内容"
      ],
      "rows": [
        [
          "敷地",
          "350㎡"
        ],
        [
          "指定建蔽率・指定容積率",
          "60%・400%"
        ],
        [
          "前面道路幅員・法定乗数",
          "6m・0.6"
        ]
      ]
    },
    "calculationCheck": {
      "formula": "350*Math.min(4,6*0.6)",
      "value": 1260,
      "unit": "㎡",
      "target": "answer"
    },
    "practiceGroup": "building",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_6_3",
    "chapterId": "ch9",
    "unitId": "u9_6",
    "type": "mcq",
    "question": "資料の2項道路の後退部分を除いた敷地に、指定建蔽率60%を適用する。建築面積の最高限度はいくらか。道路中心は現況の中央で、他の制限・緩和はない。",
    "options": [
      "120㎡",
      "108㎡",
      "114㎡"
    ],
    "answer": 2,
    "explanation": "後退距離（4－3）÷2＝0.5m、後退部分20×0.5＝10㎡。有効敷地200－10＝190㎡に60%を掛け114㎡です。敷地全部200㎡に率を掛ける120㎡ではありません。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202505",
        "questionNumber": 9,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2025年5月公表分 問9",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_a.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "materials": {
      "caption": "資料（記載のない条件・税・費用は考慮しない）",
      "columns": [
        "項目",
        "内容"
      ],
      "rows": [
        [
          "登記上の敷地",
          "200㎡"
        ],
        [
          "道路に接する間口",
          "20m"
        ],
        [
          "現況道路・必要幅員",
          "3m・4m"
        ],
        [
          "指定建蔽率",
          "60%"
        ]
      ]
    },
    "calculationCheck": {
      "formula": "(200-20*(4-3)/2)*0.6",
      "value": 114,
      "unit": "㎡",
      "target": "answer"
    },
    "practiceGroup": "building",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_6_4",
    "chapterId": "ch9",
    "unitId": "u9_6",
    "type": "mcq",
    "question": "敷地300㎡、指定容積率200%、前面道路8m・法定乗数0.4の場合、延べ面積の最高限度はいくらか。緩和・不算入等はない。",
    "options": [
      "600㎡",
      "960㎡",
      "1,200㎡"
    ],
    "answer": 0,
    "explanation": "道路制限は8×0.4＝320%ですが、指定容積率200%の方が小さいため、300×2＝600㎡です。常に道路幅員側だけを使うのではなく、指定容積率と比較する手順が必要です。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202405",
        "questionNumber": 9,
        "relationship": "related_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2024年5月公表分 問9",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_a.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。"
      }
    ],
    "examAlignment": "scope_supplement",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "300*Math.min(2,8*0.4)",
      "value": 600,
      "unit": "㎡",
      "target": "answer"
    },
    "practiceGroup": "building",
    "lawsDate": null,
    "sourceUrls": [
      "https://laws.e-gov.go.jp/api/2/law_data/325AC0000000201_20260401_507AC0000000068"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_6_5",
    "chapterId": "ch9",
    "unitId": "u9_6",
    "type": "mcq",
    "question": "一つの敷地が建蔽率の異なる地域にまたがる。A地域部分100㎡・建蔽率60%、B地域部分200㎡・建蔽率80%とする。加重計算による建築面積の最高限度はいくらか。緩和等はない。",
    "options": [
      "180㎡",
      "220㎡",
      "240㎡"
    ],
    "answer": 1,
    "explanation": "各部分の許容面積を足し、100×0.6＋200×0.8＝220㎡です。敷地が広い方の80%を全体に適用した240㎡や、率を単純平均した計算とは異なります。公開3セットと同一の条件ではなく、範囲内の補強問題です。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202605",
        "questionNumber": 9,
        "relationship": "related_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2026年5月公表分 問9",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_a.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。"
      }
    ],
    "examAlignment": "scope_supplement",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "100*0.6+200*0.8",
      "value": 220,
      "unit": "㎡",
      "target": "answer"
    },
    "practiceGroup": "building",
    "lawsDate": null,
    "sourceUrls": [
      "https://laws.e-gov.go.jp/api/2/law_data/325AC0000000201_20260401_507AC0000000068"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_7_1",
    "chapterId": "ch9",
    "unitId": "u9_7",
    "type": "mcq",
    "question": "遺産6,000万円、相続人は妻、存命の子1人、先に死亡した別の子の子2人。法定相続分で分けると代襲する孫1人の額はいくらか。全員被相続人の血族とする。",
    "options": [
      "1,500万円",
      "500万円",
      "750万円"
    ],
    "answer": 2,
    "explanation": "妻1/2、子のグループ1/2を2系統に分け、亡くなった子の1/4を孫2人で分けるので各1/8です。6,000×1/8＝750万円。孫を存命の子と最初から同列3人で割らないようにします。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202605",
        "questionNumber": 18,
        "relationship": "related_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2026年5月公表分 問18",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_a.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。"
      }
    ],
    "examAlignment": "scope_supplement",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "6000*0.5/2/2",
      "value": 750,
      "unit": "万円",
      "target": "answer"
    },
    "practiceGroup": "inheritance_share",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4132.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_7_2",
    "chapterId": "ch9",
    "unitId": "u9_7",
    "type": "mcq",
    "question": "遺産6,000万円。妻、長男（放棄）、長女（存命）、次女（相続前死亡、その子1人）がいる。長男にも子がいる。法定相続分で、次女の子の取得額はいくらか。",
    "options": [
      "1,500万円",
      "750万円",
      "1,000万円"
    ],
    "answer": 0,
    "explanation": "放棄した長男は初めから相続人でなかったとされ、長男の子は放棄を理由に代襲しません。妻1/2、長女1/4、次女の子1/4なので1,500万円です。放棄と死亡の違いがポイントです。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202505",
        "questionNumber": 18,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2025年5月公表分 問18",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_a.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      },
      {
        "paperId": "j3_202605",
        "questionNumber": 18,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2026年5月公表分 問18",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_a.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "6000/4",
      "value": 1500,
      "unit": "万円",
      "target": "answer"
    },
    "practiceGroup": "inheritance_share",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
      "https://laws.e-gov.go.jp/api/2/law_data/129AC0000000089_20260401_506AC0000000033"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_7_3",
    "chapterId": "ch9",
    "unitId": "u9_7",
    "type": "mcq",
    "question": "子のない被相続人に、妻、父（死亡）、母（放棄）、同父母の兄と姉がいる。ほかの直系尊属はいない。法定相続分の組合せはどれか。",
    "options": [
      "妻2/3・兄姉各1/6",
      "妻3/4・兄姉各1/8",
      "妻1/2・兄姉各1/4"
    ],
    "answer": 1,
    "explanation": "父は死亡し、母は放棄、他の直系尊属もいないため兄姉が相続人になります。妻3/4、兄姉全体1/4なので各1/8。相続順位の上の人が放棄した場合、次順位の人を確認します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202405",
        "questionNumber": 18,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2024年5月公表分 問18",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_a.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "practiceGroup": "inheritance_share",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4132.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_7_4",
    "chapterId": "ch9",
    "unitId": "u9_7",
    "type": "mcq",
    "question": "被相続人には離婚した元妻と子2人、存命の父母がいる。再婚はしていない。相続人と法定相続分の組合せはどれか。",
    "options": [
      "父母各1/4・子各1/4",
      "元妻1/2・子各1/4",
      "子各1/2で、元妻と父母は相続人にならない"
    ],
    "answer": 2,
    "explanation": "元妻は配偶者としての相続人ではありません。子が第1順位なので父母は相続人にならず、子2人で全体を等分して各1/2です。親子関係は離婚によってなくなるわけではありません。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 57,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問57",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "practiceGroup": "inheritance_share",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4132.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_7_5",
    "chapterId": "ch9",
    "unitId": "u9_7",
    "type": "mcq",
    "question": "被相続人に子・孫はなく、妻と父、妹がいる。母は死亡している。法定相続分として適切なものはどれか。",
    "options": [
      "妻2/3・父1/3で、妹は相続人にならない",
      "妻3/4・妹1/4",
      "妻1/2・父1/4・妹1/4"
    ],
    "answer": 0,
    "explanation": "第2順位の父が存命なので第3順位の妹は相続人になりません。妻2/3、直系尊属全体1/3で父がすべて受けます。親族図に書かれた人全員が相続人になるわけではありません。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 57,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問57",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "practiceGroup": "inheritance_share",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4132.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_8_1",
    "chapterId": "ch9",
    "unitId": "u9_8",
    "type": "mcq",
    "question": "資料の投資信託を30万口購入する。購入時手数料は購入代金に加算し、税込率で計算する。支払総額はいくらか。",
    "options": [
      "435,000円",
      "444,570円",
      "451,095円"
    ],
    "answer": 1,
    "explanation": "代金14,500×30＝435,000円、手数料435,000×2.2%＝9,570円、合計444,570円。年率の信託報酬を購入代金へさらに足す451,095円ではありません。1万口当たりの表示単位も確認します。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202605",
        "questionNumber": 7,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2026年5月公表分 問7",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_a.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "materials": {
      "caption": "資料（記載のない条件・税・費用は考慮しない）",
      "columns": [
        "項目",
        "内容"
      ],
      "rows": [
        [
          "基準価額（1万口当たり）",
          "14,500円"
        ],
        [
          "購入口数",
          "30万口"
        ],
        [
          "購入時手数料",
          "税込2.2%"
        ],
        [
          "信託報酬",
          "年1.5%"
        ]
      ]
    },
    "calculationCheck": {
      "formula": "14500*30*1.022",
      "value": 444570,
      "unit": "円",
      "target": "answer"
    },
    "practiceGroup": "fund",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_8_2",
    "chapterId": "ch9",
    "unitId": "u9_8",
    "type": "mcq",
    "question": "資料の固定利付債の応募者利回り（単利・年率）はどれか。税等を無視し、小数点以下第3位を四捨五入する。",
    "options": [
      "1.50%",
      "1.59%",
      "1.49%"
    ],
    "answer": 2,
    "explanation": "｛1.6＋（100－100.5）÷5｝÷100.5×100＝約1.49%。償還差損を1年当たりに直し、投資した発行価格で割ります。直接利回り1.59%や、分母を額面100にした1.50%ではありません。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202605",
        "questionNumber": 8,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2026年5月公表分 問8",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_a.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "materials": {
      "caption": "資料（記載のない条件・税・費用は考慮しない）",
      "columns": [
        "項目",
        "内容"
      ],
      "rows": [
        [
          "額面100円当たり発行価格",
          "100.5円"
        ],
        [
          "表面利率",
          "年1.6%"
        ],
        [
          "償還期限",
          "5年"
        ]
      ]
    },
    "calculationCheck": {
      "formula": "Math.round((1.6+(100-100.5)/5)/100.5*10000)/100",
      "value": 1.49,
      "unit": "%",
      "target": "answer"
    },
    "practiceGroup": "bond_fx",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
      "https://www.jpx.co.jp/glossary/sa/519.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_8_3",
    "chapterId": "ch9",
    "unitId": "u9_8",
    "type": "mcq",
    "question": "毎回3万円を4回、株価1,000円・1,500円・1,200円・2,000円で定額購入した。単元未満株の購入が可能とし、費用なし。平均取得単価はどれか。小数点以下第3位四捨五入。",
    "options": [
      "1,333.33円",
      "1,425円",
      "1,500円"
    ],
    "answer": 0,
    "explanation": "買付株数は30株・20株・25株・15株の計90株。総額120,000÷90＝1,333.33円。株価の単純平均1,425円ではなく、支払総額を買付総株数で割ります。価格の低い回に多く買うのが定額購入です。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202505",
        "questionNumber": 8,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2025年5月公表分 問8",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_a.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "Math.round(120000/(30000/1000+30000/1500+30000/1200+30000/2000)*100)/100",
      "value": 1333.33,
      "unit": "円",
      "target": "answer"
    },
    "practiceGroup": "bond_fx",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_8_4",
    "chapterId": "ch9",
    "unitId": "u9_8",
    "type": "mcq",
    "question": "1万米ドルを年2%で1年運用した外貨預金の元利合計を、資料の満期時相場で円へ戻す。税等を考慮しない円受取額はいくらか。",
    "options": [
      "1,428,000円",
      "1,407,600円",
      "1,417,800円"
    ],
    "answer": 1,
    "explanation": "外貨元利合計10,000×1.02＝10,200ドルを、銀行の買相場TTB138円で円転するので1,407,600円です。仲値139円やTTS140円ではありません。為替の売買は銀行側からの名称です。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202405",
        "questionNumber": 8,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2024年5月公表分 問8",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_a.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "materials": {
      "caption": "資料（記載のない条件・税・費用は考慮しない）",
      "columns": [
        "項目",
        "内容"
      ],
      "rows": [
        [
          "満期時TTS",
          "140円／米ドル"
        ],
        [
          "満期時TTM",
          "139円／米ドル"
        ],
        [
          "満期時TTB",
          "138円／米ドル"
        ]
      ]
    },
    "calculationCheck": {
      "formula": "10000*1.02*138",
      "value": 1407600,
      "unit": "円",
      "target": "answer"
    },
    "practiceGroup": "bond_fx",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_8_5",
    "chapterId": "ch9",
    "unitId": "u9_8",
    "type": "mcq",
    "question": "投資信託の費用について、適切なものはどれか。",
    "options": [
      "信託財産留保額は全ての投信で購入時に必ず徴収される",
      "ノーロードなら保有中の信託報酬も必ず0円",
      "信託報酬は通常信託財産から日々差し引かれる"
    ],
    "answer": 2,
    "explanation": "信託報酬は通常、信託財産から毎日差し引かれます。ノーロードは購入時手数料がないことを意味し、信託報酬までゼロとは限りません。留保額は一般に換金時に徴収され、徴収しない投信もあります。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202505",
        "questionNumber": 7,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2025年5月公表分 問7",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_a.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "practiceGroup": "fund",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_9_1",
    "chapterId": "ch9",
    "unitId": "u9_9",
    "type": "mcq",
    "question": "公的な土地評価の所管と水準の説明で、適切なものはどれか。",
    "options": [
      "相続税路線価は国税庁が定め、公示価格の80%程度が目安",
      "固定資産税評価額は国税庁が定め、公示価格の90%程度が目安",
      "公示価格は市町村が定め、相続税評価にだけ使う"
    ],
    "answer": 0,
    "explanation": "相続税路線価は国税庁・公示価格の80%程度、土地の固定資産税評価額は市町村等・70%程度が目安です。公示価格は国土交通省土地鑑定委員会が公示し、一般取引等の指標になります。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202405",
        "questionNumber": 10,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2024年5月公表分 問10",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_a.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "practiceGroup": "property",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
      "https://www.mlit.go.jp/totikensangyo/totikensangyo_fr4_000043.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_9_2",
    "chapterId": "ch9",
    "unitId": "u9_9",
    "type": "mcq",
    "question": "土地登記で、所在・地積、所有権移転、抵当権設定を確認する区分の組合せはどれか。",
    "options": [
      "表題部・乙区・甲区",
      "表題部・甲区・乙区",
      "甲区・乙区・表題部"
    ],
    "answer": 1,
    "explanation": "物理的な状況は表題部、所有権は甲区、所有権以外の権利は乙区です。抵当権設定と所有権移転は別の権利の記録です。実技では表の穴埋めや記録の読取りとして出題されています。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202505",
        "questionNumber": 10,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2025年5月公表分 問10",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_a.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "practiceGroup": "property",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf",
      "https://laws.e-gov.go.jp/api/2/law_data/416AC0000000123_20260401_506AC0000000030"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_9_3",
    "chapterId": "ch9",
    "unitId": "u9_9",
    "type": "mcq",
    "question": "対象不動産が将来生む純収益等の現在価値に着目する鑑定評価手法はどれか。",
    "options": [
      "原価法",
      "取引事例比較法",
      "収益還元法"
    ],
    "answer": 2,
    "explanation": "収益還元法です。原価法は再調達原価と減価修正、取引事例比較法は周辺の取引事例等の補正・比較です。単語だけでなく、費用・市場取引・収益のどこを見る方法かを整理します。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202605",
        "questionNumber": 10,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2026年5月公表分 問10",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_a.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "practiceGroup": "property",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_9_4",
    "chapterId": "ch9",
    "unitId": "u9_9",
    "type": "mcq",
    "question": "普通借家と定期借家の比較として、適切なものはどれか。",
    "options": [
      "所定の方式・説明要件を満たす定期借家は1年未満も設定でき、更新なく期間満了で終了する",
      "定期借家の契約は公正証書だけに限られる",
      "普通借家で6か月と定めれば必ず6か月で終了する"
    ],
    "answer": 0,
    "explanation": "普通借家の1年未満は期間の定めなしとみなされます。定期借家は1年未満も設定でき、更新がありません。契約は所定の書面等で行い、公正証書に限定はされません。更新がない旨等の事前説明にも要件があります。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202605",
        "questionNumber": 11,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2026年5月公表分 問11",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_a.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "practiceGroup": "property",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
      "https://laws.e-gov.go.jp/api/2/law_data/403AC0000000090_20230614_505AC0000000053"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_9_5",
    "chapterId": "ch9",
    "unitId": "u9_9",
    "type": "mcq",
    "question": "定期借地権の種類・期間・契約形式の組合せとして適切なものはどれか。",
    "options": [
      "一般定期借地権も事業用も公正証書以外を一切認めない",
      "一般定期借地権は50年以上で所定書面等、事業用定期借地権等は10年以上50年未満で公正証書",
      "一般定期借地権は30年以上で口頭のみ、事業用は50年以上"
    ],
    "answer": 1,
    "explanation": "一般定期借地権と事業用定期借地権等で期間・形式が異なります。建物譲渡特約付借地権は30年以上など、別類型もあります。事業用は居住用建物を対象としない点も確認します。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202405",
        "questionNumber": 11,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2024年5月公表分 問11",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_a.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "practiceGroup": "property",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
      "https://laws.e-gov.go.jp/api/2/law_data/403AC0000000090_20230614_505AC0000000053"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_10_1",
    "chapterId": "ch9",
    "unitId": "u9_10",
    "type": "mcq",
    "question": "退職後の協会けんぽの任意継続について、原則正しい組合せはどれか。",
    "options": [
      "退職前継続2か月以上・30日以内申出・最長2年",
      "退職前継続3か月以上・30日以内申出・最長3年",
      "退職前継続2か月以上・翌日から20日以内申出・最長2年"
    ],
    "answer": 2,
    "explanation": "原則2か月・20日・2年です。退職の翌日からの期限内に申出が必要です。任意継続では事業主負担がなくなるため保険料の自己負担も変わります。三つの数字を入れ替える選択肢に注意します。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202605",
        "questionNumber": 5,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2026年5月公表分 問5",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_a.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "practiceGroup": "social",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.kyoukaikenpo.or.jp/g3/sb3270/r147/"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_10_2",
    "chapterId": "ch9",
    "unitId": "u9_10",
    "type": "mcq",
    "question": "1962年4月2日以後生まれの人について、老齢基礎年金を24か月繰り上げる場合の減額率と、48か月繰り下げる場合の増額率の組合せはどれか。",
    "options": [
      "9.6%減・33.6%増",
      "12%減・33.6%増",
      "9.6%減・24%増"
    ],
    "answer": 0,
    "explanation": "繰上げは0.4%×24＝9.6%減、繰下げは0.7%×48＝33.6%増です。適用生年月日を確認し、二つの月当たり率を入れ替えないようにします。原則として増減率は生涯続きます。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202505",
        "questionNumber": 5,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2025年5月公表分 問5",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_a.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "0.4*24",
      "value": 9.6,
      "unit": "%",
      "target": "answer"
    },
    "practiceGroup": "social",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.nenkin.go.jp/service/jukyu/roureinenkin/kuriage-kurisage/20140421-01.html",
      "https://www.nenkin.go.jp/service/jukyu/roureinenkin/kuriage-kurisage/20140421-02.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_10_3",
    "chapterId": "ch9",
    "unitId": "u9_10",
    "type": "mcq",
    "question": "遺族基礎年金の対象となる子の年齢要件として適切なものはどれか。未婚等の他の要件を満たす。",
    "options": [
      "原則18歳未満、障害の有無に関係なく20歳以上も可",
      "原則18歳到達年度末まで、1級・2級の障害状態では20歳未満",
      "原則20歳到達年度末まで、障害時は23歳未満"
    ],
    "answer": 1,
    "explanation": "原則18歳になった年度の3月31日まで、一定の障害状態では20歳未満です。「18歳未満」と「18歳到達年度末まで」は期間が違います。遺族となる配偶者に子があるかという条件にも関係します。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202405",
        "questionNumber": 5,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2024年5月公表分 問5",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_a.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "practiceGroup": "social",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.nenkin.go.jp/service/jukyu/izokunenkin/jukyu-yoken/20150401-03.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_10_4",
    "chapterId": "ch9",
    "unitId": "u9_10",
    "type": "mcq",
    "question": "一般条件の車両保険、対人・対物賠償保険に加入する運転者の事故で、一般に補償対象となるものはどれか。免責等の追加条件はない。",
    "options": [
      "対物賠償で、自分の自宅車庫を壊した損害",
      "対人賠償で、自分の配偶者を負傷させた損害",
      "車両保険で、単独事故により自分の車が破損した損害"
    ],
    "answer": 2,
    "explanation": "一般条件の車両保険では通常、単独事故による車両損害も対象です。対物で自分の物、対人で配偶者等への損害は一般に対象外です。誰のどの損害を、どの保険で補うかを資料から判断します。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202605",
        "questionNumber": 14,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2026年5月公表分 問14",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_a.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "practiceGroup": "liability",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
      "https://www.sonpo.or.jp/insurance/car/index.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_10_5",
    "chapterId": "ch9",
    "unitId": "u9_10",
    "type": "mcq",
    "question": "個人賠償責任保険の一般的な対象外として、適切なものはどれか。",
    "options": [
      "勤務先の営業車を運転して他人の塀を壊した",
      "日常の買物中、他人の商品を誤って壊した",
      "自転車で歩行者にけがをさせた"
    ],
    "answer": 0,
    "explanation": "自動車の使用や業務に関する賠償責任は一般に対象外です。日常生活の他人への賠償と、業務・自動車の賠償を区別します。自転車事故は対象となる場合がありますが、家族範囲等の条件は契約で確認します。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202505",
        "questionNumber": 14,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2025年5月公表分 問14",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_a.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "practiceGroup": "liability",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf",
      "https://www.sonpo.or.jp/insurance/compensation/index.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_11_1",
    "chapterId": "ch9",
    "unitId": "u9_11",
    "type": "mcq",
    "question": "資料の所得税額はいくらか。課税所得に税率20%・速算控除額427,500円を使い、復興特別所得税等は考慮しない。",
    "options": [
      "1,440,000円",
      "712,500円",
      "1,012,500円"
    ],
    "answer": 1,
    "explanation": "課税所得＝720－150＝570万円。5,700,000×20%－427,500＝712,500円です。不動産所得は必要経費・青色控除後なので再度引きません。所得控除、税率、速算控除の順を守ります。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202605",
        "questionNumber": 15,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2026年5月公表分 問15",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_a.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "materials": {
      "caption": "資料（記載のない条件・税・費用は考慮しない）",
      "columns": [
        "項目",
        "内容"
      ],
      "rows": [
        [
          "不動産所得",
          "720万円（経費・青色控除後）"
        ],
        [
          "所得控除合計",
          "150万円"
        ],
        [
          "税額控除",
          "なし"
        ]
      ]
    },
    "calculationCheck": {
      "formula": "(7200000-1500000)*0.2-427500",
      "value": 712500,
      "unit": "円",
      "target": "answer"
    },
    "practiceGroup": "tax_income",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2260.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_11_2",
    "chapterId": "ch9",
    "unitId": "u9_11",
    "type": "mcq",
    "question": "2025年分の新契約の一般生命保険料63,000円、介護医療保険料26,000円を支払った。資料の速算式で求めた生命保険料控除合計はいくらか。他の契約なし。",
    "options": [
      "80,000円",
      "35,750円",
      "58,750円"
    ],
    "answer": 2,
    "explanation": "一般は63,000÷4＋20,000＝35,750円。介護医療は26,000÷2＋10,000＝23,000円。別区分なので合計58,750円です。支払額を先に合算して1本の式へ入れないようにします。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202505",
        "questionNumber": 13,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2025年5月公表分 問13",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_a.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "materials": {
      "caption": "資料（記載のない条件・税・費用は考慮しない）",
      "columns": [
        "項目",
        "内容"
      ],
      "rows": [
        [
          "年間保険料20,000円以下",
          "全額"
        ],
        [
          "20,000円超40,000円以下",
          "保険料×1/2＋10,000円"
        ],
        [
          "40,000円超80,000円以下",
          "保険料×1/4＋20,000円"
        ],
        [
          "80,000円超",
          "40,000円"
        ]
      ]
    },
    "calculationCheck": {
      "formula": "63000/4+20000+26000/2+10000",
      "value": 58750,
      "unit": "円",
      "target": "answer"
    },
    "practiceGroup": "tax_deduction",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1140.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_11_3",
    "chapterId": "ch9",
    "unitId": "u9_11",
    "type": "mcq",
    "question": "総所得金額等800万円の人の資料から通常の医療費控除額を求める。全て生計を一にする家族の分で、本人が支払った。いくらか。",
    "options": [
      "18万円",
      "38万円",
      "42万円"
    ],
    "answer": 0,
    "explanation": "対象医療費は入院32万円と子の治療8万円です。入院給付金12万円を対応する入院費から差し引き、32－12＋8－10＝18万円。美容と疾病が見つからない健診は通常対象外です。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202605",
        "questionNumber": 16,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2026年5月公表分 問16",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_a.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "materials": {
      "caption": "資料（記載のない条件・税・費用は考慮しない）",
      "columns": [
        "項目",
        "内容"
      ],
      "rows": [
        [
          "治療入院費／入院給付金",
          "32万円／12万円"
        ],
        [
          "子の治療費",
          "8万円"
        ],
        [
          "美容目的の施術",
          "20万円"
        ],
        [
          "疾病未発見の健診",
          "4万円"
        ]
      ]
    },
    "calculationCheck": {
      "formula": "32-12+8-10",
      "value": 18,
      "unit": "万円",
      "target": "answer"
    },
    "practiceGroup": "tax_deduction",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1120.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_11_4",
    "chapterId": "ch9",
    "unitId": "u9_11",
    "type": "mcq",
    "question": "一般従業員が勤続35年4か月で退職し、退職一時金3,600万円を受け取る。過去の退職金・障害退職等はない。退職所得控除は20年超で800万円＋70万円×（年数－20）。退職所得はいくらか。",
    "options": [
      "1,680万円",
      "840万円",
      "875万円"
    ],
    "answer": 1,
    "explanation": "年数の端数を切り上げ36年とし、控除800＋70×16＝1,920万円。退職所得は（3,600－1,920）÷2＝840万円です。勤続年数の切捨てと、控除後2分の1を忘れる選択肢に注意します。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202405",
        "questionNumber": 16,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2024年5月公表分 問16",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_a.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "(3600-(800+70*(36-20)))/2",
      "value": 840,
      "unit": "万円",
      "target": "answer"
    },
    "practiceGroup": "tax_income",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1420.htm",
      "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_11_5",
    "chapterId": "ch9",
    "unitId": "u9_11",
    "type": "mcq",
    "question": "資料から青色申告特別控除前の不動産所得を求める。全て当年に対応する金額で、他の収入・経費はない。いくらか。",
    "options": [
      "150万円",
      "40万円",
      "100万円"
    ],
    "answer": 2,
    "explanation": "経費は管理40＋利息30＋減価償却50＋修繕20＝140万円。240－140＝100万円です。借入元本返済60万円は経費ではなく、減価償却は現金支出がなくても費用になる点を区別します。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202505",
        "questionNumber": 11,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2025年5月公表分 問11",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_a.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "materials": {
      "caption": "資料（記載のない条件・税・費用は考慮しない）",
      "columns": [
        "項目",
        "内容"
      ],
      "rows": [
        [
          "家賃収入",
          "240万円"
        ],
        [
          "管理費・借入利息",
          "40万円・30万円"
        ],
        [
          "減価償却費・修繕費",
          "50万円・20万円"
        ],
        [
          "借入元本返済",
          "60万円"
        ]
      ]
    },
    "calculationCheck": {
      "formula": "240-40-30-50-20",
      "value": 100,
      "unit": "万円",
      "target": "answer"
    },
    "practiceGroup": "tax_income",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1370.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_11_6",
    "chapterId": "ch9",
    "unitId": "u9_11",
    "type": "mcq",
    "question": "保険期間8年の一時払養老保険で、本人が払った保険料600万円、本人が受け取る満期金820万円。他の一時所得なし。総所得金額への算入額はいくらか。",
    "options": [
      "85万円",
      "110万円",
      "170万円"
    ],
    "answer": 0,
    "explanation": "一時所得は820－600－50＝170万円で、算入額はその2分の1の85万円。受取額と利益を区別し、特別控除後の金額を半分にします。保険料負担者と受取人が違うと税目が変わるため、その条件も確認します。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202505",
        "questionNumber": 17,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2025年5月公表分 問17",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_a.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "(820-600-50)/2",
      "value": 85,
      "unit": "万円",
      "target": "answer"
    },
    "practiceGroup": "tax_income",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1490.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_11_7",
    "chapterId": "ch9",
    "unitId": "u9_11",
    "type": "mcq",
    "question": "2025年分の資料から所得税の扶養控除額の合計を求める。全員生計を一にし、他の要件も満たす。本人所得は800万円。いくらか。",
    "options": [
      "101万円",
      "121万円",
      "159万円"
    ],
    "answer": 1,
    "explanation": "20歳の子は特定扶養親族63万円、15歳の子は控除対象外、同居72歳の母は同居老親等58万円。扶養控除合計は121万円です。妻は配偶者控除等の区分で、扶養控除に足しません。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202505",
        "questionNumber": 16,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2025年5月公表分 問16",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_a.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "materials": {
      "caption": "資料（記載のない条件・税・費用は考慮しない）",
      "columns": [
        "項目",
        "内容"
      ],
      "rows": [
        [
          "妻",
          "48歳、合計所得0円"
        ],
        [
          "長女",
          "20歳、合計所得0円"
        ],
        [
          "長男",
          "15歳、合計所得0円"
        ],
        [
          "母",
          "72歳、本人と同居、合計所得0円"
        ]
      ]
    },
    "calculationCheck": {
      "formula": "63+58",
      "value": 121,
      "unit": "万円",
      "target": "answer"
    },
    "practiceGroup": "tax_deduction",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1180.htm",
      "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_11_8",
    "chapterId": "ch9",
    "unitId": "u9_11",
    "type": "mcq",
    "question": "給与所得との損益通算を求める。国内の通常の賃貸物件の不動産所得は100万円の赤字で、必要経費に土地取得借入利子25万円を含む。暗号資産の雑所得は15万円の赤字。他に特例等はない。通算できる損失はどれか。",
    "options": [
      "100万円",
      "115万円",
      "75万円"
    ],
    "answer": 2,
    "explanation": "不動産の赤字100万円から土地取得借入利子25万円を除き75万円です。雑所得の15万円は給与と通算できません。経費に入る利息でも、その土地の部分は損益通算から除く点が重要です。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202505",
        "questionNumber": 15,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2025年5月公表分 問15",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_a.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "100-25",
      "value": 75,
      "unit": "万円",
      "target": "answer"
    },
    "practiceGroup": "tax_income",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1391.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_11_9",
    "chapterId": "ch9",
    "unitId": "u9_11",
    "type": "mcq",
    "question": "青色申告制度について、原則適切な記述はどれか。",
    "options": [
      "対象は不動産・事業・山林所得で、最高65万円控除には期限内e-Tax等を含む所定要件が必要",
      "青色申告であれば事業規模や記帳に関係なく全員65万円控除",
      "給与所得と雑所得だけでも青色申告承認を受けられる"
    ],
    "answer": 0,
    "explanation": "対象は不動産・事業・山林所得です。通常の55万円控除の記帳・添付・期限等の要件に加え、e-Tax等を満たせば65万円を検討します。それ以外の青色申告者の最高10万円なども区別します。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202605",
        "questionNumber": 17,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2026年5月公表分 問17",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_a.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "practiceGroup": "tax_filing",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2072.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_11_10",
    "chapterId": "ch9",
    "unitId": "u9_11",
    "type": "mcq",
    "question": "自宅を7,000万円で売却し、取得費3,000万円、譲渡費用200万円、適用できる居住用特別控除3,000万円。他に調整なし。課税譲渡所得はいくらか。",
    "options": [
      "400万円",
      "800万円",
      "1,000万円"
    ],
    "answer": 1,
    "explanation": "7,000－3,000－200－3,000＝800万円です。土地建物の申告分離課税なので、長期でもさらに2分の1にしません。売却費用も差し引き、実額取得費と特別控除を別に扱います。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202405",
        "questionNumber": 17,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2024年5月公表分 問17",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_a.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "7000-3000-200-3000",
      "value": 800,
      "unit": "万円",
      "target": "answer"
    },
    "practiceGroup": "tax_filing",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/joto/3302.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_12_1",
    "chapterId": "ch9",
    "unitId": "u9_12",
    "type": "mcq",
    "question": "被相続人に妻と子3人がいて、子1人が相続放棄した。他の特殊事情はない。相続税の基礎控除額はいくらか。",
    "options": [
      "4,800万円",
      "5,000万円",
      "5,400万円"
    ],
    "answer": 2,
    "explanation": "税の基礎控除の人数は放棄がなかったものとして4人です。3,000＋600×4＝5,400万円。実際に財産を分ける相続人が3人でも、基礎控除の人数を3人へ減らすのではありません。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202605",
        "questionNumber": 19,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2026年5月公表分 問19",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_a.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "3000+600*4",
      "value": 5400,
      "unit": "万円",
      "target": "answer"
    },
    "practiceGroup": "inheritance_tax",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4152.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_12_2",
    "chapterId": "ch9",
    "unitId": "u9_12",
    "type": "mcq",
    "question": "父の相続人は妻と子2人。父が保険料を全額負担した死亡保険金2,800万円を妻だけが受け取った。非課税枠控除後の課税価格算入額はいくらか。",
    "options": [
      "1,300万円",
      "2,300万円",
      "800万円"
    ],
    "answer": 0,
    "explanation": "非課税枠は500万円×法定相続人3人＝1,500万円。2,800－1,500＝1,300万円です。保険金を受け取った妻1人で計算しない点がポイントです。非課税枠を他の遺産全体から引く制度でもありません。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202505",
        "questionNumber": 19,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2025年5月公表分 問19",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_a.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "2800-500*3",
      "value": 1300,
      "unit": "万円",
      "target": "answer"
    },
    "practiceGroup": "inheritance_tax",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4114.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_12_3",
    "chapterId": "ch9",
    "unitId": "u9_12",
    "type": "mcq",
    "question": "課税遺産総額1億円を、妻と子2人の法定相続分で分けて相続税の総額を計算する。資料の速算式を使った総額はいくらか。税額軽減前で、他の条件はない。",
    "options": [
      "1,100万円",
      "1,450万円",
      "1,700万円"
    ],
    "answer": 1,
    "explanation": "妻5,000万円は5,000×20%－200＝800万円。子各2,500万円は2,500×15%－50＝325万円。合計800＋325×2＝1,450万円です。実際の分割割合ではなく、法定相続分で総額を計算します。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202405",
        "questionNumber": 19,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2024年5月公表分 問19",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_a.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "materials": {
      "caption": "資料（記載のない条件・税・費用は考慮しない）",
      "columns": [
        "項目",
        "内容"
      ],
      "rows": [
        [
          "1,000万円超3,000万円以下",
          "15%・控除50万円"
        ],
        [
          "3,000万円超5,000万円以下",
          "20%・控除200万円"
        ],
        [
          "5,000万円超1億円以下",
          "30%・控除700万円"
        ]
      ]
    },
    "calculationCheck": {
      "formula": "(5000*0.2-200)+2*(2500*0.15-50)",
      "value": 1450,
      "unit": "万円",
      "target": "answer"
    },
    "practiceGroup": "inheritance_tax",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4152.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_12_4",
    "chapterId": "ch9",
    "unitId": "u9_12",
    "type": "mcq",
    "question": "贈与年1月1日現在30歳の人が祖父から400万円、祖母から200万円を暦年課税で贈与された。資料の税率を使うと贈与税額はいくらか。他の特例等はない。",
    "options": [
      "82万円",
      "90万円",
      "68万円"
    ],
    "answer": 2,
    "explanation": "合計600万円から基礎控除110万円を1回引き課税価格490万円。18歳以上で直系尊属からの贈与なので特例税率を使い、490×20%－30＝68万円です。一般税率を使う82万円と区別します。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202405",
        "questionNumber": 20,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2024年5月公表分 問20",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_a.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "materials": {
      "caption": "資料（記載のない条件・税・費用は考慮しない）",
      "columns": [
        "項目",
        "内容"
      ],
      "rows": [
        [
          "基礎控除後400万円超600万円以下・特例",
          "20%・控除30万円"
        ],
        [
          "同じ区分・一般",
          "30%・控除65万円"
        ]
      ]
    },
    "calculationCheck": {
      "formula": "(400+200-110)*0.2-30",
      "value": 68,
      "unit": "万円",
      "target": "answer"
    },
    "practiceGroup": "property_tax",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/zoyo/4408.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_12_5",
    "chapterId": "ch9",
    "unitId": "u9_12",
    "type": "mcq",
    "question": "相続で取得した自宅敷地300㎡、相続税評価額4,500万円の全体に、特定居住用宅地等の小規模宅地特例を適用できる。課税価格へ算入する価額はいくらか。",
    "options": [
      "900万円",
      "2,250万円",
      "3,600万円"
    ],
    "answer": 0,
    "explanation": "特定居住用宅地等は要件を満たせば330㎡まで80%減額です。4,500×（1－0.8）＝900万円。減額する3,600万円と、算入する900万円を逆にしないようにします。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202605",
        "questionNumber": 20,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2026年5月公表分 問20",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_a.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "4500*(1-0.8)",
      "value": 900,
      "unit": "万円",
      "target": "answer"
    },
    "practiceGroup": "property_tax",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4124.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q9_12_6",
    "chapterId": "ch9",
    "unitId": "u9_12",
    "type": "mcq",
    "question": "資料の普通借地権の相続税評価額はいくらか。奥行補正は1.0、他の調整はない。千円表示を万円へ直して答える。",
    "options": [
      "1,440万円",
      "2,160万円",
      "3,600万円"
    ],
    "answer": 1,
    "explanation": "路線価240千円＝24万円／㎡。自用地24×150＝3,600万円、借地権は3,600×60%＝2,160万円です。土地所有者の貸宅地の評価1,440万円と取り違えず、C等の記号も資料の割合表で確認します。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202505",
        "questionNumber": 20,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2025年5月公表分 問20",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_a.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "materials": {
      "caption": "資料（記載のない条件・税・費用は考慮しない）",
      "columns": [
        "項目",
        "内容"
      ],
      "rows": [
        [
          "路線価（1㎡当たり）",
          "240千円"
        ],
        [
          "地積",
          "150㎡"
        ],
        [
          "借地権割合",
          "60%"
        ]
      ]
    },
    "calculationCheck": {
      "formula": "240*1000*150*0.6/10000",
      "value": 2160,
      "unit": "万円",
      "target": "answer"
    },
    "practiceGroup": "property_tax",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/hyoka/4613.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  }
];
