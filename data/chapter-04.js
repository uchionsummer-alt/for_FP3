// 公開過去問の分析に基づく再構成問題。照合記録はreviews.json。
const FP3_CHAPTER_04 = [
  {
    "id": "q4_1",
    "chapterId": "ch4",
    "unitId": "u4_1",
    "type": "binary",
    "question": "所得税法では所得を10種類に分け、各所得の性質に応じて計算する。雑所得は他の9種類に当てはまらない所得を扱う。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。給与・退職・事業・不動産・利子・配当・山林・譲渡・一時・雑の10種類です。所得の種類によって必要経費、特別控除、損益通算や課税方式が異なるため、先に所得を分類します。",
    "revision": 3,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 16,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問16",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2011.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_1_2",
    "chapterId": "ch4",
    "unitId": "u4_1",
    "type": "mcq",
    "question": "税の区分の組合せとして正しいものはどれか。",
    "options": [
      "所得税・登録免許税は国税、住民税・固定資産税は地方税",
      "所得税・住民税は国税、登録免許税は地方税",
      "固定資産税は国税、所得税は地方税"
    ],
    "answer": 0,
    "explanation": "所得税・登録免許税は国税、住民税・固定資産税は地方税です。国税か地方税かは税の用途ではなく、誰が課す税かで区別します。不動産分野の取得・保有にかかる税の整理にもつながります。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 16,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問16",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1000.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_1_3",
    "chapterId": "ch4",
    "unitId": "u4_1",
    "type": "mcq",
    "question": "総所得金額500万円、所得控除100万円。課税所得に適用する税率20%、速算控除額427,500円とすると、所得税額はいくらか。税額控除・復興特別所得税等は考慮しない。",
    "options": [
      "80万円",
      "37万2,500円",
      "57万2,500円"
    ],
    "answer": 1,
    "explanation": "課税所得＝500－100＝400万円。税額＝4,000,000円×20%－427,500円＝372,500円です。所得控除を引かずに税率を掛けたり、速算控除額を引き忘れたりしないようにします。",
    "revision": 2,
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
    "calculationCheck": {
      "formula": "(5000000-1000000)*0.2-427500",
      "value": 372500,
      "unit": "円"
    },
    "lawsDate": null,
    "sourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2260.htm",
      "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_1_4",
    "chapterId": "ch4",
    "unitId": "u4_1",
    "type": "binary",
    "question": "源泉分離課税の所得は、他の所得と分けて確定申告することにより納税が完結する。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。源泉分離課税は支払時の源泉徴収で課税が完結し、通常、確定申告に含めません。申告して他の所得と別の税率等で計算する申告分離課税と区別します。預金利息と特定公社債利子で比較すると整理しやすくなります。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 16,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問16",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1310.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_1_5",
    "chapterId": "ch4",
    "unitId": "u4_1",
    "type": "binary",
    "question": "一般的な所得税の計算では、所得控除を差し引いて課税所得を求めてから税率を適用し、その後に税額控除を差し引く。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。所得控除は税率を掛ける前の所得から、税額控除は計算した税額から差し引きます。同じ控除額でも効果は同じではありません。生命保険料控除と住宅ローン控除の位置を区別します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 47,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問47",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1000.htm",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1200.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_2_1",
    "chapterId": "ch4",
    "unitId": "u4_2",
    "type": "mcq",
    "question": "2025年分の給与収入が150万円で、給与所得控除額は65万円とする。他の調整がない場合、給与所得の金額はいくらか。",
    "options": [
      "150万円",
      "55万円",
      "85万円"
    ],
    "answer": 2,
    "explanation": "給与所得＝給与収入－給与所得控除＝150－65＝85万円です。基礎控除などの所得控除は、この後で課税所得を求める段階で差し引きます。給与収入と給与所得は同じ金額ではありません。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 17,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問17",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "150-65",
      "value": 85,
      "unit": "万円"
    },
    "lawsDate": null,
    "sourceUrls": [
      "https://www.nta.go.jp/users/gensen/2025kiso/index.htm",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1400.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_2_2",
    "chapterId": "ch4",
    "unitId": "u4_2",
    "type": "binary",
    "question": "給与所得控除は給与所得を計算するための控除であり、医療費控除等と同じ所得控除の1つではない。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。給与所得控除は収入から給与所得を計算する段階の控除です。給与所得等を合計した後に差し引く基礎控除・社会保険料控除などとは段階が異なります。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 17,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問17",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1400.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_2_3",
    "chapterId": "ch4",
    "unitId": "u4_2",
    "type": "mcq",
    "question": "勤続26年5か月の一般従業員が退職する。他の退職金・障害退職はない。退職所得控除額はいくらか。20年超は800万円＋70万円×（勤続年数－20年）で計算する。",
    "options": [
      "1,290万円",
      "1,890万円",
      "1,220万円"
    ],
    "answer": 0,
    "explanation": "1年未満の勤続年数は切り上げるため27年です。800＋70×（27－20）＝1,290万円。月数を切り捨てた1,220万円や、全期間に70万円を掛ける計算は誤りです。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 46,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問46",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "800+70*(27-20)",
      "value": 1290,
      "unit": "万円"
    },
    "lawsDate": null,
    "sourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1420.htm",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1420.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_2_4",
    "chapterId": "ch4",
    "unitId": "u4_2",
    "type": "mcq",
    "question": "勤続30年の一般従業員が退職金2,500万円を受け取る。他の退職金や障害退職はなく、退職所得控除1,500万円とする。退職所得の金額はいくらか。",
    "options": [
      "1,750万円",
      "500万円",
      "1,000万円"
    ],
    "answer": 1,
    "explanation": "退職所得＝（2,500－1,500）×1/2＝500万円です。控除後の金額を半分にする順序です。役員等の短期勤続や短期退職手当等には2分の1課税の例外があるため、条件を確認します。",
    "revision": 2,
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
      },
      {
        "paperId": "g3_202605",
        "questionNumber": 46,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問46",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "(2500-1500)/2",
      "value": 500,
      "unit": "万円"
    },
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
    "id": "q4_2_5",
    "chapterId": "ch4",
    "unitId": "u4_2",
    "type": "binary",
    "question": "障害者になったことが直接の原因で退職した場合、退職所得控除額は通常の方法による金額に100万円を加える。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。障害退職には100万円の加算があります。すべての退職で加算されるのではなく、障害者になったことが直接の原因という条件を確認します。同年・過去年の退職金による調整も別の論点です。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202405",
        "questionNumber": 16,
        "relationship": "related_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2024年5月公表分 問16",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1420.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_3_1",
    "chapterId": "ch4",
    "unitId": "u4_3",
    "type": "mcq",
    "question": "商品販売業の売上600万円、期首棚卸60万円、仕入400万円、期末棚卸80万円、その他経費120万円。青色控除前の事業所得はいくらか。",
    "options": [
      "140万円",
      "180万円",
      "100万円"
    ],
    "answer": 2,
    "explanation": "売上原価＝60＋400－80＝380万円。所得＝600－380－120＝100万円です。売れずに残った期末在庫は、その年の売上原価から除きます。期首と期末を逆にしないようにします。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 18,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問18",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "600-(60+400-80)-120",
      "value": 100,
      "unit": "万円"
    },
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1350.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_3_2",
    "chapterId": "ch4",
    "unitId": "u4_3",
    "type": "binary",
    "question": "商品の売上原価は、原則として「期末商品棚卸高＋当年仕入高－期首商品棚卸高」で求める。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。正しくは期首棚卸高＋当年仕入高－期末棚卸高です。年初の在庫と仕入れた商品から、年末に残る分を引くと、その年に売れた商品の原価になります。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 18,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問18",
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
    "id": "q4_3_3",
    "chapterId": "ch4",
    "unitId": "u4_3",
    "type": "binary",
    "question": "事業に関係する借入金であれば、返済した元本も、支払利息と同様にその全額を必要経費にできる。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。借入元本の返済は負債を減らす支払いであり、必要経費ではありません。事業に対応する利息は必要経費を検討します。支払額のすべてが費用ではないことは、家計の残高表や不動産所得でも共通です。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202505",
        "questionNumber": 11,
        "relationship": "related_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2025年5月公表分 問11",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1350.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_3_4",
    "chapterId": "ch4",
    "unitId": "u4_3",
    "type": "mcq",
    "question": "事業所得の青色申告特別控除を最高65万円とするための説明として適切なものはどれか。",
    "options": [
      "55万円控除の要件に加え、期限内e-Tax申告等の所定要件を満たす",
      "白色申告で領収書を保存すれば65万円",
      "青色申告の届出さえすれば記帳なしでも65万円"
    ],
    "answer": 0,
    "explanation": "複式簿記、貸借対照表等の添付、期限内申告などの55万円控除の要件に加え、e-Taxによる申告または優良な電子帳簿保存等の要件が必要です。青色申告を選んだだけでは65万円にはなりません。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 50,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問50",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2072.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_3_5",
    "chapterId": "ch4",
    "unitId": "u4_3",
    "type": "binary",
    "question": "青色申告をできる人は、原則として不動産所得・事業所得・山林所得のある人であり、給与所得だけの人は対象とならない。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。青色申告の対象所得は「不・事・山」です。雑所得も対象ではありません。損益通算できる所得の種類と似ていますが、譲渡所得が含まれるかなどに違いがあるため区別します。",
    "revision": 2,
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
    "lawsDate": null,
    "sourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2070.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_4_1",
    "chapterId": "ch4",
    "unitId": "u4_4",
    "type": "binary",
    "question": "アパートの貸付けが事業的規模で行われていても、原則として所得の区分は不動産所得である。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。規模が大きくなっただけで事業所得に変わるわけではありません。規模は青色申告特別控除や専従者給与等の扱いに関係しますが、所得の種類とは別に判断します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 18,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問18",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1370.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_4_2",
    "chapterId": "ch4",
    "unitId": "u4_4",
    "type": "mcq",
    "question": "家賃収入240万円、借入利息30万円、管理費45万円、減価償却費35万円、借入元本返済50万円。青色控除前の不動産所得はいくらか。他の経費はない。",
    "options": [
      "80万円",
      "130万円",
      "165万円"
    ],
    "answer": 1,
    "explanation": "必要経費は30＋45＋35＝110万円なので、240－110＝130万円です。元本返済50万円は経費にしません。現金の支出と、税務上の必要経費は一致しないことがあります。",
    "revision": 2,
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
    "calculationCheck": {
      "formula": "240-30-45-35",
      "value": 130,
      "unit": "万円"
    },
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
    "id": "q4_4_3",
    "chapterId": "ch4",
    "unitId": "u4_4",
    "type": "binary",
    "question": "賃貸契約で受け取った敷金は、返還する義務のある部分も含め、受取時に全額を不動産所得の総収入金額へ計上する。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。返還しないことが確定した部分は収入を検討しますが、預かっているだけで返還義務のある部分は通常収入にしません。「礼金」「敷金」の名称だけでなく、返還義務の有無で判断します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [],
    "examAlignment": "scope_supplement",
    "alignmentNote": "分析した公開3セットでは同じ論点の出題を確認できず、試験範囲の補強として収録。出題頻度は未確認。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1370.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_4_4",
    "chapterId": "ch4",
    "unitId": "u4_4",
    "type": "binary",
    "question": "賃貸していた建物と敷地を個人が売却したときの売却益は、原則として不動産所得ではなく譲渡所得として扱う。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。不動産所得は貸付けによる家賃等であり、土地建物の売却益は譲渡所得です。所有している物が同じでも、貸したのか売ったのかで所得区分が変わります。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 19,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問19",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1370.htm",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1440.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_4_5",
    "chapterId": "ch4",
    "unitId": "u4_4",
    "type": "binary",
    "question": "土地の取得価額は、建物と同じように毎年の減価償却費として必要経費に算入する。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。土地は一般に時間の経過で価値が減る減価償却資産ではありません。建物の取得費は耐用年数等に応じた減価償却を検討します。土地と建物を一括購入しても、区分して計算する必要があります。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [],
    "examAlignment": "scope_supplement",
    "alignmentNote": "分析した公開3セットでは同じ論点の出題を確認できず、試験範囲の補強として収録。出題頻度は未確認。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2100.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_5_1",
    "chapterId": "ch4",
    "unitId": "u4_5",
    "type": "mcq",
    "question": "普通預金の利息と国債の利子の課税方式の原則的な組合せとして適切なものはどれか。",
    "options": [
      "両方とも総合課税のみ",
      "普通預金は申告分離、国債は必ず総合課税",
      "普通預金は源泉分離、国債は申告分離で申告不要を選択可能"
    ],
    "answer": 2,
    "explanation": "普通預金の利息は通常源泉分離課税です。国債等の特定公社債の利子は申告分離課税の対象ですが、申告しない選択もできます。源泉徴収されることだけで、両者を同じ課税方式と決めないようにします。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 46,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問46",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      },
      {
        "paperId": "g3_202605",
        "questionNumber": 16,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問16",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1310.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_5_2",
    "chapterId": "ch4",
    "unitId": "u4_5",
    "type": "binary",
    "question": "通常の預貯金の利子所得の金額は、原則として源泉徴収前の利子の収入金額そのものとなる。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。利子所得では、一般に必要経費や給与所得控除を差し引いて所得を求める仕組みではありません。税引後に振り込まれた額は収入金額そのものではないため、源泉徴収前か後かを確認します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 46,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問46",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1310.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_5_3",
    "chapterId": "ch4",
    "unitId": "u4_5",
    "type": "binary",
    "question": "国内法人の配当について配当控除を受けるには、原則として総合課税で申告する必要がある。申告分離課税で申告した上場株式等の配当には配当控除を適用できない。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。配当控除は国内法人段階と個人段階の二重課税を調整する税額控除です。申告不要・申告分離・総合の選択と、配当控除を適用できる範囲は区別して確認します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 47,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問47",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1330.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_5_4",
    "chapterId": "ch4",
    "unitId": "u4_5",
    "type": "binary",
    "question": "非上場株式の配当は、金額の大小に関係なく、所得税の確定申告不要制度を選ぶことができる。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。非上場株式配当には少額配当等の条件があり、無条件に申告不要とはできません。上場株式の配当等と同じ選択肢が常にあるわけではなく、株式の区分と配当額・計算期間を確認します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 17,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問17",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1330.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_5_5",
    "chapterId": "ch4",
    "unitId": "u4_5",
    "type": "mcq",
    "question": "特定公社債の利子の源泉徴収前の金額が2万円だった。税率を所得税等15.315%、住民税5%として、税引後受取額はいくらか。円未満端数は生じない。",
    "options": [
      "15,937円",
      "16,000円",
      "16,937円"
    ],
    "answer": 0,
    "explanation": "合計税率は20.315%。20,000×（1－0.20315）＝15,937円です。住民税5%や復興特別所得税を落とした計算に注意します。後年施行の特別所得税の名称・率は混在させません。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 46,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問46",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。"
      }
    ],
    "examAlignment": "scope_supplement",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "20000*(1-0.20315)",
      "value": 15937,
      "unit": "円"
    },
    "lawsDate": null,
    "sourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1310.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_6_1",
    "chapterId": "ch4",
    "unitId": "u4_6",
    "type": "binary",
    "question": "総合課税の譲渡所得のうち、所有期間が5年を超える資産の長期譲渡所得は、原則として特別控除後の2分の1を総所得金額に算入する。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。土地建物や株式の申告分離課税とは異なる、総合課税の譲渡所得の話です。「長期だから全部半分」とせず、資産の種類を先に確認します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 18,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問18",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/joto/3105.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_6_2",
    "chapterId": "ch4",
    "unitId": "u4_6",
    "type": "binary",
    "question": "土地や建物を売った所得は、原則として他の総合課税の所得と分離して税額を計算する。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。土地建物の譲渡所得は申告分離課税です。総合課税の長期譲渡所得の2分の1算入を、土地建物にもそのまま適用する誤りに注意します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 18,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問18",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1440.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_6_3",
    "chapterId": "ch4",
    "unitId": "u4_6",
    "type": "mcq",
    "question": "総合課税となる長期譲渡の資産を300万円で売却し、取得費180万円、譲渡費用20万円。他の譲渡はなく、特別控除50万円を使えるとき、総所得金額への算入額はいくらか。",
    "options": [
      "100万円",
      "25万円",
      "50万円"
    ],
    "answer": 1,
    "explanation": "譲渡益300－180－20＝100万円。特別控除50万円後の長期譲渡所得50万円を2分の1にして、算入額25万円です。控除前に半分にしたり、控除後の額を全額合算したりしないようにします。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 18,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問18",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。"
      }
    ],
    "examAlignment": "scope_supplement",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "(300-180-20-50)/2",
      "value": 25,
      "unit": "万円"
    },
    "lawsDate": null,
    "sourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/joto/3152.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_6_4",
    "chapterId": "ch4",
    "unitId": "u4_6",
    "type": "binary",
    "question": "総合課税の短期・長期の譲渡所得が同じ年にある場合、特別控除50万円は短期・長期でそれぞれ50万円ずつ使える。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。特別控除は合計して最高50万円で、原則として短期譲渡所得から先に控除します。一時所得の特別控除50万円とは別枠ですが、同じ譲渡所得内で二重に使うものではありません。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 18,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問18",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/joto/3152.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_6_5",
    "chapterId": "ch4",
    "unitId": "u4_6",
    "type": "binary",
    "question": "個人が土地を譲渡したとき、長期譲渡所得となるかは、譲渡した日現在で所有期間が5年以上かどうかで判定する。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。土地建物は譲渡年1月1日時点で所有期間が5年を超えるかで判定します。「譲渡日」「5年以上」の両方が誤りです。総合課税の資産の所有期間の判定と混同しないようにします。",
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
    "id": "q4_7_1",
    "chapterId": "ch4",
    "unitId": "u4_7",
    "type": "mcq",
    "question": "10年契約の養老保険で、本人が保険料500万円を負担して満期保険金680万円を一時金で受け取る。他の一時所得なし。総所得金額への算入額はいくらか。",
    "options": [
      "90万円",
      "130万円",
      "65万円"
    ],
    "answer": 2,
    "explanation": "一時所得＝680－500－特別控除50＝130万円。総所得金額へはその2分の1の65万円を算入します。保険期間5年以下等の金融類似商品に当たるケースとは区別します。",
    "revision": 2,
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
      },
      {
        "paperId": "g3_202505",
        "questionNumber": 46,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問46",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "(680-500-50)/2",
      "value": 65,
      "unit": "万円"
    },
    "lawsDate": null,
    "sourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1490.htm",
      "https://www.jafp.or.jp/exam/mohan/files/j3_202505_q.pdf"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_7_2",
    "chapterId": "ch4",
    "unitId": "u4_7",
    "type": "binary",
    "question": "所得税における一時所得の50万円の特別控除は、原則として契約や受取の回数ごとではなく、その年の一時所得全体に対して適用する。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。複数の満期保険金などがあっても、契約ごとに50万円ずつ引けるわけではありません。一時所得の金額を計算した後、総所得金額への2分の1算入を行います。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 46,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問46",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1490.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_7_3",
    "chapterId": "ch4",
    "unitId": "u4_7",
    "type": "binary",
    "question": "民間の個人年金保険で、保険料を負担した本人が年金を受け取るとき、その年金は原則として雑所得に該当する。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。年金収入から対応する保険料等を差し引いて雑所得を計算します。公的年金等控除を使える公的年金とは別です。同じ保険でも一時金受取の一時所得と区別します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 17,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問17",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1610.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_7_4",
    "chapterId": "ch4",
    "unitId": "u4_7",
    "type": "mcq",
    "question": "68歳、老齢年金収入280万円、公的年金等控除110万円とする。他の所得はなく、所得金額調整控除等を考えない。公的年金等に係る雑所得はいくらか。",
    "options": [
      "170万円",
      "280万円",
      "110万円"
    ],
    "answer": 0,
    "explanation": "280－110＝170万円です。年金収入を全額課税するのでも、控除額そのものを所得とするのでもありません。公的年金等控除の適用は年齢・年金収入・年金以外の所得などで変わるため、本問は控除額を指定しています。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 17,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問17",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      },
      {
        "paperId": "j3_202405",
        "questionNumber": 15,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2024年5月公表分 問15",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_a.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "280-110",
      "value": 170,
      "unit": "万円"
    },
    "lawsDate": null,
    "sourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1600.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_7_5",
    "chapterId": "ch4",
    "unitId": "u4_7",
    "type": "mcq",
    "question": "2025年分、68歳の人の給与収入60万円、公的年金等に係る雑所得170万円。給与所得控除65万円とし、他の所得はない。総所得金額はいくらか。",
    "options": [
      "235万円",
      "170万円",
      "230万円"
    ],
    "answer": 1,
    "explanation": "給与所得は60－65がマイナスとなるため0円です。雑所得170万円と合計して総所得金額は170万円。給与所得控除の引ききれない5万円を年金の雑所得から引くことはできません。収入と所得を混ぜて足さないようにします。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202405",
        "questionNumber": 15,
        "relationship": "same_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2024年5月公表分 問15",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202405_a.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "Math.max(60-65,0)+170",
      "value": 170,
      "unit": "万円"
    },
    "lawsDate": null,
    "sourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j3_202405_q.pdf",
      "https://www.nta.go.jp/users/gensen/2025kiso/index.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_8_1",
    "chapterId": "ch4",
    "unitId": "u4_8",
    "type": "binary",
    "question": "病気による入院について、被保険者本人が受け取った医療保険の入院給付金は、原則として所得税非課税である。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。身体の傷害等に基因して受け取る給付金は原則非課税です。ただし医療費控除の計算では、その給付の対象となった医療費から補てん額を差し引きます。非課税と医療費控除の調整は別の論点です。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 16,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問16",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2011.htm",
      "https://laws.e-gov.go.jp/api/2/law_data/340AC0000000033_20260401_508AC0000000012"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_8_2",
    "chapterId": "ch4",
    "unitId": "u4_8",
    "type": "mcq",
    "question": "公的年金の所得税の扱いとして正しいものはどれか。",
    "options": [
      "障害年金は給与所得、遺族年金は一時所得",
      "老齢年金・障害年金・遺族年金はすべて非課税",
      "老齢年金は原則雑所得、障害年金と遺族年金は非課税"
    ],
    "answer": 2,
    "explanation": "老齢年金は公的年金等に係る雑所得ですが、障害年金・遺族年金は原則非課税です。「公的年金」という名称だけで同じ課税と判断しないように、給付の目的を確認します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 17,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問17",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2011.htm",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1600.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_8_3",
    "chapterId": "ch4",
    "unitId": "u4_8",
    "type": "binary",
    "question": "生活に通常必要な家具や衣服を売った所得は原則非課税だが、1個または1組の価額が30万円を超える貴金属・宝石等の売却所得は、この非課税の対象とはならない。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。生活用動産は原則非課税ですが、高額の貴金属等には例外があります。家の中に置いていた物なら必ず非課税、という意味ではありません。金額は1個・1組で判断します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [],
    "examAlignment": "scope_supplement",
    "alignmentNote": "分析した公開3セットでは同じ論点の出題を確認できず、試験範囲の補強として収録。出題頻度は未確認。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/joto/3105.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_8_4",
    "chapterId": "ch4",
    "unitId": "u4_8",
    "type": "binary",
    "question": "事故による傷害の治療費を補てんする損害賠償金や慰謝料は、原則として所得税の課税対象となる一時所得に含める。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。心身に加えられた損害に対する相当の損害賠償金等は原則非課税です。一方、棚卸資産の売上や必要経費を補う金額には課税されるものがあります。「損害賠償金」という名前だけで一律判断しないことが大切です。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [],
    "examAlignment": "scope_supplement",
    "alignmentNote": "分析した公開3セットでは同じ論点の出題を確認できず、試験範囲の補強として収録。出題頻度は未確認。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1700.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_8_5",
    "chapterId": "ch4",
    "unitId": "u4_8",
    "type": "binary",
    "question": "個人が法人から無償で財産をもらった場合、個人からの贈与と同様に、所得税は課されず贈与税だけが問題になる。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。法人からの贈与は原則として所得税の対象です。個人からの贈与・相続について所得税を非課税とする扱いと区別します。給与や事業に関係するかなどにより所得区分も検討します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [],
    "examAlignment": "scope_supplement",
    "alignmentNote": "分析した公開3セットでは同じ論点の出題を確認できず、試験範囲の補強として収録。出題頻度は未確認。",
    "lawsDate": null,
    "sourceUrls": [
      "https://laws.e-gov.go.jp/api/2/law_data/340AC0000000033_20260401_508AC0000000012",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/zoyo/4402.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_9_1",
    "chapterId": "ch4",
    "unitId": "u4_9",
    "type": "mcq",
    "question": "他の所得との損益通算を原則として検討できる損失の組合せはどれか。",
    "options": [
      "不動産・事業・山林・譲渡の各所得の一定の損失",
      "給与・利子・配当のすべての損失",
      "雑所得と一時所得のすべての損失"
    ],
    "answer": 0,
    "explanation": "原則として不動産・事業・山林・譲渡の損失ですが、土地建物の譲渡損失など対象外・特例があります。雑所得の損失を給与所得から引くことは通常できません。所得区分と例外をセットで確認します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 19,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問19",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2250.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_9_2",
    "chapterId": "ch4",
    "unitId": "u4_9",
    "type": "mcq",
    "question": "不動産所得が120万円の赤字で、その経費に土地取得借入金の利子20万円を含む。暗号資産の雑所得は30万円の赤字。他に条件がない場合、給与所得と通算できる損失はいくらか。",
    "options": [
      "150万円",
      "100万円",
      "120万円"
    ],
    "answer": 1,
    "explanation": "不動産の赤字120万円から土地取得借入利子20万円を除いた100万円が対象です。暗号資産の雑所得の赤字は給与と通算できません。経費になることと、損益通算できることを区別します。",
    "revision": 2,
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
      "formula": "120-20",
      "value": 100,
      "unit": "万円"
    },
    "lawsDate": null,
    "sourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1391.htm",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2250.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_9_3",
    "chapterId": "ch4",
    "unitId": "u4_9",
    "type": "binary",
    "question": "土地建物の譲渡損失は、一定のマイホーム特例等を除き、給与所得などの他の所得と損益通算できない。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。「譲渡所得の損失はすべて通算可能」ではありません。土地建物は申告分離課税で、他の所得との通算は原則不可です。マイホームの買換え等の特例は、要件を満たすかを別に確認します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 19,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問19",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2250.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_9_4",
    "chapterId": "ch4",
    "unitId": "u4_9",
    "type": "binary",
    "question": "所定の要件を満たす青色申告者の純損失は、原則として翌年以後10年間繰り越せる。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。原則として翌年以後3年間です。損益通算しても控除しきれない純損失を、後年の所得から控除する仕組みです。連年の申告等の要件があり、特定非常災害等の特例とは区別します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 19,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問19",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2070.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_9_5",
    "chapterId": "ch4",
    "unitId": "u4_9",
    "type": "binary",
    "question": "損益通算は、原則として基礎控除や扶養控除等の所得控除を差し引く前に、対象となる各所得の黒字と赤字を調整する仕組みである。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。所得の損益を調整して総所得金額等を求め、その後に所得控除を適用します。税額控除や源泉徴収税額の精算とも段階が違います。計算の順序を表で整理すると誤りを減らせます。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 19,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問19",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2250.htm",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1000.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_10_1",
    "chapterId": "ch4",
    "unitId": "u4_10",
    "type": "mcq",
    "question": "2025年分の所得税で、新契約の一般生命保険料・介護医療保険料・個人年金保険料を各10万円支払った。他の条件を満たす場合、生命保険料控除の合計はいくらか。",
    "options": [
      "15万円",
      "30万円",
      "12万円"
    ],
    "answer": 2,
    "explanation": "各区分の新契約の控除上限は4万円なので、4×3＝12万円です。支払保険料30万円を全額引ける制度ではありません。所得税と住民税、新旧契約、対象年分の改正を混同しないようにします。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 48,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問48",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "4*3",
      "value": 12,
      "unit": "万円"
    },
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
    "id": "q4_10_2",
    "chapterId": "ch4",
    "unitId": "u4_10",
    "type": "mcq",
    "question": "2025年分の新契約一般生命保険料が年48,000円の場合、控除額は「保険料×1/4＋20,000円」で計算する。控除額はいくらか。",
    "options": [
      "32,000円",
      "40,000円",
      "24,000円"
    ],
    "answer": 0,
    "explanation": "48,000×1/4＋20,000＝32,000円です。2万〜4万円の区分の式や、8万円超の上限4万円を使わないよう、年間保険料がどの区分に入るかを先に確認します。",
    "revision": 2,
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
    "calculationCheck": {
      "formula": "48000/4+20000",
      "value": 32000,
      "unit": "円"
    },
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
    "id": "q4_10_3",
    "chapterId": "ch4",
    "unitId": "u4_10",
    "type": "binary",
    "question": "2025年分の同じ一般生命保険料控除について、新契約と旧契約の両方を適用する場合、新旧それぞれの上限を足し合わせて必ず9万円まで控除できる。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。新旧両方を併用する同一区分は原則最高4万円です。旧契約だけで計算する方が有利なら最高5万円を選ぶ場合があります。3区分全体の上限と、同一区分の新旧併用の上限を区別します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 48,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問48",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1140.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_10_4",
    "chapterId": "ch4",
    "unitId": "u4_10",
    "type": "binary",
    "question": "所得税の地震保険料控除は、原則として年間支払保険料の全額を最高5万円まで控除する。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。住民税の原則2分の1・最高2万5,000円との混同に注意します。旧長期損害保険料の経過措置や、同一契約での控除の選択等は別の条件です。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 48,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問48",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1145.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_10_5",
    "chapterId": "ch4",
    "unitId": "u4_10",
    "type": "mcq",
    "question": "地震保険料を年間24,000円支払った。他の保険料や経過措置がない場合、所得税の地震保険料控除額はいくらか。",
    "options": [
      "12,000円",
      "24,000円",
      "50,000円"
    ],
    "answer": 1,
    "explanation": "支払額が上限5万円以内なので全額24,000円です。12,000円は住民税の原則計算と混同した答えです。控除額は上限額を常に使うのではなく、実際の支払額で計算します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 48,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問48",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。"
      }
    ],
    "examAlignment": "scope_supplement",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "Math.min(24000,50000)",
      "value": 24000,
      "unit": "円"
    },
    "lawsDate": null,
    "sourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1145.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_11_1",
    "chapterId": "ch4",
    "unitId": "u4_11",
    "type": "mcq",
    "question": "国民年金基金の掛金とiDeCoの本人掛金の控除区分の組合せとして適切なものはどれか。",
    "options": [
      "基金は小規模企業共済等掛金控除、iDeCoは社会保険料控除",
      "両方とも個人年金保険料控除",
      "基金は社会保険料控除、iDeCoは小規模企業共済等掛金控除"
    ],
    "answer": 2,
    "explanation": "国民年金基金の掛金は社会保険料控除、iDeCoは小規模企業共済等掛金控除です。民間の税制適格個人年金保険は個人年金保険料控除で、3つの名称を区別する必要があります。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 47,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問47",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      },
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1130.htm",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1135.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_11_2",
    "chapterId": "ch4",
    "unitId": "u4_11",
    "type": "binary",
    "question": "生計を一にする大学生の子が負担すべき国民年金保険料を親が実際に支払った場合、原則として親の社会保険料控除の対象となる。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。控除を受けるのは実際に支払った親です。子の名義の保険料でも、生計を一にする親族の分を支払った場合は対象になります。同じ保険料を親子で二重に控除することはできません。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 47,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問47",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1130.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_11_3",
    "chapterId": "ch4",
    "unitId": "u4_11",
    "type": "binary",
    "question": "社会保険料控除の金額は、その年に実際に支払った本人等負担の対象社会保険料の全額が原則となり、生命保険料控除のような年12万円の合計上限はない。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。国民年金、健康保険等の対象保険料の実際の支払額が基本です。民間の生命保険料控除の上限と混同しないようにします。翌年支払う予定額を、未払いのまま当年の控除にすることはできません。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 47,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問47",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1130.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_11_4",
    "chapterId": "ch4",
    "unitId": "u4_11",
    "type": "mcq",
    "question": "本人のiDeCo掛金が年24万円で、全額が控除対象になる。小規模企業共済等掛金控除額はいくらか。",
    "options": [
      "24万円",
      "4万円",
      "12万円"
    ],
    "answer": 0,
    "explanation": "本人が支払った対象掛金の全額24万円です。民間の個人年金保険料控除の上限を使いません。ただし、所得控除なので課税される所得がなければ、その分の所得税軽減効果もありません。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 47,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問47",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。"
      }
    ],
    "examAlignment": "scope_supplement",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "24",
      "value": 24,
      "unit": "万円"
    },
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
    "id": "q4_11_5",
    "chapterId": "ch4",
    "unitId": "u4_11",
    "type": "binary",
    "question": "小規模企業共済の掛金は、月額1,000円から7万円までの範囲で500円単位により選択する。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。所得控除は小規模企業共済等掛金控除の対象です。小規模企業の経営者等の退職後資金に備える制度であり、従業員のために事業主が掛ける中退共とは対象・負担者が異なります。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 5,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問5",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1135.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_12_1",
    "chapterId": "ch4",
    "unitId": "u4_12",
    "type": "binary",
    "question": "生計を一にする妻の治療費を夫が支払った場合、妻の所得が配偶者控除の所得要件を超えていても、その治療費は夫の医療費控除の対象になり得る。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。医療費控除には、生計を一にする親族について配偶者控除と同じ所得上限を置く要件はありません。誰のための医療費か、誰が支払ったか、治療の内容等を確認します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 20,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問20",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1120.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_12_2",
    "chapterId": "ch4",
    "unitId": "u4_12",
    "type": "mcq",
    "question": "総所得金額等180万円、対象医療費20万円、補てん金3万円。医療費控除額はいくらか。他の調整はない。",
    "options": [
      "7万円",
      "8万円",
      "17万円"
    ],
    "answer": 1,
    "explanation": "総所得金額等が200万円未満なので差し引く基準額は180万円×5%＝9万円です。20－3－9＝8万円。常に10万円を引いた7万円ではありません。控除上限は200万円です。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202605",
        "questionNumber": 16,
        "relationship": "related_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2026年5月公表分 問16",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_a.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。"
      }
    ],
    "examAlignment": "scope_supplement",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "20-3-180*0.05",
      "value": 8,
      "unit": "万円"
    },
    "lawsDate": null,
    "sourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1120.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_12_3",
    "chapterId": "ch4",
    "unitId": "u4_12",
    "type": "mcq",
    "question": "総所得金額等500万円。治療入院28万円、美容目的の施術20万円、病気が発見されなかった健診4万円を支払い、入院給付金8万円を受領した。通常の医療費控除額はいくらか。",
    "options": [
      "30万円",
      "34万円",
      "10万円"
    ],
    "answer": 2,
    "explanation": "美容施術と通常の健診は対象から除き、28－8－10＝10万円です。医療機関へ払った費用をすべて足すわけではありません。入院給付金は対象となった入院費を補てんするため、その医療費から差し引きます。",
    "revision": 2,
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
    "calculationCheck": {
      "formula": "28-8-10",
      "value": 10,
      "unit": "万円"
    },
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
    "id": "q4_12_4",
    "chapterId": "ch4",
    "unitId": "u4_12",
    "type": "binary",
    "question": "ある入院の給付金がその入院費を上回った場合、超過分も、別の病気の医療費から差し引かなければならない。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。補てん金はその給付の目的となった医療費を限度として差し引き、余りを他の医療費から引く必要はありません。すべての給付金を全医療費から無条件に差し引く計算ではない点に注意します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202605",
        "questionNumber": 16,
        "relationship": "related_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2026年5月公表分 問16",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1120.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_12_5",
    "chapterId": "ch4",
    "unitId": "u4_12",
    "type": "mcq",
    "question": "通常の医療費控除の最高限度額はどれか。",
    "options": [
      "200万円",
      "300万円",
      "100万円"
    ],
    "answer": 0,
    "explanation": "最高200万円です。支払医療費の上限ではなく、補てん金と原則10万円等を差し引いた控除額の上限です。セルフメディケーション税制とは控除額や対象費用が異なり、通常の医療費控除とは選択適用になります。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "j3_202605",
        "questionNumber": 16,
        "relationship": "related_topic",
        "label": "日本FP協会 3級実技（資産設計提案業務） 2026年5月公表分 問16",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1120.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_13_1",
    "chapterId": "ch4",
    "unitId": "u4_13",
    "type": "binary",
    "question": "納税者本人の合計所得金額が1,000万円を超える場合、配偶者に所得がなくても配偶者控除を受けることはできない。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。本人側に合計所得1,000万円以下という要件があります。配偶者の所得だけで適用を判断せず、本人の所得制限も確認します。配偶者特別控除にも本人の所得制限があります。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 20,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問20",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1191.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_13_2",
    "chapterId": "ch4",
    "unitId": "u4_13",
    "type": "mcq",
    "question": "2025年分、本人合計所得800万円、70歳未満の配偶者の給与収入123万円、給与所得控除65万円。他の要件を満たす場合、本人に適用する配偶者控除額はいくらか。",
    "options": [
      "26万円",
      "38万円",
      "0円"
    ],
    "answer": 1,
    "explanation": "配偶者の所得は123－65＝58万円で、2025年分の配偶者控除の所得要件以内です。本人所得900万円以下・一般配偶者なので38万円です。給与収入123万円をそのまま所得と比較しないようにします。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 20,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問20",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf",
        "originalLawsDate": "2024-04-01",
        "processingNote": "公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。"
      }
    ],
    "examAlignment": "scope_supplement",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "38",
      "value": 38,
      "unit": "万円"
    },
    "lawsDate": null,
    "sourceUrls": [
      "https://www.nta.go.jp/users/gensen/2025kiso/index.htm",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1191.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_13_3",
    "chapterId": "ch4",
    "unitId": "u4_13",
    "type": "binary",
    "question": "2025年分の配偶者の合計所得金額が58万円を超えていても、133万円以下などの要件を満たせば、配偶者特別控除の対象になり得る。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。配偶者控除の対象外となった直後に、すべての配偶者に関する控除がなくなるわけではありません。本人と配偶者の所得に応じて控除額が変わります。後年の所得要件を2025年分へ混在させないようにします。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 20,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問20",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1195.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_13_4",
    "chapterId": "ch4",
    "unitId": "u4_13",
    "type": "mcq",
    "question": "本人の合計所得金額800万円で、配偶者はその年12月31日時点で72歳。所得など他の要件をすべて満たす場合、老人控除対象配偶者に係る所得税の配偶者控除額はいくらか。",
    "options": [
      "58万円",
      "38万円",
      "48万円"
    ],
    "answer": 2,
    "explanation": "本人所得900万円以下で、配偶者が70歳以上の老人控除対象配偶者なら48万円です。一般の配偶者38万円、同居老親等に対する扶養控除58万円とは区分が違います。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 20,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問20",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1191.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_13_5",
    "chapterId": "ch4",
    "unitId": "u4_13",
    "type": "binary",
    "question": "配偶者特別控除は、夫婦それぞれが互いに相手を対象として同じ年に重複して受けることができる。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。夫婦が互いに配偶者特別控除を受けることはできません。配偶者控除と配偶者特別控除を同じ配偶者について重ねて使うこともできません。対象となる人の所得と、控除を受ける側を整理します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [],
    "examAlignment": "scope_supplement",
    "alignmentNote": "分析した公開3セットでは同じ論点の出題を確認できず、試験範囲の補強として収録。出題頻度は未確認。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1195.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_14_1",
    "chapterId": "ch4",
    "unitId": "u4_14",
    "type": "mcq",
    "question": "その年の12月31日時点で20歳、所得要件等を満たす子について、所得税の特定扶養親族に係る扶養控除額はいくらか。",
    "options": [
      "63万円",
      "38万円",
      "48万円"
    ],
    "answer": 0,
    "explanation": "19歳以上23歳未満の特定扶養親族は63万円です。一般の控除対象扶養親族は38万円。学生という名称だけで判断せず、年末時点の年齢と所得等の要件を確認します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 48,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問48",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      },
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
    "lawsDate": null,
    "sourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1180.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_14_2",
    "chapterId": "ch4",
    "unitId": "u4_14",
    "type": "binary",
    "question": "所得のない15歳の子は、生計を一にしていれば所得税の扶養控除38万円の対象となる。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。所得税の扶養控除は原則、その年12月31日時点で16歳以上の控除対象扶養親族が対象です。16歳未満の子の情報を申告書等へ記載することと、扶養控除の適用とは別です。",
    "revision": 2,
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
    "lawsDate": null,
    "sourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1180.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_14_3",
    "chapterId": "ch4",
    "unitId": "u4_14",
    "type": "mcq",
    "question": "2025年分の居住者で、合計所得金額が400万円の人の基礎控除額はいくらか。他の特例はない。",
    "options": [
      "58万円",
      "68万円",
      "48万円"
    ],
    "answer": 1,
    "explanation": "2025年分は合計所得336万円超489万円以下の区分で68万円です。2024年分までの48万円や、すべて一律58万円とする覚え方は不適切です。年分と所得区分を必ず確認します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 20,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問20",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "同じ論点の公開問題を参考に、条件・数値・選択肢を再構成（修正・加工）。"
      }
    ],
    "examAlignment": "observed_topic",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "68",
      "value": 68,
      "unit": "万円"
    },
    "lawsDate": null,
    "sourceUrls": [
      "https://www.nta.go.jp/users/gensen/2025kiso/index.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_14_4",
    "chapterId": "ch4",
    "unitId": "u4_14",
    "type": "binary",
    "question": "同居する72歳の母で、所得など他の要件を満たし「同居老親等」に該当する場合、所得税の扶養控除額は58万円である。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。老人扶養親族の原則48万円に対し、同居老親等は58万円です。老人ホームへの入所は一般に同居老親等に含まれないなど、実際の居住関係にも要件があります。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [],
    "examAlignment": "scope_supplement",
    "alignmentNote": "分析した公開3セットでは同じ論点の出題を確認できず、試験範囲の補強として収録。出題頻度は未確認。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1180.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_14_5",
    "chapterId": "ch4",
    "unitId": "u4_14",
    "type": "mcq",
    "question": "生計を一にする配偶者が同居特別障害者に該当する場合、所得税の障害者控除額として適切なものはどれか。必要な所得等の要件は満たす。",
    "options": [
      "27万円",
      "40万円",
      "75万円"
    ],
    "answer": 2,
    "explanation": "同居特別障害者の控除額は75万円です。一般の障害者27万円、特別障害者40万円と区別します。障害者控除は、要件を満たせば配偶者控除や扶養控除等と併せて検討する控除です。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [],
    "examAlignment": "scope_supplement",
    "alignmentNote": "分析した公開3セットでは同じ論点の出題を確認できず、試験範囲の補強として収録。出題頻度は未確認。",
    "lawsDate": null,
    "sourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1160.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_14_6",
    "chapterId": "ch4",
    "unitId": "u4_14",
    "type": "mcq",
    "question": "2025年分、20歳の子の給与収入145万円、給与所得控除65万円。生計等の他の要件を満たす親が受ける控除として適切なものはどれか。",
    "options": [
      "特定親族特別控除63万円",
      "年齢・所得にかかわらず控除なし",
      "特定扶養親族として扶養控除63万円"
    ],
    "answer": 0,
    "explanation": "子の所得は145－65＝80万円で、2025年分の扶養控除の所得要件58万円を超えます。一方、19歳以上23歳未満で所得58万円超85万円以下等の要件を満たすため、特定親族特別控除63万円の対象です。制度名まで区別します。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 48,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問48",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
        "originalLawsDate": "2025-04-01",
        "processingNote": "公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。"
      }
    ],
    "examAlignment": "scope_supplement",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "63",
      "value": 63,
      "unit": "万円"
    },
    "lawsDate": null,
    "sourceUrls": [
      "https://www.nta.go.jp/users/gensen/2025kiso/index.htm",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1177.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_14_7",
    "chapterId": "ch4",
    "unitId": "u4_14",
    "type": "binary",
    "question": "特定親族特別控除は、年末時点で19歳以上23歳未満の一定の親族が対象となる制度で、配偶者特別控除と同じく、対象者に給与収入が少しでもあれば適用されない。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。一定の所得のある19歳以上23歳未満の親族等について、扶養控除の所得要件を超えても段階的な控除を受けられる仕組みです。年齢や所得、配偶者ではないこと等の要件を確認します。",
    "revision": 1,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 48,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問48",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1177.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_15_1",
    "chapterId": "ch4",
    "unitId": "u4_15",
    "type": "mcq",
    "question": "税額控除に該当するものはどれか。",
    "options": [
      "生命保険料控除",
      "住宅借入金等特別控除",
      "社会保険料控除"
    ],
    "answer": 1,
    "explanation": "住宅ローン控除は計算した所得税額から差し引く税額控除です。社会保険料控除・生命保険料控除は課税所得を求める前に差し引く所得控除です。「控除」という語が共通でも計算段階が違います。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 47,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問47",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1200.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_15_2",
    "chapterId": "ch4",
    "unitId": "u4_15",
    "type": "mcq",
    "question": "2025年に住宅ローンを利用して認定長期優良住宅を新築し、住宅ローン控除の適用要件を満たす。控除額の計算で年末残高等に乗じる控除率はどれか。",
    "options": [
      "1.0%",
      "1.5%",
      "0.7%"
    ],
    "answer": 2,
    "explanation": "控除率は0.7%です。実際の対象残高の上限は住宅区分・入居年・世帯等で異なります。年末残高に無制限に0.7%を掛けてよいという意味ではありません。対象年と住宅区分を確認します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202605",
        "questionNumber": 49,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2026年5月公表分 問49",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1211-2.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_15_3",
    "chapterId": "ch4",
    "unitId": "u4_15",
    "type": "binary",
    "question": "2025年に入居した認定長期優良住宅の新築等について、所定要件を満たす場合の住宅ローン控除の最長控除期間は13年である。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。中古住宅などでは控除期間が異なるため、すべての住宅取得に13年を当てはめるわけではありません。設問の住宅区分と入居年を先に確認します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 49,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問49",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1211-2.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_15_4",
    "chapterId": "ch4",
    "unitId": "u4_15",
    "type": "binary",
    "question": "住宅ローン控除の適用を新たに受けるには、原則として借入金の償還期間が10年以上であることが必要である。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。繰上返済等によって所定の償還期間が10年未満となる場合には、その後の控除適用に影響することがあります。借りたときの金利型と、税制上の償還期間の要件は別です。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 49,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問49",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1211-2.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_15_5",
    "chapterId": "ch4",
    "unitId": "u4_15",
    "type": "mcq",
    "question": "税額控除前の所得税20万円、適用できる税額控除7万円、源泉徴収済15万円。復興特別所得税等を考慮しない精算額として正しいものはどれか。",
    "options": [
      "2万円の還付",
      "7万円の還付",
      "13万円の追加納付"
    ],
    "answer": 0,
    "explanation": "控除後税額＝20－7＝13万円。既に15万円納めているため15－13＝2万円の還付です。税額控除額7万円をそのまま還付額と考えるのではなく、最終税額と前払い分を比較します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 50,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問50",
        "questionUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "answerUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202405_qa.pdf",
        "originalLawsDate": "2023-04-01",
        "processingNote": "公開問題の関連論点を広げた補強問題。元問と同一の出題内容ではありません。"
      }
    ],
    "examAlignment": "scope_supplement",
    "alignmentNote": "公開問題の論点を分析して再構成。掲載年の法令をそのまま流用せず、下記基準日で解答。",
    "calculationCheck": {
      "formula": "15-(20-7)",
      "value": 2,
      "unit": "万円"
    },
    "lawsDate": null,
    "sourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1200.htm",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2030.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_16_1",
    "chapterId": "ch4",
    "unitId": "u4_16",
    "type": "binary",
    "question": "給与の年間収入が2,000万円を超える給与所得者は、原則として所得税の確定申告が必要である。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。給与所得ではなく給与収入で2,000万円を判定します。給与収入がそれ以下でも、複数勤務先や他の所得、各種控除の適用などの条件により申告が必要な場合があります。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 50,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問50",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2020.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_16_2",
    "chapterId": "ch4",
    "unitId": "u4_16",
    "type": "binary",
    "question": "1か所から給与を受け年末調整済みなど、申告不要の要件を満たす人は、給与・退職以外の所得が20万円以下なら、その所得について住民税の申告も必ず不要である。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "誤りです。所得税の確定申告不要と、住民税の申告の要否は別です。また医療費控除等のために所得税申告をする場合は、20万円以下の所得も原則申告に含めます。「20万円」は収入ではなく所得です。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 50,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問50",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2020.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_16_3",
    "chapterId": "ch4",
    "unitId": "u4_16",
    "type": "binary",
    "question": "所得税の還付申告は、原則として対象年の翌年1月1日から5年間行うことができる。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。納付のための通常の申告期間と、還付申告ができる期間は同じではありません。住宅ローン控除初年度や医療費控除などで税額が精算されるかを確認します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 50,
        "relationship": "related_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問50",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2030.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_16_4",
    "chapterId": "ch4",
    "unitId": "u4_16",
    "type": "mcq",
    "question": "その年の4月1日に事業を始め、その年分から青色申告をしたい。原則として青色申告承認申請書をいつまでに提出する必要があるか。",
    "options": [
      "翌年の確定申告期限まで",
      "開業日から2か月以内",
      "開業年の12月31日まで"
    ],
    "answer": 1,
    "explanation": "1月16日以後に開業した場合、原則開業日から2か月以内です。青色申告承認申請と、その年分の確定申告書の提出は別の手続です。原則の3月15日期限と、開業時の特例期限を区別します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202505",
        "questionNumber": 50,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2025年5月公表分 問50",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2070.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  },
  {
    "id": "q4_16_5",
    "chapterId": "ch4",
    "unitId": "u4_16",
    "type": "binary",
    "question": "住宅ローン控除を初めて受ける給与所得者は、原則として確定申告が必要であり、2年目以後は所定の手続により年末調整で適用を受けられる場合がある。",
    "options": [
      "○ 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "正しい記述です。初年度と2年目以後で手続が異なります。生命保険料控除のように初年度から通常の年末調整だけで済む控除と区別しましょう。適用に必要な証明書等も確認します。",
    "revision": 2,
    "bankEdition": "past-2026-10-27",
    "pastExamRefs": [
      {
        "paperId": "g3_202405",
        "questionNumber": 50,
        "relationship": "same_topic",
        "label": "日本FP協会 3級学科 2024年5月公表分 問50",
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
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1211-2.htm"
    ],
    "verificationStatus": "pending",
    "verifiedAt": null,
    "evidence": [],
    "verificationNote": "照合済み情報はreviews.json。本文や分析リンクの変更は再検証が必要。"
  }
];
