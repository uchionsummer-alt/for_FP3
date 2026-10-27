// 公開過去問の分析に基づく再構成問題。照合記録はreviews.json。
const FP3_CHAPTER_01 = [
  {
    "id": "q1_1",
    "chapterId": "ch1",
    "unitId": "u1_1",
    "type": "binary",
    "question": "税理士登録のないFPが、相談料を受け取らずに、顧客本人の確定申告書を反復継続して作成する行為は、原則として税理士法に抵触しない。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。税務書類の作成などの税理士業務は、原則として無償でも無登録では行えません。「無料なら可能」というひっかけを見抜きます。仮定の事例を使う一般的な税制説明とは区別します。",
    "revision": 3,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 1,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問1",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "previousLawsDate": "2024-04-01",
    "lawsDate": null,
    "sourceUrls": [
      "https://laws.e-gov.go.jp/api/2/law_data/326AC1000000237"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_1_2",
    "chapterId": "ch1",
    "unitId": "u1_1",
    "type": "binary",
    "question": "弁護士登録のないFPが、報酬を受けて、相続人の代理人として他の相続人と遺産分割紛争の和解交渉を業として行うことは、原則として認められない。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。報酬目的で法律事件の代理・和解等を業として扱うことは、弁護士法72条により原則禁止されます。FPによる相続の一般的な解説や専門家の紹介とは異なります。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202605",
        "questionNumber": 1,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2026年5月公表分 問1",
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
      "https://laws.e-gov.go.jp/api/2/law_data/324AC1000000205"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_1_3",
    "chapterId": "ch1",
    "unitId": "u1_1",
    "type": "mcq",
    "question": "投資助言・代理業の登録を受けていないFPの行為として、原則として登録が必要になるものはどれか。",
    "options": [
      "投資顧問契約に基づき、報酬を得て特定銘柄の売買判断を助言する",
      "相談者に証券会社の連絡先を紹介する",
      "公開資料を用いて株式の一般的な仕組みを解説する"
    ],
    "answer": 0,
    "explanation": "投資顧問契約に基づく有償の具体的な投資判断の助言には、原則として金融商品取引業の登録が必要です。公開資料を使っているかではなく、行為の内容と契約を判断します。一般的な制度説明や単なる紹介と区別しましょう。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 1,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問1",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      },
      {
        "paperId": "j3_202405",
        "questionNumber": 1,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2024年5月公表分 問1",
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
      "https://www.jafp.or.jp/confer/fpsoudan/business/"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_1_4",
    "chapterId": "ch1",
    "unitId": "u1_1",
    "type": "mcq",
    "question": "保険募集人等の登録のないFPが行う行為として、最も適切なものはどれか。",
    "options": [
      "顧客の告知内容を判断して保険会社に代わり契約を引き受ける",
      "変額年金保険の一般的な仕組みを説明する",
      "特定の変額保険の申込みを勧誘し、契約の締結を媒介する"
    ],
    "answer": 1,
    "explanation": "一般的な仕組みの説明は保険募集と区別されます。特定契約の締結の代理・媒介を行う保険募集には登録等が必要です。「FP資格がある」ことだけで募集できるわけではありません。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202505",
        "questionNumber": 1,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2025年5月公表分 問1",
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
      "https://www.jafp.or.jp/confer/fpsoudan/business/"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_1_5",
    "chapterId": "ch1",
    "unitId": "u1_1",
    "type": "binary",
    "question": "FPの職業倫理上、顧客との相談が終了すれば、在職中・受任中に知った顧客の資産情報について守秘義務を負わなくなる。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。相談や契約が終了しても、顧客情報をみだりに漏らしてよいことにはなりません。過去問では守秘義務そのものが問われています。本問では「終了後ならよい」という条件に変えて理解を確かめます。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 1,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問1",
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
      "https://www.jafp.or.jp/confer/fpsoudan/business/"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_2_1",
    "chapterId": "ch1",
    "unitId": "u1_2",
    "type": "mcq",
    "question": "年間給与収入720万円、所得税・住民税50万円、社会保険料90万円、生命保険料12万円。年間可処分所得はいくらか。",
    "options": [
      "630万円",
      "568万円",
      "580万円"
    ],
    "answer": 2,
    "explanation": "可処分所得＝収入－所得税・住民税－社会保険料です。720－50－90＝580万円。生命保険料は可処分所得を得た後の支出なので、ここでは差し引きません。給与所得控除とも区別します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 31,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問31",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "value": 580,
      "formula": "720-50-90",
      "unit": "万円"
    },
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
    "id": "q1_2_2",
    "chapterId": "ch1",
    "unitId": "u1_2",
    "type": "mcq",
    "question": "前年末金融資産600万円、運用利率年1%、当年の年間収支がマイナス40万円。金融資産残高を「前年末残高×（1＋利率）＋当年収支」で求めると、当年末残高はいくらか。",
    "options": [
      "566万円",
      "606万円",
      "565.6万円"
    ],
    "answer": 0,
    "explanation": "600×1.01－40＝566万円です。当年収支まで運用する（600－40）×1.01＝565.6万円は、本問の算式と異なります。赤字でも運用益は前年末残高に対して計算します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 31,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問31",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "value": 566,
      "formula": "600*1.01-40",
      "unit": "万円"
    },
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
    "id": "q1_2_3",
    "chapterId": "ch1",
    "unitId": "u1_2",
    "type": "mcq",
    "question": "毎年末に同額を積み立て、一定の利率で複利運用して10年後の目標額を準備する。目標額に乗じて毎年の積立額を求める係数はどれか。",
    "options": [
      "年金終価係数",
      "減債基金係数",
      "資本回収係数"
    ],
    "answer": 1,
    "explanation": "目標額→毎年の積立額は減債基金係数です。毎年の積立額→将来合計額なら年金終価係数、現在元本→毎年の取崩額・返済額なら資本回収係数です。入力と出力をセットで覚えます。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 31,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問31",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      },
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
    "id": "q1_2_4",
    "chapterId": "ch1",
    "unitId": "u1_2",
    "type": "binary",
    "question": "キャッシュフロー表では、家族の年齢や進学などのライフイベントと、将来の年間収支・金融資産残高を年次別に対応させる。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。進学や住宅購入などの支出時期を年次別に並べ、資金不足になる年を見つけます。特定時点の資産と負債を並べるバランスシートとは目的が異なります。",
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
    "id": "q1_2_5",
    "chapterId": "ch1",
    "unitId": "u1_2",
    "type": "binary",
    "question": "個人バランスシートの純資産を計算するとき、住宅ローンの年間返済額を、そのまま負債残高として資産合計から差し引く。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。バランスシートはある時点の残高の表なので、負債には住宅ローンの残高を記載します。年間返済額は年間収支の支出です。「残高」と「1年間の支払額」の混同に注意しましょう。",
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
    "id": "q1_3_1",
    "chapterId": "ch1",
    "unitId": "u1_3",
    "type": "binary",
    "question": "借入額・固定金利・返済期間が同じ場合、一般に元金均等返済の方が元利均等返済より返済当初の返済額は大きいが、総返済額は少なくなる。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。元金均等返済は元金を毎回同額返すため、借入残高が早く減ります。初期負担は大きい一方、利息の合計は少なくなります。元利均等は元金と利息の合計を一定にします。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 35,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問35",
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
      "https://www.jafp.or.jp/personal_finance/fresh/workbook/files/wb_part3.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_3_2",
    "chapterId": "ch1",
    "unitId": "u1_3",
    "type": "binary",
    "question": "元利均等返済では、金利が一定であれば毎回の返済額は一定だが、返済が進むほど返済額に占める利息の割合が低下する。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。残高が減ると残高に対する利息も減るため、一定の返済額の中で元金の割合が高まります。「毎回同じ元金を返す」のは元金均等返済です。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 35,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問35",
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
      "https://www.jafp.or.jp/personal_finance/fresh/workbook/files/wb_part3.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_3_3",
    "chapterId": "ch1",
    "unitId": "u1_3",
    "type": "mcq",
    "question": "フラット35（買取型）の基本的な仕組みの組合せとして、最も適切なものはどれか。",
    "options": [
      "変動金利・保証人不要",
      "全期間固定金利・保証人必要",
      "全期間固定金利・保証人不要"
    ],
    "answer": 2,
    "explanation": "フラット35は全期間固定金利型で、原則として保証人は不要です。固定期間選択型の住宅ローンとは区別します。借入条件を比較するときは、金利型と保証料・保証人の要否を別々に確認します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 35,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問35",
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
      "https://www.flat35.com/loan/lineup/flat35/index.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_3_4",
    "chapterId": "ch1",
    "unitId": "u1_3",
    "type": "binary",
    "question": "住宅ローンの繰上返済で、返済額軽減型は毎回の返済額を変えずに返済期間を短くする方法である。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。毎回の返済額をおおむね維持して期間を短縮するのは期間短縮型です。返済額軽減型は残りの期間を原則変えずに毎回の負担を軽くします。同額の繰上返済なら、一般に期間短縮型の方が利息軽減効果は大きくなります。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [],
    "examAlignment": "scope_supplement",
    "alignmentNote": "分析した公開3セットでは同じ論点の出題を確認できず、試験範囲の補強として収録。出題頻度は未確認。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/personal_finance/fresh/workbook/files/wb_part3.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_3_5",
    "chapterId": "ch1",
    "unitId": "u1_3",
    "type": "mcq",
    "question": "残高1,800万円、年利2.0%の住宅ローンの1か月分の利息を、残高×年利÷12で概算する。利息はいくらか。",
    "options": [
      "3万円",
      "36万円",
      "1万5,000円"
    ],
    "answer": 0,
    "explanation": "1,800万円×0.02÷12＝3万円です。36万円は1年分の単純な利息に当たります。月々の返済額全体とは異なり、返済元金の部分は含めません。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [],
    "examAlignment": "scope_supplement",
    "alignmentNote": "分析した公開3セットでは同じ論点の出題を確認できず、試験範囲の補強として収録。出題頻度は未確認。",
    "calculationCheck": {
      "value": 3,
      "formula": "1800*0.02/12",
      "unit": "万円"
    },
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/personal_finance/fresh/workbook/files/wb_part3.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_4_1",
    "chapterId": "ch1",
    "unitId": "u1_4",
    "type": "binary",
    "question": "日本政策金融公庫の教育一般貸付（国の教育ローン）は、固定金利型で、返済期間は最長20年である。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。借りた時点の金利が完済まで適用される固定金利です。最長返済期間は20年。変動金利や「最長15年」とする古い知識との混同に注意します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 35,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問35",
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
      "https://www.jfc.go.jp/n/faq/kyoqa_m.html",
      "https://www.jfc.go.jp/n/faq/kyoqa_m.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_4_2",
    "chapterId": "ch1",
    "unitId": "u1_4",
    "type": "mcq",
    "question": "国の教育ローンと日本学生支援機構の貸与奨学金について、原則として正しい借主の組合せはどれか。",
    "options": [
      "いずれも学校が借主",
      "教育ローンは保護者、貸与奨学金は学生本人",
      "教育ローンは学生本人、貸与奨学金は保護者"
    ],
    "answer": 1,
    "explanation": "国の教育ローンは主に保護者が借り入れ、日本学生支援機構の貸与奨学金は学生本人が借りて返還します。誰が返済義務を負うかが異なります。給付奨学金は要件を満たせば原則返還不要です。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [],
    "examAlignment": "scope_supplement",
    "alignmentNote": "分析した公開3セットでは同じ論点の出題を確認できず、試験範囲の補強として収録。出題頻度は未確認。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jfc.go.jp/n/faq/kyoqa_m.html",
      "https://www.jafp.or.jp/personal_finance/fresh/workbook/files/wb_part2.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_4_3",
    "chapterId": "ch1",
    "unitId": "u1_4",
    "type": "binary",
    "question": "国の教育ローンで、在学中に元金返済を据え置く場合、通常、据置期間中も利息を支払う。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。据置きは元金の返済を後に回す仕組みで、利息まで免除する制度ではありません。据置期間は返済期間に含まれる点も併せて確認します。元金と利息を分けて考えましょう。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 35,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問35",
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
      "https://www.jfc.go.jp/n/faq/kyoqa_m.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_4_4",
    "chapterId": "ch1",
    "unitId": "u1_4",
    "type": "mcq",
    "question": "国の教育ローンについて、借入条件に応じた増額特例がない場合、子ども1人当たりの通常の融資限度額はいくらか。",
    "options": [
      "450万円",
      "200万円",
      "350万円"
    ],
    "answer": 2,
    "explanation": "通常の限度額は子ども1人につき350万円です。450万円は一定の要件に該当する場合の上限です。350万円と450万円のどちらにも条件があることを押さえ、世帯単位の上限と混同しないようにします。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 35,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問35",
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
      "https://www.jfc.go.jp/n/finance/search/ippan.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_4_5",
    "chapterId": "ch1",
    "unitId": "u1_4",
    "type": "binary",
    "question": "国の教育ローンは、日本学生支援機構の奨学金を利用している場合でも、併用することができる。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。教育ローンと奨学金は併用可能です。入学前に必要なまとまった費用と、入学後の継続的な費用など、資金が必要な時期も踏まえて検討します。併用できることと、審査が不要になることは別です。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [],
    "examAlignment": "scope_supplement",
    "alignmentNote": "分析した公開3セットでは同じ論点の出題を確認できず、試験範囲の補強として収録。出題頻度は未確認。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jfc.go.jp/n/faq/kyoqa_m.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_5_1",
    "chapterId": "ch1",
    "unitId": "u1_5",
    "type": "binary",
    "question": "iDeCoの老齢給付金は、年金として受け取るほか、一時金としてまとめて受け取る方法を選べる。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。年金受取と一時金受取があり、運営管理機関によっては併用も可能です。一時金は退職所得、年金は公的年金等に係る雑所得として扱うのが基本で、受取方法によって課税の仕組みも異なります。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 4,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問4",
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
      "https://www.ideco-koushiki.jp/guide/structure.html",
      "https://www.ideco-koushiki.jp/guide/good.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_5_2",
    "chapterId": "ch1",
    "unitId": "u1_5",
    "type": "binary",
    "question": "国民年金の第3号被保険者は、本人に給与収入がなければ、iDeCoに加入することはできない。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。第3号被保険者もiDeCoの加入対象です。ただし、本人に所得税・住民税が課される所得がなければ、掛金の所得控除による節税効果を得られないことがあります。加入資格と節税効果は分けて判断します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 4,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問4",
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
      "https://www.ideco-koushiki.jp/guide/structure.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_5_3",
    "chapterId": "ch1",
    "unitId": "u1_5",
    "type": "mcq",
    "question": "iDeCoの掛金を本人が支払った場合の所得税の控除区分はどれか。",
    "options": [
      "小規模企業共済等掛金控除",
      "社会保険料控除",
      "個人年金保険料控除"
    ],
    "answer": 0,
    "explanation": "本人のiDeCo掛金は全額が小規模企業共済等掛金控除の対象です。国民年金基金の掛金は社会保険料控除、民間の税制適格個人年金保険の保険料は個人年金保険料控除です。似た名称を分類して覚えます。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 47,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問47",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1135.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_5_4",
    "chapterId": "ch1",
    "unitId": "u1_5",
    "type": "mcq",
    "question": "iDeCoの老齢給付金を原則60歳から受け取るために必要な、60歳までの通算加入者等期間はどれか。",
    "options": [
      "5年以上",
      "10年以上",
      "20年以上"
    ],
    "answer": 1,
    "explanation": "原則60歳で受給を開始するには通算加入者等期間10年以上が必要です。10年未満の場合は受給可能年齢が遅くなります。国民年金の受給資格期間も10年ですが、制度と数える期間は別です。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 4,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問4",
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
      "https://www.ideco-koushiki.jp/guide/structure.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_5_5",
    "chapterId": "ch1",
    "unitId": "u1_5",
    "type": "binary",
    "question": "中小企業退職金共済の掛金は、原則として全額を事業主が負担し、従業員に一部を負担させることはできない。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。中退共の掛金は事業主負担です。国民年金や厚生年金の保険料、従業員本人が拠出するiDeCo掛金と混同しないようにします。給付のための掛金を誰が負担するかが論点です。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 5,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問5",
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
      "https://laws.e-gov.go.jp/api/2/law_data/334AC0000000160"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_6_1",
    "chapterId": "ch1",
    "unitId": "u1_6",
    "type": "binary",
    "question": "健康保険の傷病手当金の支給期間は、同一の傷病について支給開始日から通算して最長1年6か月である。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。途中で就労し支給されない期間がある場合も含めて、暦上1年6か月で一律に打ち切るという意味ではありません。支給対象となる期間を通算します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 32,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問32",
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
      "https://www.kyoukaikenpo.or.jp/benefit/injury_and_sickness_allowance/"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_6_2",
    "chapterId": "ch1",
    "unitId": "u1_6",
    "type": "binary",
    "question": "傷病手当金の待期3日には、給与が支払われる有給休暇や土日・祝日の公休日は含まれない。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。業務外の傷病で労務不能の状態であれば、有給休暇や公休日も待期に含められます。連続3日間の待期が完成した後の4日目以降が支給対象です。待期と給与支払いによる支給調整を混同しないようにします。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 32,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問32",
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
      "https://www.kyoukaikenpo.or.jp/benefit/injury_and_sickness_allowance/"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_6_3",
    "chapterId": "ch1",
    "unitId": "u1_6",
    "type": "mcq",
    "question": "支給開始日以前12か月の各標準報酬月額の平均が30万円。無給で傷病手当金の対象となる1日当たりの金額は、原則いくらか。",
    "options": [
      "1万円",
      "5,000円",
      "6,667円"
    ],
    "answer": 2,
    "explanation": "1日当たりは30万円÷30×2/3＝6,666.66…円で、1円未満を四捨五入して6,667円です。単なる手取り給与の3分の2ではありません。標準報酬月額の平均を用いる点と端数処理を確認します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 32,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問32",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。"
      }
    ],
    "examAlignment": "scope_supplement",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "value": 6667,
      "formula": "Math.round(300000/30*2/3)",
      "unit": "円"
    },
    "lawsDate": null,
    "sourceUrls": [
      "https://www.kyoukaikenpo.or.jp/benefit/injury_and_sickness_allowance/"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_6_4",
    "chapterId": "ch1",
    "unitId": "u1_6",
    "type": "mcq",
    "question": "健康保険の任意継続の要件・期間の組合せとして、原則正しいものはどれか。",
    "options": [
      "退職前2か月以上継続加入・翌日から20日以内申出・最長2年",
      "退職前6か月以上継続加入・翌日から30日以内申出・最長2年",
      "退職前2か月以上継続加入・翌日から20日以内申出・最長3年"
    ],
    "answer": 0,
    "explanation": "原則は「継続2か月以上・20日以内・最長2年」です。退職後に自動的に加入が続くのではなく、期限内の申出が必要です。提出期限が休日の場合などの取扱いは保険者の案内で確認します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 32,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問32",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      },
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
    "lawsDate": null,
    "sourceUrls": [
      "https://www.kyoukaikenpo.or.jp/g3/sb3270/r147/",
      "https://www.kyoukaikenpo.or.jp/g3/sb3270/r147/"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_6_5",
    "chapterId": "ch1",
    "unitId": "u1_6",
    "type": "binary",
    "question": "健康保険の出産手当金は、単胎妊娠の場合、原則として出産の日以前42日から出産の翌日以後56日までの、休業し給与を受けられない期間を対象とする。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。予定日より遅れた場合は予定日以前42日から実際の出産までの期間も含めます。多胎妊娠の産前は98日です。被扶養者も受けられる家族出産育児一時金とは異なる給付です。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [],
    "examAlignment": "scope_supplement",
    "alignmentNote": "分析した公開3セットでは同じ論点の出題を確認できず、試験範囲の補強として収録。出題頻度は未確認。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.kyoukaikenpo.or.jp/benefit/childbirth/001"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_7_1",
    "chapterId": "ch1",
    "unitId": "u1_7",
    "type": "binary",
    "question": "雇用保険の基本手当は、原則として離職前2年間に被保険者期間が通算12か月以上あり、働く意思と能力があるのに就職できない等の要件を満たす人が対象となる。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。倒産・解雇等の特定受給資格者などは、離職前1年間に通算6か月以上という別の要件があります。自動的に離職者全員へ支給されるものではありません。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 2,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問2",
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
      "https://www.hellowork.mhlw.go.jp/insurance/insurance_basicbenefit.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_7_2",
    "chapterId": "ch1",
    "unitId": "u1_7",
    "type": "binary",
    "question": "雇用保険の基本手当の待期は、求職申込み後、失業している日が通算7日に満たない間であり、自己都合離職の給付制限とは別に設けられている。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。待期7日と、その後に置かれることがある給付制限は別です。待期は会社都合等でも生じます。古い過去問の給付制限期間を、そのまま2026年用に暗記しないことも大切です。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 2,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問2",
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
      "https://laws.e-gov.go.jp/api/2/law_data/349AC0000000116_20251001_506AC0000000026"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_7_3",
    "chapterId": "ch1",
    "unitId": "u1_7",
    "type": "mcq",
    "question": "高年齢雇用継続基本給付金の対象となる賃金低下の基準は、原則として60歳時点の賃金月額の何%未満か。被保険者期間等の他の要件を満たすものとする。",
    "options": [
      "65%未満",
      "75%未満",
      "85%未満"
    ],
    "answer": 1,
    "explanation": "原則75%未満です。60歳以上65歳未満、被保険者期間5年以上等の要件も確認します。60歳到達時期等により最大支給率は異なりますが、「賃金低下75%未満」の基準と最大支給率は別です。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 2,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問2",
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
      "https://www.hellowork.mhlw.go.jp/insurance/insurance_continue.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_7_4",
    "chapterId": "ch1",
    "unitId": "u1_7",
    "type": "binary",
    "question": "2025年4月1日以後に60歳到達等の要件を満たす人について、高年齢雇用継続給付の最大支給率は各月の賃金の15%である。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。対象となる人の最大支給率は10%に見直されました。2025年3月31日以前に60歳到達等の要件を満たした人の最大15%という経過的な扱いと区別します。年齢到達日等が指定された問題では日付を先に確認します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 2,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問2",
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
      "https://www.hellowork.mhlw.go.jp/insurance/insurance_continue.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_7_5",
    "chapterId": "ch1",
    "unitId": "u1_7",
    "type": "mcq",
    "question": "育児休業給付金の原則的な支給率の組合せとして正しいものはどれか。追加の出生後休業支援給付金等は考慮しない。",
    "options": [
      "全期間80%",
      "休業開始から180日まで50%、181日目以降67%",
      "休業開始から180日まで67%、181日目以降50%"
    ],
    "answer": 2,
    "explanation": "原則は180日まで67%、その後50%です。2025年に始まった追加給付等を含む率とは区別します。問題に「追加給付を除く」とある場合は、育児休業給付金自体の基本率で答えます。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [],
    "examAlignment": "scope_supplement",
    "alignmentNote": "分析した公開3セットでは同じ論点の出題を確認できず、試験範囲の補強として収録。出題頻度は未確認。",
    "lawsDate": null,
    "sourceUrls": [
      "https://laws.e-gov.go.jp/api/2/law_data/349AC0000000116_20251001_506AC0000000026"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_8_1",
    "chapterId": "ch1",
    "unitId": "u1_8",
    "type": "binary",
    "question": "労災保険の保険料は、原則として事業主と労働者が折半して負担する。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。労災保険料は原則全額事業主負担です。雇用保険料には労働者負担があるため、同じ労働保険でも負担の仕組みを分けて覚えます。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 2,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問2",
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
      "https://laws.e-gov.go.jp/api/2/law_data/344AC0000000084"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_8_2",
    "chapterId": "ch1",
    "unitId": "u1_8",
    "type": "binary",
    "question": "労災保険は、業務上の災害だけでなく、所定の要件に該当する通勤災害も保険給付の対象とする。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。通勤災害も対象ですが、私的な寄り道などの逸脱・中断には条件があります。業務外のすべてのけがを労災で扱うのではなく、業務・通勤・私生活のどれに該当するかを確認します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 2,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問2",
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
      "https://laws.e-gov.go.jp/api/2/law_data/322AC0000000050_20250601_504AC0000000068"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_8_3",
    "chapterId": "ch1",
    "unitId": "u1_8",
    "type": "mcq",
    "question": "労災保険の休業補償給付は、所定の要件を満たす休業について、原則として何日目から支給されるか。",
    "options": [
      "4日目",
      "初日",
      "3日目"
    ],
    "answer": 0,
    "explanation": "原則4日目からです。最初の3日間は労災保険の休業補償給付の対象外で、業務災害の場合は労働基準法の事業主による休業補償を検討します。通勤災害の場合とは区別します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [],
    "examAlignment": "scope_supplement",
    "alignmentNote": "分析した公開3セットでは同じ論点の出題を確認できず、試験範囲の補強として収録。出題頻度は未確認。",
    "lawsDate": null,
    "sourceUrls": [
      "https://laws.e-gov.go.jp/api/2/law_data/322AC0000000050_20250601_504AC0000000068"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_8_4",
    "chapterId": "ch1",
    "unitId": "u1_8",
    "type": "mcq",
    "question": "給付基礎日額1万円、支給対象日数10日の労災の休業補償給付はいくらか。休業特別支給金は含めない。",
    "options": [
      "10万円",
      "6万円",
      "8万円"
    ],
    "answer": 1,
    "explanation": "1万円×60%×10日＝6万円です。特別支給金の20%を含めた合計なら8万円ですが、本問は「含めない」と指定しています。給付の範囲と、待期後の支給対象日数を先に確認します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [],
    "examAlignment": "scope_supplement",
    "alignmentNote": "分析した公開3セットでは同じ論点の出題を確認できず、試験範囲の補強として収録。出題頻度は未確認。",
    "calculationCheck": {
      "value": 6,
      "formula": "1*0.6*10",
      "unit": "万円"
    },
    "lawsDate": null,
    "sourceUrls": [
      "https://laws.e-gov.go.jp/api/2/law_data/322AC0000000050_20250601_504AC0000000068"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_8_5",
    "chapterId": "ch1",
    "unitId": "u1_8",
    "type": "binary",
    "question": "労災保険は、原則としてパート・アルバイトなどの雇用形態にかかわらず、適用事業に使用される労働者を対象とする。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。「正社員だけ」という要件ではありません。事業主や役員等は、労働者としての適用とは別に特別加入等を確認します。労災と雇用保険の適用要件を混同しないようにしましょう。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [],
    "examAlignment": "scope_supplement",
    "alignmentNote": "分析した公開3セットでは同じ論点の出題を確認できず、試験範囲の補強として収録。出題頻度は未確認。",
    "lawsDate": null,
    "sourceUrls": [
      "https://laws.e-gov.go.jp/api/2/law_data/322AC0000000050_20250601_504AC0000000068"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_9_1",
    "chapterId": "ch1",
    "unitId": "u1_9",
    "type": "binary",
    "question": "公的介護保険の第2号被保険者は、原則として市町村等に住所を有する40歳以上65歳未満の医療保険加入者である。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。第1号は65歳以上、第2号は40歳以上65歳未満の医療保険加入者です。40歳以上の全員とせず、医療保険加入という条件も確認します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 32,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問32",
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
      "https://www.mhlw.go.jp/content/001512842.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_9_2",
    "chapterId": "ch1",
    "unitId": "u1_9",
    "type": "binary",
    "question": "52歳の介護保険第2号被保険者が交通事故によって要介護状態になれば、その原因にかかわらず公的介護保険の給付を受けられる。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。第2号は要介護状態等の原因が、加齢に伴う16の特定疾病に該当する場合に限られます。交通事故が原因というだけでは対象になりません。65歳以上の第1号は原因を問わない点が異なります。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 32,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問32",
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
      "https://www.mhlw.go.jp/content/001512842.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_9_3",
    "chapterId": "ch1",
    "unitId": "u1_9",
    "type": "mcq",
    "question": "介護保険の第1号被保険者の年齢の範囲として、原則正しいものはどれか。",
    "options": [
      "40歳以上60歳未満",
      "40歳以上65歳未満",
      "65歳以上"
    ],
    "answer": 2,
    "explanation": "第1号は65歳以上です。年金の第1号被保険者の「20歳以上60歳未満」等とは、同じ第1号という名称でも年齢が違います。どの制度の第1号かを確認します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 32,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問32",
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
      "https://www.mhlw.go.jp/content/001512842.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_9_4",
    "chapterId": "ch1",
    "unitId": "u1_9",
    "type": "binary",
    "question": "公的介護保険のサービス利用者の自己負担割合は、原則1割だが、第1号被保険者のうち一定以上の所得者は2割または3割となる。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。全員一律1割ではありません。施設を利用する場合の食費・居住費等は、介護サービス費の自己負担割合とは別に負担を検討します。公的医療保険の負担割合とも区別します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [],
    "examAlignment": "scope_supplement",
    "alignmentNote": "分析した公開3セットでは同じ論点の出題を確認できず、試験範囲の補強として収録。出題頻度は未確認。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.mhlw.go.jp/content/001512842.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_9_5",
    "chapterId": "ch1",
    "unitId": "u1_9",
    "type": "mcq",
    "question": "介護保険の保険者として正しいものはどれか。",
    "options": [
      "市町村・特別区",
      "日本年金機構",
      "全国健康保険協会"
    ],
    "answer": 0,
    "explanation": "介護保険の保険者は市町村・特別区です。医療保険加入者から介護保険料を徴収する仕組みがあっても、協会けんぽが介護保険の保険者になるわけではありません。保険料の徴収と制度の保険者を区別します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [],
    "examAlignment": "scope_supplement",
    "alignmentNote": "分析した公開3セットでは同じ論点の出題を確認できず、試験範囲の補強として収録。出題頻度は未確認。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.mhlw.go.jp/content/001512842.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_10",
    "chapterId": "ch1",
    "unitId": "u1_10",
    "type": "mcq",
    "question": "老齢基礎年金の受給資格期間は、原則として保険料納付済期間・免除期間・合算対象期間等を合計して何年以上必要か。",
    "options": [
      "25年以上",
      "10年以上",
      "20年以上"
    ],
    "answer": 1,
    "explanation": "原則10年以上です。年金額が満額になる40年（480月）とは異なります。「受け取るための最低期間」と「満額になる納付月数」を分けて覚えます。",
    "revision": 3,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 3,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問3",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。"
      }
    ],
    "examAlignment": "scope_supplement",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "previousLawsDate": "2024-04-01",
    "lawsDate": null,
    "sourceUrls": [
      "https://laws.e-gov.go.jp/api/2/law_data/334AC0000000141_20260401_507AC0000000074"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_10_2",
    "chapterId": "ch1",
    "unitId": "u1_10",
    "type": "binary",
    "question": "自営業者で国民年金の第1号被保険者である夫に扶養されている20歳以上60歳未満の妻は、原則として第3号被保険者となる。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。第3号は原則、第2号被保険者に扶養される配偶者です。夫が自営業の第1号なら、妻も原則第1号となり、自分の保険料の納付が必要です。性別ではなく配偶者の被保険者区分で判断します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 3,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問3",
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
      "https://laws.e-gov.go.jp/api/2/law_data/334AC0000000141_20260401_507AC0000000074"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_10_3",
    "chapterId": "ch1",
    "unitId": "u1_10",
    "type": "binary",
    "question": "国民年金の学生納付特例制度の所得審査では、原則として学生本人だけでなく世帯主の前年所得も基準に含める。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。学生納付特例は学生本人の前年所得を審査し、家族の所得の多寡は問いません。一般の保険料免除制度等とは審査する所得の範囲が異なります。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 3,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問3",
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
      "https://www.nenkin.go.jp/service/kokunen/menjo/20150514.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_10_4",
    "chapterId": "ch1",
    "unitId": "u1_10",
    "type": "mcq",
    "question": "1962年4月2日以後生まれの人が老齢基礎年金を60か月繰り上げて受給する場合、減額率はいくらか。",
    "options": [
      "30%",
      "42%",
      "24%"
    ],
    "answer": 2,
    "explanation": "1か月当たり0.4%×60か月＝24%です。1962年4月1日以前生まれの人の0.5%と混同しないよう、生年月日の条件を確認します。減額は生涯続きます。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 33,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問33",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      },
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
      "value": 24,
      "formula": "0.4*60",
      "unit": "%"
    },
    "lawsDate": null,
    "sourceUrls": [
      "https://www.nenkin.go.jp/service/jukyu/roureinenkin/kuriage-kurisage/20140421-01.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_10_5",
    "chapterId": "ch1",
    "unitId": "u1_10",
    "type": "binary",
    "question": "70歳0か月で老齢基礎年金の繰下げ支給を申し出て、65歳から60か月繰り下げた場合の増額率は42%である。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。1か月当たり0.7%×60か月＝42%。繰上げの減額率0.4%と対で覚えます。老齢基礎年金と老齢厚生年金は別々に繰り下げることも可能です。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 33,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問33",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      },
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
    "lawsDate": null,
    "sourceUrls": [
      "https://www.nenkin.go.jp/service/jukyu/roureinenkin/kuriage-kurisage/20140421-02.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_10_6",
    "chapterId": "ch1",
    "unitId": "u1_10",
    "type": "mcq",
    "question": "付加保険料を120か月納付した人の付加年金の年額は、原則いくらか。繰上げ・繰下げはしないものとする。",
    "options": [
      "2万4,000円",
      "4万8,000円",
      "9万6,000円"
    ],
    "answer": 0,
    "explanation": "付加年金の年額＝200円×納付月数です。200円×120月＝24,000円。月額400円は納める付加保険料であり、年金額の計算に使う200円とは異なります。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 33,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問33",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "value": 24000,
      "formula": "200*120",
      "unit": "円"
    },
    "lawsDate": null,
    "sourceUrls": [
      "https://www.nenkin.go.jp/service/kokunen/hokenryo/fukanofu.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_10_7",
    "chapterId": "ch1",
    "unitId": "u1_10",
    "type": "binary",
    "question": "遺族厚生年金の額は、原則として死亡した人の老齢厚生年金の報酬比例部分の4分の3である。中高齢寡婦加算等は考慮しない。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。老齢基礎年金まで含めた全額の4分の3ではありません。短期要件では被保険者期間300月未満の場合の最低保障等がありますが、本問では基準となる部分と割合を問います。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 34,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問34",
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
      "https://www.nenkin.go.jp/service/jukyu/seido/izokunenkin/jukyu-yoken/20150424.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_10_8",
    "chapterId": "ch1",
    "unitId": "u1_10",
    "type": "mcq",
    "question": "遺族基礎年金を受け取ることができる遺族の基本的な範囲はどれか。他の支給要件は満たすものとする。",
    "options": [
      "子のある妻だけで、夫は対象外",
      "子のある配偶者、または子",
      "配偶者であれば子の有無を問わない"
    ],
    "answer": 1,
    "explanation": "基本は「子のある配偶者」または「子」です。妻だけでなく夫も対象になり得ます。子は原則18歳到達年度末まで、一定の障害状態なら20歳未満などの条件があります。子のない配偶者の遺族厚生年金とは区別します。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 34,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問34",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      },
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
    "id": "q1_10_9",
    "chapterId": "ch1",
    "unitId": "u1_10",
    "type": "binary",
    "question": "学生納付特例の承認期間は、追納しなくても老齢基礎年金の受給資格期間と年金額の両方に、保険料を全額納めた期間と同じように算入される。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。受給資格期間には含まれますが、追納しなければ年金額には反映されません。「資格の10年」と「年金額の月数」を分けて整理しましょう。追納できる期間にも期限があります。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 3,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問3",
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
      "https://www.nenkin.go.jp/service/kokunen/menjo/20150514.html"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_10_10",
    "chapterId": "ch1",
    "unitId": "u1_10",
    "type": "mcq",
    "question": "日本国内に住所を有し、国民年金の第2号・第3号に該当しない人について、第1号被保険者となる年齢の原則的な範囲はどれか。",
    "options": [
      "20歳以上65歳未満",
      "18歳以上60歳未満",
      "20歳以上60歳未満"
    ],
    "answer": 2,
    "explanation": "原則20歳以上60歳未満です。65歳は老齢基礎年金の原則受給開始年齢です。加入する年齢と受け取る年齢を混同しないようにします。任意加入や適用除外は別に確認する事項です。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 3,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問3",
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
      "https://laws.e-gov.go.jp/api/2/law_data/334AC0000000141_20260401_507AC0000000074"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q1_5_6",
    "chapterId": "ch1",
    "unitId": "u1_5",
    "type": "mcq",
    "question": "2026年4月1日現在、公務員がiDeCoに加入する場合の掛金の原則的な上限として適切なものはどれか。他制度との合算による引下げ等の事情はない。",
    "options": [
      "月額2万円・年24万円",
      "月額2万3,000円・年27万6,000円",
      "月額1万2,000円・年14万4,000円"
    ],
    "answer": 0,
    "explanation": "原則月額2万円・年24万円です。2024年公開問題の法令基準日（2023年4月1日）では月額1万2,000円でしたが、2024年12月の改正後の上限を確認します。後施行の拠出限度額引上げの予定と、今回の基準日を混在させないようにします。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 4,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問4",
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
      "https://www.jafp.or.jp/personal_finance/fresh/young_handbook/files/p18-25.pdf?v=202602240900"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  }
];
