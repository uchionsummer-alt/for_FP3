// 公開過去問の分析に基づく再構成問題。照合記録はreviews.json。
const FP3_CHAPTER_05 = [
  {
    "id": "q5_1_1",
    "chapterId": "ch5",
    "unitId": "u5_1",
    "type": "mcq",
    "question": "土地の登記記録の構成として適切なものはどれか。",
    "options": [
      "表題部に土地の所在・地積、甲区に所有権、乙区に抵当権等",
      "表題部に所有権、甲区に地積、乙区に売買代金",
      "甲区に抵当権、乙区に所有権"
    ],
    "answer": 0,
    "explanation": "表題部は物理的な状況、権利部甲区は所有権、乙区は所有権以外の権利です。所有権移転登記と抵当権設定登記を同じ区分にしないようにします。登記記録を読んで、誰のどの権利かを確認する練習です。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 21,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問21",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      },
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
    "id": "q5_1_2",
    "chapterId": "ch5",
    "unitId": "u5_1",
    "type": "binary",
    "question": "不動産の登記事項証明書は、原則としてその不動産に利害関係のない人でも交付を請求できる。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。登記事項証明書の交付請求は原則誰でも可能です。売主本人だけ、抵当権者だけなどに限定されません。所有者を名乗る人の説明だけでなく、公示された権利関係を確認するためにも使います。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 21,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問21",
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
      "https://laws.e-gov.go.jp/api/2/law_data/416AC0000000123_20260401_506AC0000000030"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_1_3",
    "chapterId": "ch5",
    "unitId": "u5_1",
    "type": "binary",
    "question": "不動産登記には公信力があるため、登記上の所有者を信じて取引すれば、真の権利者でない人からでも必ず所有権を取得できる。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。不動産登記に公信力はありません。登記を信じたことだけで無権利者からの取得が保護されるとは限りません。登記は権利関係を確認する重要な資料ですが、本人確認や契約関係も確認します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [],
    "examAlignment": "scope_supplement",
    "alignmentNote": "分析した公開3セットでは同じ論点の出題を確認できず、試験範囲の補強として収録。出題頻度は未確認。",
    "lawsDate": null,
    "sourceUrls": [
      "https://laws.e-gov.go.jp/api/2/law_data/129AC0000000089_20260401_506AC0000000033"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_1_4",
    "chapterId": "ch5",
    "unitId": "u5_1",
    "type": "mcq",
    "question": "所有権の移転を対抗関係にある第三者へ主張するための原則的な要件はどれか。",
    "options": [
      "契約書に実印を押したことだけ",
      "登記をすること",
      "売買代金を半額以上支払うこと"
    ],
    "answer": 1,
    "explanation": "民法上、不動産に関する物権変動は、原則として登記がなければ対抗関係にある第三者へ対抗できません。売買当事者間で権利が移ることと、第三者へ主張できることは分けて考えます。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [],
    "examAlignment": "scope_supplement",
    "alignmentNote": "分析した公開3セットでは同じ論点の出題を確認できず、試験範囲の補強として収録。出題頻度は未確認。",
    "lawsDate": null,
    "sourceUrls": [
      "https://laws.e-gov.go.jp/api/2/law_data/129AC0000000089_20260401_506AC0000000033"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_1_5",
    "chapterId": "ch5",
    "unitId": "u5_1",
    "type": "binary",
    "question": "登記記録の乙区に抵当権設定登記があるときは、その土地に所有権が存在しないことを意味する。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。所有権と、債権を担保する抵当権は併存し得ます。所有者は甲区、担保権等は乙区で確認します。乙区に記載があることだけで売買できないとは限りませんが、抹消等の取扱いを確認する必要があります。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202505",
        "questionNumber": 10,
        "relationship": "related_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2025年5月公表分 問10",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_a.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。"
      }
    ],
    "examAlignment": "scope_supplement",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
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
    "id": "q5_2_1",
    "chapterId": "ch5",
    "unitId": "u5_2",
    "type": "mcq",
    "question": "地価公示の価格時点と公示を行う機関の組合せとして適切なものはどれか。",
    "options": [
      "7月1日・国税庁",
      "1月1日・日本銀行",
      "1月1日・国土交通省土地鑑定委員会"
    ],
    "answer": 2,
    "explanation": "地価公示は原則1月1日時点で、国土交通省土地鑑定委員会が標準地の正常価格を公示します。都道府県地価調査の基準地価格は7月1日時点です。税務上の路線価とも区別します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202405",
        "questionNumber": 10,
        "relationship": "related_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2024年5月公表分 問10",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_a.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。"
      }
    ],
    "examAlignment": "scope_supplement",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.mlit.go.jp/totikensangyo/content/001985434.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_2_2",
    "chapterId": "ch5",
    "unitId": "u5_2",
    "type": "binary",
    "question": "公的土地評価の評価水準の目安は、相続税路線価が公示価格の80%程度、土地の固定資産税評価額が70%程度である。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。実際の売買価格がこれらに必ず一致するという意味ではありません。公示価格は取引の指標、路線価は相続税等の評価、固定資産税評価額は固定資産税等の計算の基礎として使います。",
    "revision": 2,
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
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
      "https://www.mlit.go.jp/totikensangyo/content/001985434.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_2_3",
    "chapterId": "ch5",
    "unitId": "u5_2",
    "type": "binary",
    "question": "土地・家屋の固定資産税評価額の評価替えは、原則として毎年行われる。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。原則3年ごとの基準年度で評価替えします。毎年1月1日という賦課期日や、毎年評価する相続税路線価等と混同しないようにします。基準年度以外にも例外的な修正等はあります。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 21,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問21",
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
      "https://laws.e-gov.go.jp/api/2/law_data/325AC0000000226_20260401_508AC0000000002"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_2_4",
    "chapterId": "ch5",
    "unitId": "u5_2",
    "type": "mcq",
    "question": "不動産の鑑定評価の手法の説明として適切なものはどれか。",
    "options": [
      "原価法は再調達原価から減価修正し、収益還元法は将来の純収益の現在価値等に着目する",
      "原価法は周辺の取引価格の平均だけを求める",
      "収益還元法は将来の総家賃を割り引かず足すだけである"
    ],
    "answer": 0,
    "explanation": "原価法は再調達原価と減価修正、取引事例比較法は取引事例の補正・比較、収益還元法は将来の純収益等の現在価値に着目します。手法名と評価の着眼点を対応させて覚えます。",
    "revision": 2,
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
    "id": "q5_2_5",
    "chapterId": "ch5",
    "unitId": "u5_2",
    "type": "mcq",
    "question": "都道府県地価調査の基準地価格の価格時点は、原則としていつか。",
    "options": [
      "4月1日",
      "7月1日",
      "1月1日"
    ],
    "answer": 1,
    "explanation": "基準地価格は原則7月1日です。国の地価公示の1月1日と対で整理します。同じ土地の価格情報でも、所管・価格時点・用途が異なるので、表にして比較するのが有効です。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202405",
        "questionNumber": 10,
        "relationship": "related_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2024年5月公表分 問10",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_a.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。"
      }
    ],
    "examAlignment": "scope_supplement",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.mlit.go.jp/totikensangyo/totikensangyo_fr4_000044.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_3_1",
    "chapterId": "ch5",
    "unitId": "u5_3",
    "type": "binary",
    "question": "売買の一般媒介契約では、依頼者は他の宅建業者にも重ねて媒介を依頼でき、自分で見つけた相手との取引も原則できる。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。専任媒介は重複依頼不可ですが自己発見取引は可能、専属専任媒介は自己発見取引も制限されます。契約の種類ごとに2つの違いを分けて覚えます。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 51,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問51",
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
      "https://laws.e-gov.go.jp/api/2/law_data/327AC1000000176"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_3_2",
    "chapterId": "ch5",
    "unitId": "u5_3",
    "type": "mcq",
    "question": "専任媒介契約の有効期間と業務処理状況の報告頻度の原則的な組合せはどれか。",
    "options": [
      "最長6か月・月1回以上",
      "最長3か月・報告義務なし",
      "最長3か月・2週間に1回以上"
    ],
    "answer": 2,
    "explanation": "専任媒介は最長3か月で、2週間に1回以上の報告が必要です。依頼者の申出による更新も期間の上限は3か月です。専属専任媒介の1週間に1回以上の報告と区別します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 51,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問51",
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
      "https://laws.e-gov.go.jp/api/2/law_data/327AC1000000176"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_3_3",
    "chapterId": "ch5",
    "unitId": "u5_3",
    "type": "binary",
    "question": "専属専任媒介契約では、依頼者は自ら相手を見つけた場合でも、その業者を通さずに売買することは原則としてできない。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。専任媒介より自己発見取引の制限が強い契約です。一方、業者には1週間に1回以上の報告等が求められます。契約名の「専任」が似ていても同じ条件ではありません。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 51,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問51",
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
      "https://laws.e-gov.go.jp/api/2/law_data/327AC1000000176"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_3_4",
    "chapterId": "ch5",
    "unitId": "u5_3",
    "type": "mcq",
    "question": "売主が150万円の解約手付を受領した。買主が履行に着手する前に売主が手付解除する場合、原則として現実に提供する金額はいくらか。",
    "options": [
      "300万円",
      "450万円",
      "150万円"
    ],
    "answer": 0,
    "explanation": "売主は受け取った手付の倍額300万円を現実に提供します。追加で150万円だけ渡すという意味ではありません。買主が解除する場合は手付を放棄するため、どちらが解除するかを確認します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 51,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問51",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "150*2",
      "value": 300,
      "unit": "万円"
    },
    "lawsDate": null,
    "sourceUrls": [
      "https://laws.e-gov.go.jp/api/2/law_data/129AC0000000089_20260401_506AC0000000033"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_3_5",
    "chapterId": "ch5",
    "unitId": "u5_3",
    "type": "binary",
    "question": "宅建業者が自ら売主で、買主が宅建業者でない宅地建物の売買では、代金の20%を超える手付金を受領することはできない。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。消費者保護のための宅建業法上の制限です。売主が一般個人の場合もすべて同じ上限となるわけではありません。自ら売主か、買主が業者かという当事者条件を先に読みます。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 51,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問51",
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
      "https://laws.e-gov.go.jp/api/2/law_data/327AC1000000176"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_3_6",
    "chapterId": "ch5",
    "unitId": "u5_3",
    "type": "mcq",
    "question": "普通建物賃貸借で期間を6か月と定めた場合の取扱いとして適切なものはどれか。",
    "options": [
      "契約は必ず無効となる",
      "期間の定めのない契約とみなす",
      "必ず6か月で終了し更新できない"
    ],
    "answer": 1,
    "explanation": "普通借家で1年未満の期間を定めると、期間の定めがないものとみなされます。定期建物賃貸借では1年未満の期間も設定可能です。普通か定期かを先に確認します。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 22,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問22",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      },
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
    "lawsDate": null,
    "sourceUrls": [
      "https://laws.e-gov.go.jp/api/2/law_data/403AC0000000090_20230614_505AC0000000053"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_3_7",
    "chapterId": "ch5",
    "unitId": "u5_3",
    "type": "binary",
    "question": "定期建物賃貸借は所定の書面等による契約と事前説明等の要件を満たせば、1年未満の契約期間を定めることもできる。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。定期借家は期間に制限がなく、更新がないことなどの事前説明や契約の方式が必要です。合意による再契約は更新とは異なります。普通借家の1年未満の扱いと区別します。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 22,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問22",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      },
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
    "lawsDate": null,
    "sourceUrls": [
      "https://laws.e-gov.go.jp/api/2/law_data/403AC0000000090_20230614_505AC0000000053",
      "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_3_8",
    "chapterId": "ch5",
    "unitId": "u5_3",
    "type": "mcq",
    "question": "一般定期借地権の存続期間と契約方式の組合せとして適切なものはどれか。",
    "options": [
      "10年以上50年未満・すべて公正証書に限る",
      "30年以上・口頭のみでも可",
      "50年以上・所定の書面等で特約を定める"
    ],
    "answer": 2,
    "explanation": "一般定期借地権は50年以上とし、更新等をしない特約を書面等で定めます。公正証書だけに限定されるわけではありません。事業用定期借地権等の10年以上50年未満・公正証書と区別します。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 22,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問22",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      },
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
    "lawsDate": null,
    "sourceUrls": [
      "https://laws.e-gov.go.jp/api/2/law_data/403AC0000000090_20230614_505AC0000000053"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_3_9",
    "chapterId": "ch5",
    "unitId": "u5_3",
    "type": "binary",
    "question": "事業用定期借地権等は専ら事業の用に供する建物の所有を目的とし、居住用建物は対象外で、設定契約は公正証書によらなければならない。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。期間は10年以上50年未満で、30年以上と30年未満では排除される法定規定等に違いがあります。一般定期借地権と異なり、公正証書が必須である点がよく問われます。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 22,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問22",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      },
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
    "lawsDate": null,
    "sourceUrls": [
      "https://laws.e-gov.go.jp/api/2/law_data/403AC0000000090_20230614_505AC0000000053"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_3_10",
    "chapterId": "ch5",
    "unitId": "u5_3",
    "type": "binary",
    "question": "借地借家法上の普通借地権について、最初の存続期間は原則30年、最初の更新後は20年、その後の更新後は10年である。ただし契約で長い期間を定めた場合を除く。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。普通借地権は更新を前提とする制度です。定期借地権の50年以上・10年以上50年未満などとは異なります。借地は建物所有目的の土地の権利、借家は建物の賃貸借という違いも整理しましょう。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202405",
        "questionNumber": 11,
        "relationship": "related_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2024年5月公表分 問11",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_a.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。"
      }
    ],
    "examAlignment": "scope_supplement",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://laws.e-gov.go.jp/api/2/law_data/403AC0000000090_20230614_505AC0000000053"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_4_1",
    "chapterId": "ch5",
    "unitId": "u5_4",
    "type": "binary",
    "question": "市街化区域は、既に市街地を形成している区域と、おおむね10年以内に優先的・計画的に市街化を図るべき区域である。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。「将来いつか市街化する土地すべて」という意味ではありません。市街化を抑制する市街化調整区域と対で覚え、開発許可の要否にも結び付けます。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 23,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問23",
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
      "https://laws.e-gov.go.jp/api/2/law_data/343AC0000000100_20250604_507AC0000000051"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_4_2",
    "chapterId": "ch5",
    "unitId": "u5_4",
    "type": "binary",
    "question": "市街化調整区域は、市街化を優先的に推進する区域であり、原則として用途地域を定める。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。市街化調整区域は市街化を抑制する区域で、原則として用途地域を定めません。市街化区域では少なくとも用途地域を定めるという違いがあります。区域名と役割を取り違えないようにします。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 23,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問23",
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
      "https://laws.e-gov.go.jp/api/2/law_data/343AC0000000100_20250604_507AC0000000051"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_4_3",
    "chapterId": "ch5",
    "unitId": "u5_4",
    "type": "binary",
    "question": "市街化区域内の開発行為は、規模の大小にかかわらず必ず開発許可を受けなければならない。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。一定規模未満の開発行為などには許可不要の例外があります。区域・規模・行為の目的によって判断し、市街化調整区域と同じ扱いにしないようにします。条例等による規模の違いにも注意が必要です。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 23,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問23",
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
      "https://laws.e-gov.go.jp/api/2/law_data/343AC0000000100_20250604_507AC0000000051"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_4_4",
    "chapterId": "ch5",
    "unitId": "u5_4",
    "type": "mcq",
    "question": "市街化区域内の農地を自宅建設のため宅地へ転用する場合、原則的な手続として適切なものはどれか。",
    "options": [
      "事前に農業委員会へ届出を行えば、都道府県知事等の許可は不要",
      "必ず国土交通大臣の許可が必要",
      "何の手続も必要ない"
    ],
    "answer": 0,
    "explanation": "市街化区域内の農地転用は、あらかじめ農業委員会へ届け出ることで原則許可不要となります。許可不要と手続不要は同じではありません。市街化区域外の場合と区別します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 23,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問23",
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
      "https://laws.e-gov.go.jp/api/2/law_data/327AC0000000229"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_4_5",
    "chapterId": "ch5",
    "unitId": "u5_4",
    "type": "binary",
    "question": "建物の建築等を主な目的とする土地の区画形質の変更は、都市計画法上の開発行為に該当する。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。単に土地を売買することではなく、建築等を目的に区画や形状・性質を変える行為です。開発行為に該当するかと、例外により許可が不要かは、別の段階で判断します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 23,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問23",
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
      "https://laws.e-gov.go.jp/api/2/law_data/343AC0000000100_20250604_507AC0000000051"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_5_1",
    "chapterId": "ch5",
    "unitId": "u5_5",
    "type": "mcq",
    "question": "敷地面積240㎡、建築面積120㎡、延べ面積360㎡。建蔽率と容積率の組合せはどれか。除外部分はない。",
    "options": [
      "50%・200%",
      "50%・150%",
      "150%・50%"
    ],
    "answer": 1,
    "explanation": "建蔽率＝120÷240＝50%、容積率＝360÷240＝150%。建蔽率の分子は建築面積、容積率は各階床面積の合計である延べ面積です。2つの分子を入れ替えないようにします。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 52,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問52",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      },
      {
        "paperId": "g3_202605",
        "questionNumber": 52,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問52",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "120/240*100",
      "value": 50,
      "unit": "%"
    },
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
      "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_5_2",
    "chapterId": "ch5",
    "unitId": "u5_5",
    "type": "binary",
    "question": "都市計画区域等の建築物の敷地は、原則として幅員4m以上の建築基準法上の道路に2m以上接しなければならない。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。原則は道路幅員4m・接道2mです。ただし2項道路等の例外があります。幅員が4m未満の道路なら必ず建築不可というわけではなく、セットバック等の要件を確認します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 52,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問52",
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
      "https://laws.e-gov.go.jp/api/2/law_data/325AC0000000201_20260401_507AC0000000068"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_5_3",
    "chapterId": "ch5",
    "unitId": "u5_5",
    "type": "mcq",
    "question": "指定容積率300%、前面道路5m、法定乗数0.4の場合、道路幅員による制限を考慮した容積率の上限はいくらか。緩和等はない。",
    "options": [
      "300%",
      "160%",
      "200%"
    ],
    "answer": 2,
    "explanation": "道路幅員による容積率は5×0.4×100＝200%。指定容積率300%と比較して小さい方の200%を使います。前面道路が12m未満の場合の基本的な制限で、指定容積率だけを使わないようにします。",
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
    "calculationCheck": {
      "formula": "Math.min(300,5*0.4*100)",
      "value": 200,
      "unit": "%"
    },
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
      "https://laws.e-gov.go.jp/api/2/law_data/325AC0000000201_20260401_507AC0000000068"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_5_4",
    "chapterId": "ch5",
    "unitId": "u5_5",
    "type": "mcq",
    "question": "土地180㎡、道路に接する長さ18m、現況道路幅員3mで道路中心線から両側2mのセットバックを要する。道路中心は現況の中央。敷地計算に用いる面積はいくらか。",
    "options": [
      "171㎡",
      "180㎡",
      "162㎡"
    ],
    "answer": 0,
    "explanation": "必要な後退距離は（4－3）÷2＝0.5m。後退部分18×0.5＝9㎡を180㎡から引き171㎡です。片側で1m全部を後退するとした162㎡は誤りです。反対側が崖等の場合の条件とは区別します。",
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
    "calculationCheck": {
      "formula": "180-18*(4-3)/2",
      "value": 171,
      "unit": "㎡"
    },
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf",
      "https://laws.e-gov.go.jp/api/2/law_data/325AC0000000201_20260401_507AC0000000068"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_5_5",
    "chapterId": "ch5",
    "unitId": "u5_5",
    "type": "binary",
    "question": "セットバックした部分の土地も、もとの所有面積に含まれるため、建蔽率や容積率を算出する敷地面積へそのまま算入する。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。道路とみなされるセットバック部分は、建蔽率・容積率の計算上の敷地面積に含めません。登記上の面積をそのまま使う問題か、後退部分を除く問題かを資料で確認します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202505",
        "questionNumber": 9,
        "relationship": "related_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2025年5月公表分 問9",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202505_a.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。"
      }
    ],
    "examAlignment": "scope_supplement",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf",
      "https://laws.e-gov.go.jp/api/2/law_data/325AC0000000201_20260401_507AC0000000068"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_6_1",
    "chapterId": "ch5",
    "unitId": "u5_6",
    "type": "binary",
    "question": "区分所有建物の共用部分の持分は、規約に別段の定めがなければ専有部分の床面積の割合による。規約による別段の定めも可能である。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。住戸数が同じ割合だから必ず均等とは限りません。原則の床面積割合と、規約で異なる定めができることの両方を押さえます。各所有者の管理費負担の考え方にも関係します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 53,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問53",
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
      "https://laws.e-gov.go.jp/api/2/law_data/337AC0000000069_20260401_507AC0000000047"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_6_2",
    "chapterId": "ch5",
    "unitId": "u5_6",
    "type": "binary",
    "question": "区分所有法上の管理者は、原則として少なくとも毎年1回、集会を招集しなければならない。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。毎週・毎月ではなく少なくとも毎年1回です。管理者とは管理会社のことだけを指すのではなく、区分所有法上の管理を担う者です。規約の変更等の決議要件とは別に覚えます。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 53,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問53",
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
      "https://laws.e-gov.go.jp/api/2/law_data/337AC0000000069_20260401_507AC0000000047"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_6_3",
    "chapterId": "ch5",
    "unitId": "u5_6",
    "type": "mcq",
    "question": "2026年4月1日施行後の区分所有法で、規約変更の原則的な決議要件として適切なものはどれか。定足数の引上げ等の特別な定めはない。",
    "options": [
      "全員出席かつ全員一致",
      "区分所有者・議決権の各過半数の出席を要し、出席者・その議決権の各4分の3以上で決議する",
      "出席者1人でも、その人の単独判断で変更できる"
    ],
    "answer": 1,
    "explanation": "改正後は定足数と出席者を基準にする多数決を分けて確認します。原則、区分所有者数と議決権の各過半数の出席、出席者数とその議決権の各4分の3以上の賛成が必要です。2024年公開問題の旧基準をそのまま流用しないようにします。特別の影響を受ける者の承諾等にも注意します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 53,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問53",
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
      "https://laws.e-gov.go.jp/api/2/law_data/337AC0000000069_20260401_507AC0000000047"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_6_4",
    "chapterId": "ch5",
    "unitId": "u5_6",
    "type": "mcq",
    "question": "建替え決議について、耐震性不足等による法定の緩和事由がなく、所在等不明者の除外等もない場合の原則的な多数はどれか。",
    "options": [
      "区分所有者・議決権の各2分の1以上",
      "区分所有者・議決権の各4分の3以上",
      "区分所有者・議決権の各5分の4以上"
    ],
    "answer": 2,
    "explanation": "原則は各5分の4以上です。2026年4月施行改正では耐震性不足等の一定の場合に各4分の3への緩和があるため、「常に5分の4」とも言い切れません。規約変更の出席者基準とも異なります。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 53,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問53",
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
      "https://laws.e-gov.go.jp/api/2/law_data/337AC0000000069_20260401_507AC0000000047"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_6_5",
    "chapterId": "ch5",
    "unitId": "u5_6",
    "type": "binary",
    "question": "区分所有建物の共用廊下に係る持分は、原則として専有部分と分離して自由に売却できる。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。共用部分の持分は原則として専有部分と分離して処分できません。各区分所有者が個別に使う専有部分と、皆で使う共用部分の法的な関係を確認します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [],
    "examAlignment": "scope_supplement",
    "alignmentNote": "分析した公開3セットでは同じ論点の出題を確認できず、試験範囲の補強として収録。出題頻度は未確認。",
    "lawsDate": null,
    "sourceUrls": [
      "https://laws.e-gov.go.jp/api/2/law_data/337AC0000000069_20260401_507AC0000000047"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_7_1",
    "chapterId": "ch5",
    "unitId": "u5_7",
    "type": "mcq",
    "question": "不動産取得税の原則的な扱いの組合せはどれか。",
    "options": [
      "相続は非課税、贈与による取得は原則課税",
      "相続も贈与も必ず非課税",
      "相続は課税、贈与は必ず非課税"
    ],
    "answer": 0,
    "explanation": "相続による取得は原則非課税ですが、贈与は原則課税対象です。無償取得ならすべて非課税というわけではありません。不動産取得税と相続税・贈与税は別の税です。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 24,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問24",
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
      "https://laws.e-gov.go.jp/api/2/law_data/325AC0000000226_20260401_508AC0000000002"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_7_2",
    "chapterId": "ch5",
    "unitId": "u5_7",
    "type": "binary",
    "question": "土地建物の取得に伴う所有権移転登記に課される税は、国税の登録免許税である。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。不動産取得税は都道府県税、固定資産税は原則市町村税です。取得、登記、保有という時点ごとに税の名称と課税主体を整理します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 24,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問24",
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
      "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_7_3",
    "chapterId": "ch5",
    "unitId": "u5_7",
    "type": "binary",
    "question": "固定資産税は、原則としてその年の4月1日時点で土地や家屋等の固定資産課税台帳に登録されている所有者に課税される。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。賦課期日は1月1日です。年度途中で売買しても納税義務者がその都度変わるわけではありません。売買時に当事者が税額を精算する合意と、法定の納税義務者は別です。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 24,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問24",
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
      "https://laws.e-gov.go.jp/api/2/law_data/325AC0000000226_20260401_508AC0000000002"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_7_4",
    "chapterId": "ch5",
    "unitId": "u5_7",
    "type": "mcq",
    "question": "固定資産税の標準税率はいくらか。",
    "options": [
      "0.3%",
      "1.4%",
      "3%"
    ],
    "answer": 1,
    "explanation": "標準税率は1.4%です。都市計画税の制限税率0.3%や、不動産取得税の特例税率等と混同しないようにします。固定資産税では評価額と課税標準が特例で異なる場合もあります。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 24,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問24",
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
      "https://laws.e-gov.go.jp/api/2/law_data/325AC0000000226_20260401_508AC0000000002"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_7_5",
    "chapterId": "ch5",
    "unitId": "u5_7",
    "type": "mcq",
    "question": "住宅1戸の敷地200㎡、固定資産税評価額6,000万円で、小規模住宅用地の特例を全体に適用できる。固定資産税の土地の課税標準はいくらか。負担調整等はない。",
    "options": [
      "2,000万円",
      "6,000万円",
      "1,000万円"
    ],
    "answer": 2,
    "explanation": "200㎡までの小規模住宅用地は原則6分の1なので6,000÷6＝1,000万円です。都市計画税の3分の1と区別します。評価額そのものが6分の1になるのではなく、税の計算に使う課税標準の特例です。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 24,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問24",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。"
      }
    ],
    "examAlignment": "scope_supplement",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "6000/6",
      "value": 1000,
      "unit": "万円"
    },
    "lawsDate": null,
    "sourceUrls": [
      "https://laws.e-gov.go.jp/api/2/law_data/325AC0000000226_20260401_508AC0000000002"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_8_1",
    "chapterId": "ch5",
    "unitId": "u5_8",
    "type": "mcq",
    "question": "個人が土地建物を売却した場合、長期譲渡所得になるための原則的な要件はどれか。",
    "options": [
      "譲渡年1月1日現在の所有期間が5年超",
      "取得後に一度でも10年目の暦年に入ったこと",
      "譲渡日現在の所有期間が5年以上"
    ],
    "answer": 0,
    "explanation": "土地建物は売却年の1月1日現在で所有期間5年超が長期です。売却日ではなく年初の時点で判定します。贈与や相続で取得したときは、原則として被相続人等の取得日を引き継ぐ扱いも確認します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 54,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問54",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1440.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_8_2",
    "chapterId": "ch5",
    "unitId": "u5_8",
    "type": "binary",
    "question": "居住用財産を譲渡した場合の3,000万円特別控除は、要件を満たせば所有期間の長短にかかわらず適用できる。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。長期譲渡に限る制度ではありません。自己居住用であること、買主との関係、過去の特例適用等の要件を確認します。税率の軽減や買換えによる課税繰延べとは別制度です。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 55,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問55",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/joto/3302.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_8_3",
    "chapterId": "ch5",
    "unitId": "u5_8",
    "type": "binary",
    "question": "以前住んでいた家屋を売る場合、3,000万円特別控除の対象となる譲渡期限は、原則として住まなくなった日から3年を経過する日の属する年の12月31日までである。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。退去からちょうど3年後の日まででも、翌年3月15日まででもありません。期限の年末までという条件を読みます。取壊し後の敷地の売却などには追加の要件があります。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 55,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問55",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/joto/3302.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_8_4",
    "chapterId": "ch5",
    "unitId": "u5_8",
    "type": "mcq",
    "question": "取得費が不明の土地を4,000万円で売却した。概算取得費を適用するときの取得費はいくらか。",
    "options": [
      "600万円",
      "200万円",
      "400万円"
    ],
    "answer": 1,
    "explanation": "譲渡収入の5%なので4,000×0.05＝200万円です。実額取得費を使う場合との比較も必要です。売却代金そのものの5%であり、利益の5%ではありません。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 54,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問54",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "4000*0.05",
      "value": 200,
      "unit": "万円"
    },
    "lawsDate": null,
    "sourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/joto/3208.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_8_5",
    "chapterId": "ch5",
    "unitId": "u5_8",
    "type": "binary",
    "question": "相続税の取得費加算の特例の対象となる譲渡期間は、原則として相続開始の翌日から、相続税の申告期限の翌日以後3年を経過する日までである。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。一般に相続開始からおおむね3年10か月以内となりますが、正確には相続税申告期限を起点とする条件を読みます。相続で取得しただけで、相続税の納付等の要件なしに使えるわけではありません。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 54,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問54",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/joto/3267.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_8_6",
    "chapterId": "ch5",
    "unitId": "u5_8",
    "type": "binary",
    "question": "特定の居住用財産の買換え特例は、一定の要件下で譲渡益への課税を繰り延べる制度である。買換資産は、原則として譲渡資産の取得費を引き継ぐ一方、取得時期は引き継がない。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。譲渡益が非課税で消える制度ではありません。将来買換資産を譲渡したときの計算に取得費が引き継がれ、課税が繰り延べられます。取得費と取得時期で扱いが違う点を押さえます。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 55,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問55",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/joto/3355.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_8_7",
    "chapterId": "ch5",
    "unitId": "u5_8",
    "type": "mcq",
    "question": "自宅の譲渡価額7,000万円、取得費2,600万円、譲渡費用300万円。3,000万円特別控除の要件を満たすとき、控除後の課税譲渡所得はいくらか。所得控除は考えない。",
    "options": [
      "1,400万円",
      "4,100万円",
      "1,100万円"
    ],
    "answer": 2,
    "explanation": "7,000－2,600－300－3,000＝1,100万円です。取得費と売却のための費用の両方を引いてから特別控除を適用します。土地建物の長期譲渡所得をさらに2分の1にする計算ではありません。",
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
      "formula": "7000-2600-300-3000",
      "value": 1100,
      "unit": "万円"
    },
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
    "id": "q5_8_8",
    "chapterId": "ch5",
    "unitId": "u5_8",
    "type": "mcq",
    "question": "被相続人の居住用家屋等の空き家特例で、2024年以後の譲渡について相続等による取得者が3人以上の場合、各人の特別控除の上限は原則どれか。他の要件は満たす。",
    "options": [
      "2,000万円",
      "3,000万円",
      "1,000万円"
    ],
    "answer": 0,
    "explanation": "原則2,000万円です。通常の最高3,000万円という数字だけで判断せず、取得した相続人の数と譲渡時期による条件を確認します。売却代金・建築時期・耐震性等にも要件がある制度です。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 55,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問55",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/joto/3306.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_9_1",
    "chapterId": "ch5",
    "unitId": "u5_9",
    "type": "binary",
    "question": "土地の等価交換方式では、原則として土地所有者が土地を、デベロッパーが建設資金を拠出し、それぞれの出資割合等に応じて土地建物の権利を取得する。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。土地所有者が土地建物の全てを引き続き単独所有する方式ではありません。土地を拠出し、完成後の権利の一部を取得する仕組みを、建設協力金方式と区別します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 25,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問25",
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
      "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_9_2",
    "chapterId": "ch5",
    "unitId": "u5_9",
    "type": "mcq",
    "question": "入居予定の事業会社から建設資金を借り、その会社の要望に沿う建物を建設して賃貸する方式はどれか。",
    "options": [
      "等価交換方式",
      "建設協力金方式",
      "定期借地権方式"
    ],
    "answer": 1,
    "explanation": "建設協力金方式です。借りた建設協力金を賃料と相殺するなどで返す仕組みが一般的です。デベロッパーの出資と土地を交換する等価交換方式や、借地人が建物を建てる方式とは違います。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 25,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問25",
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
      "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_9_3",
    "chapterId": "ch5",
    "unitId": "u5_9",
    "type": "binary",
    "question": "土地の事業受託方式では、企画や管理等をデベロッパーに任せても、建設資金は原則として土地所有者が調達する。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。業務を委託することと、資金をデベロッパーが負担することは同じではありません。所有者の借入等の資金負担があるか、土地建物の権利が誰に残るかを整理すると方式を比較できます。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 25,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問25",
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
    "id": "q5_9_4",
    "chapterId": "ch5",
    "unitId": "u5_9",
    "type": "binary",
    "question": "定期借地権方式で借地人が自己資金等により建物を建てる場合、土地所有者は土地の所有権を維持して地代を受け取るのが基本である。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。土地を売却して代金を受け取る方式ではありません。借地人の建物所有と地主の土地所有を区別します。定期借地権の種類によって存続期間や契約方法、契約終了時の建物の扱いが異なります。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202405",
        "questionNumber": 11,
        "relationship": "related_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2024年5月公表分 問11",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_a.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。"
      }
    ],
    "examAlignment": "scope_supplement",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "lawsDate": null,
    "sourceUrls": [
      "https://laws.e-gov.go.jp/api/2/law_data/403AC0000000090_20230614_505AC0000000053",
      "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q5_9_5",
    "chapterId": "ch5",
    "unitId": "u5_9",
    "type": "mcq",
    "question": "物件価格3,000万円、年間家賃収入180万円、年間運営費45万円。表面利回りを収入÷価格、実質利回りを（収入－運営費）÷価格とすると、組合せはどれか。取得時諸費用等は無視する。",
    "options": [
      "表面4.5%・実質6%",
      "表面6%・実質1.5%",
      "表面6%・実質4.5%"
    ],
    "answer": 2,
    "explanation": "表面は180÷3,000×100＝6%、実質は（180－45）÷3,000×100＝4.5%。広告の表面利回りだけでは運営費を反映しません。空室や修繕等を見込む際にも、計算に含める費用の範囲を確認します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [],
    "examAlignment": "scope_supplement",
    "alignmentNote": "分析した公開3セットでは同じ論点の出題を確認できず、試験範囲の補強として収録。出題頻度は未確認。",
    "calculationCheck": {
      "formula": "(180-45)/3000*100",
      "value": 4.5,
      "unit": "%"
    },
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  }
];
