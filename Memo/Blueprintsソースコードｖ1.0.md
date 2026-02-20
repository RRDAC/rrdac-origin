<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RRDAC Blueprints Gallery</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;500&display=swap" rel="stylesheet">
    <style>
        body {
            background-color: #0a0e1a;
            color: #e0fbfc;
            font-family: 'Noto Sans JP', sans-serif;
            margin: 0;
            padding: 4rem 1rem;
        }

        /* ギャラリーグリッド */
        .blueprint-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2.5rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        /* 施設カード：リンクとして機能 */
        .facility-card {
            position: relative;
            aspect-ratio: 16/10;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
            cursor: pointer;
            text-decoration: none; /* リンクのデフォルト下線を消す */
            display: block;
        }

        .facility-card:hover {
            border-color: #5ce1e6;
            transform: translateY(-8px);
            box-shadow: 0 15px 40px rgba(92, 225, 230, 0.15);
        }

        /* 画像レイヤー */
        .facility-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: saturate(0.6) brightness(0.7);
            transition: transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .facility-card:hover .facility-img {
            transform: scale(1.1);
            filter: saturate(1.1) brightness(0.5);
        }

        /* オーバーレイ情報 */
        .info-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 2rem;
            background: linear-gradient(to top, rgba(10, 14, 26, 0.95) 10%, transparent 100%);
            transform: translateY(10px);
            transition: transform 0.6s ease;
        }

        .category-tag {
            font-size: 0.75rem;
            letter-spacing: 0.25em;
            color: #5ce1e6;
            margin-bottom: 0.75rem;
            display: block;
            text-transform: uppercase;
            font-weight: 500;
        }

        .facility-name {
            font-size: 1.75rem;
            font-weight: 100;
            letter-spacing: 0.15em;
            margin-bottom: 0.75rem;
            color: #ffffff;
        }

        .facility-desc {
            font-size: 0.9rem;
            line-height: 1.8;
            opacity: 0;
            transform: translateY(10px);
            transition: all 0.5s ease 0.1s;
            font-weight: 300;
            color: rgba(224, 251, 252, 0.8);
        }

        .facility-card:hover .facility-desc {
            opacity: 1;
            transform: translateY(0);
        }

        /* 「詳しく見る」インジケーター */
        .view-more {
            position: absolute;
            top: 1.5rem;
            right: 1.5rem;
            width: 30px;
            height: 30px;
            border: 1px solid rgba(92, 225, 230, 0.5);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: all 0.4s ease;
        }

        .facility-card:hover .view-more {
            opacity: 1;
            transform: rotate(45deg);
            background: rgba(92, 225, 230, 0.1);
        }

        /* セクションタイトル */
        .section-title {
            text-align: center;
            margin-bottom: 5rem;
        }

        .section-title h2 {
            font-size: 3rem;
            font-weight: 100;
            letter-spacing: 0.5em;
            margin-bottom: 1.5rem;
        }

        .section-title .line {
            width: 80px;
            height: 1px;
            background: linear-gradient(to right, transparent, #5ce1e6, transparent);
            margin: 0 auto;
        }
    </style>
</head>
<body>

    <div class="section-title">
        <h2>BLUEPRINTS</h2>
        <div class="line"></div>
    </div>

    <div class="blueprint-grid">
        
        <!-- 施設1: 零NEXUS -->
        <!-- onclick属性に詳細ページのURLを入れてください -->
        <div class="facility-card" onclick="window.top.location.href='https://your-rrdac-site.com/nexus-detail'">
            <img src="https://i.imgur.com/DZvqmOo.png" alt="零NEXUS" class="facility-img">
            <div class="view-more"><span style="color: #5ce1e6;">+</span></div>
            <div class="info-overlay">
                <span class="category-tag">Mobility / Core</span>
                <h3 class="facility-name">零NEXUS</h3>
                <p class="facility-desc">
                    虹色の空飛ぶクジラ。RAK制限なしで誰でも乗れる公共飛空艇。移動そのものが体験となる、RRDACの翼。
                </p>
            </div>
        </div>

        <!-- 施設2: 元素樹施設 -->
        <div class="facility-card" onclick="window.top.location.href='https://your-rrdac-site.com/element-tree-detail'">
            <img src="https://i.imgur.com/jjXMUAc.png" alt="元素樹施設" class="facility-img">
            <div class="view-more"><span style="color: #5ce1e6;">+</span></div>
            <div class="info-overlay">
                <span class="category-tag">Root Layer / Resource</span>
                <h3 class="facility-name">元素樹施設</h3>
                <p class="facility-desc">
                    住民の愛が「実」を結び、オリジンストーンへと変わる循環の中心地。生命の息吹とエネルギーが交差する。
                </p>
            </div>
        </div>

        <!-- 施設3: 具現化装置 -->
        <div class="facility-card" onclick="window.top.location.href='https://your-rrdac-site.com/manifestation-detail'">
            <img src="https://i.imgur.com/9YGQexW.png" alt="具現化装置" class="facility-img">
            <div class="view-more"><span style="color: #5ce1e6;">+</span></div>
            <div class="info-overlay">
                <span class="category-tag">Agape Layer / Creation</span>
                <h3 class="facility-name">具現化装置</h3>
                <p class="facility-desc">
                    想いを物質へと変換する、生存の不安をゼロにする聖具。純粋な創造に集中するための基盤。
                </p>
            </div>
        </div>

        <!-- 施設4: Garden Campus -->
        <div class="facility-card" onclick="window.top.location.href='https://your-rrdac-site.com/garden-campus-detail'">
            <div class="w-full h-full bg-[#112240] flex items-center justify-center">
                 <!-- 画像がない場合のプレースホルダー -->
                <span class="text-xs tracking-[0.5em] opacity-40">GARDEN CAMPUS</span>
            </div>
            <div class="view-more"><span style="color: #5ce1e6;">+</span></div>
            <div class="info-overlay">
                <span class="category-tag">Education / Growth</span>
                <h3 class="facility-name">Garden Campus</h3>
                <p class="facility-desc">
                    魂の記憶を呼び覚ます学びの庭。身体感覚を取り戻し、創造主としての自覚を育む教育施設。
                </p>
            </div>
        </div>

    </div>

</body>
</html>