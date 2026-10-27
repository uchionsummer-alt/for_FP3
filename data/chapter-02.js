// 公開過去問の分析に基づく再構成問題。照合記録はreviews.json。
const FP3_CHAPTER_02 = [
  {
    "id": "q2_1",
    "chapterId": "ch2",
    "unitId": "u2_1",
    "type": "mcq",
    "question": "生命保険会社の破綻時、高予定利率契約を除く補償の基本的な組合せはどれか。",
    "options": [
      "責任準備金等の90%",
      "死亡保険金の100%",
      "既払込保険料の90%"
    ],
    "answer": 0,
    "explanation": "補償の基準は、破綻時の責任準備金等の原則90%です。既払込保険料や約定した死亡保険金をそのまま90%保護する制度ではありません。高予定利率契約などには別の扱いがあります。",
    "revision": 3,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 36,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問36",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "previousLawsDate": "2024-04-01",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jili.or.jp/knows_learns/q_a/life_insurance/162.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_1_2",
    "chapterId": "ch2",
    "unitId": "u2_1",
    "type": "binary",
    "question": "高予定利率契約についても、例外なく責任準備金の90%が補償される。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。高予定利率契約は90%補償の例外で、過去の予定利率等に応じて補償率が下がる場合があります。「高予定利率契約を除く」という過去問の条件を省かずに覚えます。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 36,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問36",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。"
      }
    ],
    "examAlignment": "scope_supplement",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jili.or.jp/knows_learns/q_a/life_insurance/162.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_1_3",
    "chapterId": "ch2",
    "unitId": "u2_1",
    "type": "mcq",
    "question": "損害保険会社が破綻したとき、自賠責保険について損害保険契約者保護機構による補償割合は原則いくらか。",
    "options": [
      "90%",
      "100%",
      "80%"
    ],
    "answer": 1,
    "explanation": "自賠責保険の補償割合は100%です。生命保険の責任準備金等の90%、任意自動車保険などの原則80%と区別します。同じ自動車関連でも自賠責と任意保険では扱いが異なります。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 36,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問36",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.sonpohogo.or.jp/content/images/qa/a1_z1.gif"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_1_4",
    "chapterId": "ch2",
    "unitId": "u2_1",
    "type": "binary",
    "question": "損害保険会社の破綻時、地震保険については保険金や解約返戻金の100%が補償される。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。地震保険と自賠責保険は100%補償です。一般の火災保険や自動車保険の補償割合を、地震保険にもそのまま当てはめないようにします。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 36,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問36",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。"
      }
    ],
    "examAlignment": "scope_supplement",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.sonpohogo.or.jp/content/images/qa/a1_z1.gif"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_1_5",
    "chapterId": "ch2",
    "unitId": "u2_1",
    "type": "binary",
    "question": "任意自動車保険等の保護対象契約について、破綻後3か月以内に発生した保険事故の保険金は、原則80%ではなく100%補償される。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。原則80%の契約でも、破綻後3か月以内の保険事故の保険金は100%補償となります。事故発生時期の条件がある点を押さえます。解約返戻金まで常に100%になるという意味ではありません。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 36,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問36",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。"
      }
    ],
    "examAlignment": "scope_supplement",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.sonpohogo.or.jp/qa/"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_2_1",
    "chapterId": "ch2",
    "unitId": "u2_2",
    "type": "mcq",
    "question": "生命保険料の計算に用いる3つの予定基礎率の組合せとして正しいものはどれか。",
    "options": [
      "予定罹患率・予定配当率・予定物価上昇率",
      "予定死亡率・予定配当率・予定失業率",
      "予定死亡率・予定利率・予定事業費率"
    ],
    "answer": 2,
    "explanation": "基本は予定死亡率・予定利率・予定事業費率です。多数の人のデータを用いる大数の法則と、収入と支出を対応させる収支相等の原則も関連して問われます。配当率は3予定基礎率ではありません。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 37,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問37",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
      "https://www.jili.or.jp/knows_learns/basic/explanation/index.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_2_2",
    "chapterId": "ch2",
    "unitId": "u2_2",
    "type": "binary",
    "question": "他の条件が同じ場合、終身保険の新規契約では、予定利率が引き下げられると一般に保険料は高くなる。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。予定利率が低いほど、保険会社が見込む運用収益が少なくなるため、必要な保険料は増えます。実際の運用利回りや契約者配当の利率と混同しないようにします。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 37,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問37",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
      "https://www.jili.or.jp/knows_learns/basic/explanation/index.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_2_3",
    "chapterId": "ch2",
    "unitId": "u2_2",
    "type": "mcq",
    "question": "生命保険料の算定で、将来の資産運用収益を見込んで保険料を割り引くために使う基礎率はどれか。",
    "options": [
      "予定利率",
      "予定事業費率",
      "予定死亡率"
    ],
    "answer": 0,
    "explanation": "運用収益を見込む基礎率は予定利率です。予定死亡率は死亡者数等から保険金支払額を予測するため、予定事業費率は契約の維持・管理等の費用を見込むための率です。似た用語を定義で区別します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 37,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問37",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。"
      }
    ],
    "examAlignment": "scope_supplement",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jili.or.jp/knows_learns/basic/explanation/index.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_2_4",
    "chapterId": "ch2",
    "unitId": "u2_2",
    "type": "mcq",
    "question": "将来の遺族支出7,600万円、遺族の収入見込5,000万円、死亡退職金600万円、充当する金融資産800万円。必要保障額はいくらか。",
    "options": [
      "2,600万円",
      "1,200万円",
      "2,000万円"
    ],
    "answer": 1,
    "explanation": "必要保障額＝支出－収入－死亡退職金－充当資産です。7,600－5,000－600－800＝1,200万円。死亡退職金を支出に足したり、既存の金融資産を引き忘れたりしないよう、資料を収入・支出・資産に分けます。",
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
    "calculationCheck": {
      "value": 1200,
      "formula": "7600-5000-600-800",
      "unit": "万円"
    },
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
      "https://www.jafp.or.jp/personal_finance/fresh/workbook/files/wb_part7.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_2_5",
    "chapterId": "ch2",
    "unitId": "u2_2",
    "type": "binary",
    "question": "被保険者とは保険料を支払う義務を負う人をいい、保険契約者とは生命や身体が保障の対象となる人をいう。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。契約を結び保険料払込みなどの権利義務を持つのが契約者、生命や身体が対象となるのが被保険者です。保険金受取人は支払われる保険金を受け取る人です。この三者の区別が課税関係の判断にも必要です。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [],
    "examAlignment": "scope_supplement",
    "alignmentNote": "分析した公開3セットでは同じ論点の出題を確認できず、試験範囲の補強として収録。出題頻度は未確認。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jili.or.jp/knows_learns/basic/explanation/index.html",
      "https://www.jili.or.jp/knows_learns/basic/explanation/index.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_3_1",
    "chapterId": "ch2",
    "unitId": "u2_3",
    "type": "mcq",
    "question": "一般的な定期保険・養老保険・終身保険の説明として、最も適切なものはどれか。",
    "options": [
      "終身保険は保険料払込期間満了と同時に保障が終了する",
      "定期保険は満了時に死亡保険金と同額の満期保険金を払う",
      "養老保険は死亡保険金と満期保険金が原則同額である"
    ],
    "answer": 2,
    "explanation": "養老保険は保険期間中の死亡と満期生存に備え、死亡保険金と満期保険金が原則同額です。定期保険は通常満期保険金がなく、終身保険は保険料の払込みが終わっても保障は一生涯続きます。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 7,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問7",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jili.or.jp/knows_learns/q_a/life_insurance/8797.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_3_2",
    "chapterId": "ch2",
    "unitId": "u2_3",
    "type": "binary",
    "question": "収入保障保険の死亡保険金を一時金で受け取ると、一般に年金形式の受取総額より一時金額が少なくなる。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。将来分をまとめて受け取る一時金は、一般にその期間の利息に相当する部分等を考慮した現在価値で計算されます。年金額の単純合計と同額になるとは限りません。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 7,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問7",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
      "https://www.jili.or.jp/knows_learns/basic/explanation/index.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_3_3",
    "chapterId": "ch2",
    "unitId": "u2_3",
    "type": "binary",
    "question": "確定年金では、年金受取期間中に被保険者が死亡すると、その後の残存期間の年金は一切支払われない。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。確定年金は生死にかかわらず定めた期間支払う年金です。期間途中で死亡すれば、残りの期間に対応する年金または一時金を遺族等が受け取ります。生存中の支払いを基本とする終身年金と区別します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 8,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問8",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jili.or.jp/knows_learns/basic/explanation/index.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_3_4",
    "chapterId": "ch2",
    "unitId": "u2_3",
    "type": "binary",
    "question": "終身年金の保険料は、他の条件が同じなら、一般に平均余命の長い女性の方が男性より高くなる。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。終身年金は生存中の受取が続くため、平均余命が長いほど支払年金の総額が大きくなると見込まれます。死亡保障の保険料における男女差と、理由を含めて区別します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 8,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問8",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
      "https://www.jili.or.jp/knows_learns/basic/explanation/index.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_3_5",
    "chapterId": "ch2",
    "unitId": "u2_3",
    "type": "mcq",
    "question": "変額保険（有期型）の一般的な最低保証の組合せとして適切なものはどれか。",
    "options": [
      "基本死亡保険金は最低保証されるが、満期保険金や解約返戻金に最低保証はない",
      "満期保険金のみ最低保証される",
      "解約返戻金だけは必ず既払込保険料以上になる"
    ],
    "answer": 0,
    "explanation": "変額保険は特別勘定の運用実績で保険金等が変動します。基本死亡保険金額は最低保証がありますが、満期保険金や解約返戻金は保証されないのが基本です。変額個人年金とは保証条件が異なる場合があります。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 8,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問8",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。"
      }
    ],
    "examAlignment": "scope_supplement",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jili.or.jp/knows_learns/basic/explanation/index.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_4_1",
    "chapterId": "ch2",
    "unitId": "u2_4",
    "type": "binary",
    "question": "払済保険への変更は、一般に保険料の払込みを中止し、その時点の解約返戻金を用いて、保険期間を維持しつつ保険金額を小さくする方法である。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。保険金額を維持しつつ保険期間を短くする延長保険と区別します。払済保険では付加特約が原則消滅し、解約返戻金が少ないと変更できない場合もあります。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 6,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問6",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jili.or.jp/knows_learns/basic/explanation/index.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_4_2",
    "chapterId": "ch2",
    "unitId": "u2_4",
    "type": "binary",
    "question": "契約転換制度を利用した場合、転換後契約の保険料は原則として転換時の年齢・保険料率で計算する。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。元の契約に加入したときの年齢で新契約の保険料を計算するわけではありません。転換前後の予定利率や保障内容にも注意が必要です。単なる特約更新や払済変更と区別します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 6,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問6",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
      "https://www.jili.or.jp/knows_learns/basic/explanation/index.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_4_3",
    "chapterId": "ch2",
    "unitId": "u2_4",
    "type": "mcq",
    "question": "生命保険の契約者貸付で、一般に貸付額の基準となるものはどれか。",
    "options": [
      "被保険者の年収",
      "その時点の解約返戻金",
      "契約の死亡保険金額"
    ],
    "answer": 1,
    "explanation": "一般に解約返戻金の所定割合が基準です。死亡保険金全額を上限とする制度ではありません。貸付には利息がかかり、利息込みの残高が解約返戻金を超える等の場合は契約の失効等にも注意が必要です。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 6,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問6",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jili.or.jp/knows_learns/basic/explanation/index.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_4_4",
    "chapterId": "ch2",
    "unitId": "u2_4",
    "type": "mcq",
    "question": "保険法による保険給付請求権の消滅時効は、権利を行使できる時から原則何年間か。",
    "options": [
      "5年間",
      "1年間",
      "3年間"
    ],
    "answer": 2,
    "explanation": "保険給付や保険料返還の請求権は原則3年間です。保険会社が保険料を請求する権利の原則1年間とは区別します。実際の請求は早めに行い、約款や時効更新等の個別事情も確認します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 36,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問36",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://laws.e-gov.go.jp/api/2/law_data/420AC0000000056"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_4_5",
    "chapterId": "ch2",
    "unitId": "u2_4",
    "type": "mcq",
    "question": "生命保険の申込日が6月2日、クーリングオフの書面受領日が6月5日だった。原則的な起算日と申込みの撤回方法の組合せはどれか。",
    "options": [
      "6月5日を含め8日以内・書面または電磁的記録",
      "6月5日から14日以内・口頭のみ",
      "6月2日から8日以内・口頭のみ"
    ],
    "answer": 0,
    "explanation": "遅い方の日である6月5日を含めて8日以内です。申込日だけを起算日とせず、書面等の交付日と比較します。原則として書面または電磁的記録で行い、口頭のみでよいわけではありません。適用除外もあります。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 37,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問37",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
      "https://www.jili.or.jp/knows_learns/basic/explanation/index.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_5_1",
    "chapterId": "ch2",
    "unitId": "u2_5",
    "type": "binary",
    "question": "夫が全額保険料を負担し、夫を被保険者、妻を死亡保険金受取人とする生命保険で、夫の死亡により妻が受け取る一時金は、原則として相続税の課税対象である。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。保険料負担者と被保険者が同一で、その死亡により他の人が受け取る場合は相続税です。契約者名義だけでなく、実際に保険料を負担した人で判断します。非課税枠の適用は別途確認します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202405",
        "questionNumber": 13,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2024年5月公表分 問13",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_a.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1750.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_5_2",
    "chapterId": "ch2",
    "unitId": "u2_5",
    "type": "mcq",
    "question": "夫が保険料を全額負担し、妻を被保険者、夫を受取人とする生命保険で、妻の死亡により夫が一時金を受け取った。原則どの税の対象か。",
    "options": [
      "贈与税",
      "所得税・住民税",
      "相続税"
    ],
    "answer": 1,
    "explanation": "保険料負担者と受取人が同じなので、原則として所得税・住民税です。一時金受取は一時所得として計算するのが基本です。「死亡保険金」という名称だけで相続税と決めてはいけません。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 40,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問40",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      },
      {
        "paperId": "j3_202405",
        "questionNumber": 13,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2024年5月公表分 問13",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_a.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1750.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_5_3",
    "chapterId": "ch2",
    "unitId": "u2_5",
    "type": "binary",
    "question": "父が保険料を全額負担し、母を被保険者、子を受取人とする生命保険で、母の死亡により子が受け取る一時金は、原則として贈与税の課税対象となる。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。保険料負担者・被保険者・受取人がすべて異なるため贈与税です。保険料負担者から受取人へ財産が移転したと考えます。被保険者が死亡した事実だけでは相続税と判定できません。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202405",
        "questionNumber": 13,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2024年5月公表分 問13",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_a.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1750.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_5_4",
    "chapterId": "ch2",
    "unitId": "u2_5",
    "type": "binary",
    "question": "個人事業主が所有する事業用建物の火災損害に対して受け取った損害保険金は、原則として所得税の課税対象となる事業所得に含める。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。資産の損害に対する保険金は原則非課税です。売上の補償など収益を補てんする保険金とは区別します。また、損失の必要経費算入額を計算する際の保険金の控除とは別の論点です。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 40,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問40",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1700.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_5_5",
    "chapterId": "ch2",
    "unitId": "u2_5",
    "type": "mcq",
    "question": "父が契約者・保険料負担者・被保険者・年金受取人であった保証期間付終身年金で、保証期間中に父が死亡し、子が残りの年金を受け取る権利を取得した。年金受給権は原則どの税の対象か。",
    "options": [
      "所得税の一時所得",
      "贈与税",
      "相続税"
    ],
    "answer": 2,
    "explanation": "父の死亡により子が取得した年金受給権は相続税の対象です。取得した「権利」の相続税と、その後受け取る年金の所得税の扱いは区別します。元の契約の保険料負担者を必ず確認します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 40,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問40",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
      "https://laws.e-gov.go.jp/api/2/law_data/325AC0000000073_20260401_506AC0000000008"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_6_1",
    "chapterId": "ch2",
    "unitId": "u2_6",
    "type": "mcq",
    "question": "飲食店が製造・販売した弁当で食中毒が生じ、顧客への法律上の損害賠償責任を負った。主に対応する保険はどれか。",
    "options": [
      "生産物賠償責任保険（PL保険）",
      "個人賠償責任保険",
      "施設所有（管理）者賠償責任保険"
    ],
    "answer": 0,
    "explanation": "製造・販売した生産物に起因する賠償責任はPL保険が基本です。建物や設備の欠陥等に起因する施設賠償と区別します。営業上の事故を日常生活用の個人賠償責任保険で扱うとは限りません。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 38,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問38",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_6_2",
    "chapterId": "ch2",
    "unitId": "u2_6",
    "type": "binary",
    "question": "個人賠償責任保険では、一般に、勤務先の営業車の運転中に起こした対物事故も、日常生活中の自転車事故と同じように補償される。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。一般に業務に関する賠償責任や自動車の使用等に起因する賠償責任は対象外です。日常生活で自転車により他人にけがをさせた事故等と区別します。保険の名称だけでなく対象外の条件も読みます。",
    "revision": 2,
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
    "id": "q2_6_3",
    "chapterId": "ch2",
    "unitId": "u2_6",
    "type": "binary",
    "question": "損害保険の実損てん補の原則では、複数の損害保険に加入していても、原則として実際の損害額を超えて保険金を受け取ることはできない。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。損害保険は事故による経済的な損失を埋める仕組みが基本です。定額で入院給付金等を支払う傷害・医療保障とは扱いが異なります。保険金額を重ねれば利益が出るというものではありません。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [],
    "examAlignment": "scope_supplement",
    "alignmentNote": "分析した公開3セットでは同じ論点の出題を確認できず、試験範囲の補強として収録。出題頻度は未確認。",
    "lawsDate": null,
    "sourceUrls": [
      "https://laws.e-gov.go.jp/api/2/law_data/420AC0000000056"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_6_4",
    "chapterId": "ch2",
    "unitId": "u2_6",
    "type": "mcq",
    "question": "損害額15万円、免責金額3万円、保険金額は十分あり、他の調整がない契約。免責金額を差し引く方式の支払保険金はいくらか。",
    "options": [
      "3万円",
      "12万円",
      "15万円"
    ],
    "answer": 1,
    "explanation": "15万円－3万円＝12万円です。免責金額は契約者等が自己負担する部分です。「免責」といっても支払要件や方式は商品によるため、本問では差し引く方式と指定しています。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [],
    "examAlignment": "scope_supplement",
    "alignmentNote": "分析した公開3セットでは同じ論点の出題を確認できず、試験範囲の補強として収録。出題頻度は未確認。",
    "calculationCheck": {
      "value": 12,
      "formula": "15-3",
      "unit": "万円"
    },
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
    "id": "q2_6_5",
    "chapterId": "ch2",
    "unitId": "u2_6",
    "type": "mcq",
    "question": "店舗の天井の管理不備で照明器具が落下し、来店客にけがを負わせた。主に対応する賠償責任保険はどれか。",
    "options": [
      "生産物賠償責任保険",
      "受託者賠償責任保険",
      "施設所有（管理）者賠償責任保険"
    ],
    "answer": 2,
    "explanation": "店舗などの施設の欠陥や管理上の不備による対人・対物事故は施設賠償が基本です。販売した食品による食中毒はPL保険、預かった他人の物への損害は受託者賠償の論点です。原因と対象を対応させます。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 38,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問38",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。"
      }
    ],
    "examAlignment": "scope_supplement",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_7_1",
    "chapterId": "ch2",
    "unitId": "u2_7",
    "type": "binary",
    "question": "自賠責保険で、加害車両1台による事故の被害者1人当たりの支払限度額は、死亡3,000万円、傷害120万円である。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。後遺障害は障害の程度に応じ75万円から4,000万円です。自賠責は対人損害の基本補償で、相手の車の修理費など対物損害は対象外です。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 38,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問38",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.sonpo.or.jp/insurance/jibai/index.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_7_2",
    "chapterId": "ch2",
    "unitId": "u2_7",
    "type": "binary",
    "question": "人身傷害保険では、一般に、被保険自動車の衝突事故で負傷した被保険者の損害について、自分の過失割合にかかわらず、保険金額の範囲で約款の基準により補償する。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。過失割合があるから、その割合分が必ず補償から除かれるというものではありません。相手への賠償をする対人賠償保険と、自分などのけがに備える人身傷害を区別します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 10,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問10",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
      "https://www.sonpo.or.jp/insurance/car/index.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_7_3",
    "chapterId": "ch2",
    "unitId": "u2_7",
    "type": "mcq",
    "question": "一般条件の車両保険に加入した車が洪水で水没した。通常の補償の扱いとして、最も適切なものはどれか。",
    "options": [
      "洪水による損害は通常、補償対象となる",
      "地震による津波と同じく、洪水も必ず対象外となる",
      "自賠責保険から車の修理費が支払われる"
    ],
    "answer": 0,
    "explanation": "通常、洪水による水没は車両保険の対象です。一方、地震・噴火やこれらによる津波は、通常の車両保険では原則対象外です。水害という見た目だけで同じ扱いと判断せず、原因を確認します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 10,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問10",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.sonpo.or.jp/insurance/car/index.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_7_4",
    "chapterId": "ch2",
    "unitId": "u2_7",
    "type": "binary",
    "question": "自動車の対人賠償保険は、一般に、運転中の記名被保険者が自分の配偶者を死傷させ、賠償責任を負った場合も当然に補償する。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。対人賠償保険では、記名被保険者・運転者の父母、配偶者、子などは一般に補償対象から除かれます。第三者に対する賠償と、家族自身のけがに備える人身傷害等を区別して確認します。",
    "revision": 2,
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
    "id": "q2_7_5",
    "chapterId": "ch2",
    "unitId": "u2_7",
    "type": "mcq",
    "question": "国内旅行傷害保険の一般的な補償について、最も適切なものはどれか。",
    "options": [
      "故意による事故も通常の事故と同条件で補償する",
      "国内旅行中の細菌性食中毒は補償対象となる",
      "被保険者の持病が悪化した場合も、けがと同条件で必ず補償する"
    ],
    "answer": 1,
    "explanation": "国内旅行傷害保険では一般に細菌性食中毒も対象です。普通傷害保険とは補償範囲に違いがあるため、保険の種類を確認します。病気一般や故意の事故が無条件で補償されるわけではありません。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 9,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問9",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
      "https://www.sonpo.or.jp/insurance/shogai/index.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_8_1",
    "chapterId": "ch2",
    "unitId": "u2_8",
    "type": "binary",
    "question": "地震・噴火・津波を原因とする建物の損壊や火災は、通常の火災保険だけでは原則補償されない。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。火災であっても原因が地震なら、通常の火災保険の補償対象とは区別されます。地震保険を火災保険に付帯して備えます。火災という損害の名称だけでは判定できません。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 9,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問9",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/personal_finance/fresh/workbook/files/wb_part7.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_8_2",
    "chapterId": "ch2",
    "unitId": "u2_8",
    "type": "mcq",
    "question": "地震保険の保険金額の設定範囲と上限の原則的な組合せはどれか。",
    "options": [
      "火災保険金額の50〜100%・建物5,000万円・家財1,000万円",
      "火災保険金額の10〜30%・建物3,000万円・家財500万円",
      "火災保険金額の30〜50%・建物5,000万円・家財1,000万円"
    ],
    "answer": 2,
    "explanation": "原則30〜50%で設定し、建物5,000万円、家財1,000万円が上限です。設定割合による制限と絶対額の上限の両方を満たす必要があります。火災保険と同額をそのまま設定する制度ではありません。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 38,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問38",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/personal_finance/fresh/workbook/files/wb_part7.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_8_3",
    "chapterId": "ch2",
    "unitId": "u2_8",
    "type": "binary",
    "question": "地震保険は、火災保険と関係なく単独で契約できる。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。地震保険は火災保険とセットで契約します。すでに火災保険へ加入している場合に、契約の途中から地震保険を付帯することもできます。単独契約と途中付帯を区別します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202405",
        "questionNumber": 14,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2024年5月公表分 問14",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_a.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/personal_finance/fresh/workbook/files/wb_part7.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_8_4",
    "chapterId": "ch2",
    "unitId": "u2_8",
    "type": "mcq",
    "question": "地震保険の保険対象として適切な組合せはどれか。",
    "options": [
      "居住用建物と生活用動産（家財）",
      "工場専用建物と営業用機械のみ",
      "自動車と1個100万円の貴金属のみ"
    ],
    "answer": 0,
    "explanation": "地震保険の基本対象は居住用建物と家財です。自動車や1個・1組30万円を超える貴金属等は対象外です。火災保険で保険にかけられる財産が、地震保険でもすべて対象になるわけではありません。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202405",
        "questionNumber": 14,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2024年5月公表分 問14",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_a.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/personal_finance/fresh/workbook/files/wb_part7.pdf",
      "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_8_5",
    "chapterId": "ch2",
    "unitId": "u2_8",
    "type": "mcq",
    "question": "火災保険金額が建物8,000万円で、地震保険の割合を50%とする。他の契約の合算等はない場合、地震保険の建物の保険金額はいくらか。",
    "options": [
      "2,400万円",
      "4,000万円",
      "5,000万円"
    ],
    "answer": 1,
    "explanation": "8,000万円×50%＝4,000万円です。建物の上限5,000万円以内なので4,000万円となります。5,000万円は常に設定する金額ではなく、設定可能額の絶対上限です。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 38,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問38",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。"
      }
    ],
    "examAlignment": "scope_supplement",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "value": 4000,
      "formula": "Math.min(8000*0.5,5000)",
      "unit": "万円"
    },
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/personal_finance/fresh/workbook/files/wb_part7.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_9_1",
    "chapterId": "ch2",
    "unitId": "u2_9",
    "type": "mcq",
    "question": "一般的ながん保険で設けられる待ち期間（免責期間）は、契約からおおむね何日間か。",
    "options": [
      "30日間",
      "60日間",
      "90日間"
    ],
    "answer": 2,
    "explanation": "一般に90日間程度です。その期間中のがん診断等は給付対象にならないなどの扱いがあります。ただし、すべての医療保障に一律の待ち期間があるわけではなく、商品や特約ごとの条件で確認します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 39,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問39",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jili.or.jp/knows_learns/basic/explanation/index.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_9_2",
    "chapterId": "ch2",
    "unitId": "u2_9",
    "type": "binary",
    "question": "先進医療特約の給付対象となる先進医療かどうかは、原則として保険加入時点で判定し、療養を受けた時点での指定の有無は問わない。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。原則として療養を受けた時点で、厚生労働大臣の定める先進医療に該当することが必要です。加入時に指定されていても、その後対象から外れる場合があります。判定時点を入れ替える出題に注意します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 39,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問39",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jili.or.jp/knows_learns/basic/explanation/index.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_9_3",
    "chapterId": "ch2",
    "unitId": "u2_9",
    "type": "mcq",
    "question": "リビング・ニーズ特約の一般的な余命要件として適切なものはどれか。",
    "options": [
      "余命6か月以内",
      "余命12か月以内",
      "余命3か月以内"
    ],
    "answer": 0,
    "explanation": "原則として余命6か月以内と判断された場合に、所定の範囲で死亡保険金を生前に受け取れます。病名をがんに限定する特約ではなく、がん診断給付金とも異なります。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 39,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問39",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jili.or.jp/knows_learns/basic/explanation/index.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q2_9_4",
    "chapterId": "ch2",
    "unitId": "u2_9",
    "type": "mcq",
    "question": "入院給付金日額6,000円、支払限度60日。対象入院70日と、日額の20倍の対象手術1回について支払う契約では、給付金合計はいくらか。",
    "options": [
      "36万円",
      "48万円",
      "54万円"
    ],
    "answer": 1,
    "explanation": "入院は限度60日なので6,000円×60＝36万円。手術は6,000円×20＝12万円。合計48万円です。実入院70日をそのまま使った54万円は誤りです。契約資料の限度日数と手術倍率を先に確認します。",
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
    "calculationCheck": {
      "value": 48,
      "formula": "(6000*Math.min(70,60)+6000*20)/10000",
      "unit": "万円"
    },
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
    "id": "q2_9_5",
    "chapterId": "ch2",
    "unitId": "u2_9",
    "type": "binary",
    "question": "先進医療の技術料は公的医療保険の給付対象外で、原則全額自己負担となる。一方、通常の診療と共通する診察・検査・投薬等には、保険診療として扱われる部分がある。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。先進医療を受けると診療全体がすべて保険外になる、という意味ではありません。先進医療特約は通常、先進医療の技術料相当額を主な対象とするため、医療費のどの部分を補うかを整理します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 39,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問39",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。"
      }
    ],
    "examAlignment": "scope_supplement",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/personal_finance/fresh/workbook/files/wb_part7.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  }
];
