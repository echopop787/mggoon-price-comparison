// ==================== Mock Data ====================
// 실제 환경에서는 API를 통해 데이터를 가져옵니다
const mockProducts = {
    '갤럭시 S24': [
        {
            id: 1,
            name: '삼성 갤럭시 S24 자급제 256GB',
            mall: '삼성 공식몰',
            image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop',
            originalPrice: 1200000,
            currentPrice: 950000,
            discount: 21,
            benefits: [
                { type: 'coupon', text: '공식몰 전용 쿠폰 100,000원', value: 100000 },
                { type: 'card', text: '삼성카드 10% 95,000원', value: 95000 },
                { type: 'membership', text: '멤버십 할인 50,000원', value: 50000 },
                { type: 'points', text: '삼성리워드 9,500원', value: 9500 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 2,
            name: '삼성 갤럭시 S24 자급제 256GB',
            mall: '네이버쇼핑',
            image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop',
            originalPrice: 1200000,
            currentPrice: 999000,
            discount: 17,
            benefits: [
                { type: 'coupon', text: '쿠폰 할인 50,000원', value: 50000 },
                { type: 'card', text: '카드 즉시할인 30,000원', value: 30000 },
                { type: 'membership', text: '멤버십 추가할인 20,000원', value: 20000 },
                { type: 'points', text: '네이버페이 적립 9,990원', value: 9990 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 3,
            name: '삼성 갤럭시 S24 자급제 256GB',
            mall: '네이버 스마트스토어',
            image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop',
            originalPrice: 1200000,
            currentPrice: 985000,
            discount: 18,
            benefits: [
                { type: 'coupon', text: '스토어 쿠폰 60,000원', value: 60000 },
                { type: 'card', text: '네이버페이 카드 40,000원', value: 40000 },
                { type: 'points', text: '네이버페이 포인트 9,850원', value: 9850 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 4,
            name: '삼성 갤럭시 S24 자급제 256GB',
            mall: '쿠팡',
            image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop',
            originalPrice: 1200000,
            currentPrice: 1050000,
            discount: 13,
            benefits: [
                { type: 'coupon', text: '쿠폰 할인 30,000원', value: 30000 },
                { type: 'card', text: '삼성카드 5% 52,500원', value: 52500 },
                { type: 'points', text: '로켓와우 적립 10,500원', value: 10500 },
                { type: 'shipping', text: '로켓배송 무료', value: 0 }
            ]
        },
        {
            id: 5,
            name: '삼성 갤럭시 S24 자급제 256GB',
            mall: '카카오 톡딜',
            image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop',
            originalPrice: 1200000,
            currentPrice: 970000,
            discount: 19,
            benefits: [
                { type: 'coupon', text: '톡딜 특가 쿠폰 80,000원', value: 80000 },
                { type: 'card', text: '카카오페이 카드 35,000원', value: 35000 },
                { type: 'membership', text: '카카오 멤버십 25,000원', value: 25000 },
                { type: 'points', text: '카카오페이 포인트 9,700원', value: 9700 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 6,
            name: '삼성 갤럭시 S24 자급제 256GB',
            mall: '11번가',
            image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop',
            originalPrice: 1200000,
            currentPrice: 1080000,
            discount: 10,
            benefits: [
                { type: 'coupon', text: '앱 전용 쿠폰 20,000원', value: 20000 },
                { type: 'card', text: '신한카드 3% 32,400원', value: 32400 },
                { type: 'membership', text: 'VIP 회원 10,000원', value: 10000 },
                { type: 'points', text: 'OK캐시백 5,400원', value: 5400 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 7,
            name: '삼성 갤럭시 S24 자급제 256GB',
            mall: 'G마켓',
            image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop',
            originalPrice: 1200000,
            currentPrice: 1100000,
            discount: 8,
            benefits: [
                { type: 'coupon', text: '스마일클럽 쿠폰 15,000원', value: 15000 },
                { type: 'card', text: '현대카드 2% 22,000원', value: 22000 },
                { type: 'points', text: '스마일캐시 11,000원', value: 11000 },
                { type: 'shipping', text: '스마일배송 무료', value: 0 }
            ]
        },
        {
            id: 8,
            name: '삼성 갤럭시 S24 자급제 256GB',
            mall: 'SSG.COM',
            image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop',
            originalPrice: 1200000,
            currentPrice: 1020000,
            discount: 15,
            benefits: [
                { type: 'coupon', text: 'SSG 쿠폰 45,000원', value: 45000 },
                { type: 'card', text: '신세계 카드 5% 51,000원', value: 51000 },
                { type: 'membership', text: 'SSG 멤버십 30,000원', value: 30000 },
                { type: 'points', text: 'SSG 포인트 10,200원', value: 10200 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 9,
            name: '삼성 갤럭시 S24 자급제 256GB',
            mall: '옥션',
            image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop',
            originalPrice: 1200000,
            currentPrice: 1090000,
            discount: 9,
            benefits: [
                { type: 'coupon', text: '옥션 쿠폰 18,000원', value: 18000 },
                { type: 'card', text: 'KB카드 2% 21,800원', value: 21800 },
                { type: 'points', text: '옥션 마일리지 10,900원', value: 10900 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 10,
            name: '삼성 갤럭시 S24 자급제 256GB',
            mall: '인터파크',
            image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop',
            originalPrice: 1200000,
            currentPrice: 1060000,
            discount: 12,
            benefits: [
                { type: 'coupon', text: '인터파크 쿠폰 25,000원', value: 25000 },
                { type: 'card', text: '우리카드 3% 31,800원', value: 31800 },
                { type: 'points', text: '인터파크 포인트 10,600원', value: 10600 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 11,
            name: '삼성 갤럭시 S24 자급제 256GB',
            mall: '티몬',
            image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop',
            originalPrice: 1200000,
            currentPrice: 1040000,
            discount: 13,
            benefits: [
                { type: 'coupon', text: '티몬 슈퍼세이브 35,000원', value: 35000 },
                { type: 'card', text: '하나카드 3% 31,200원', value: 31200 },
                { type: 'points', text: '티몬캐시 10,400원', value: 10400 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        }
    ],
    '에어팟 프로': [
        {
            id: 12,
            name: '애플 에어팟 프로 2세대 USB-C',
            mall: 'Apple 공식몰',
            image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=300&fit=crop',
            originalPrice: 359000,
            currentPrice: 359000,
            discount: 0,
            benefits: [
                { type: 'card', text: '애플카드 3% 10,770원', value: 10770 },
                { type: 'points', text: '애플 리워드 3,590원', value: 3590 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 13,
            name: '애플 에어팟 프로 2세대 USB-C',
            mall: '네이버쇼핑',
            image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=300&fit=crop',
            originalPrice: 359000,
            currentPrice: 299000,
            discount: 17,
            benefits: [
                { type: 'coupon', text: '쿠폰 할인 10,000원', value: 10000 },
                { type: 'card', text: '카드 즉시할인 15,000원', value: 15000 },
                { type: 'points', text: '네이버페이 적립 2,990원', value: 2990 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 14,
            name: '애플 에어팟 프로 2세대 USB-C',
            mall: '네이버 스마트스토어',
            image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=300&fit=crop',
            originalPrice: 359000,
            currentPrice: 295000,
            discount: 18,
            benefits: [
                { type: 'coupon', text: '스토어 쿠폰 12,000원', value: 12000 },
                { type: 'card', text: '네이버페이 카드 18,000원', value: 18000 },
                { type: 'points', text: '네이버페이 포인트 2,950원', value: 2950 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 15,
            name: '애플 에어팟 프로 2세대 USB-C',
            mall: '쿠팡',
            image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=300&fit=crop',
            originalPrice: 359000,
            currentPrice: 289000,
            discount: 19,
            benefits: [
                { type: 'coupon', text: '첫 구매 쿠폰 5,000원', value: 5000 },
                { type: 'card', text: '국민카드 5% 14,450원', value: 14450 },
                { type: 'membership', text: '로켓와우 회원 8,000원', value: 8000 },
                { type: 'points', text: '로켓와우 적립 2,890원', value: 2890 },
                { type: 'shipping', text: '로켓배송 무료', value: 0 }
            ]
        },
        {
            id: 16,
            name: '애플 에어팟 프로 2세대 USB-C',
            mall: '카카오 톡딜',
            image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=300&fit=crop',
            originalPrice: 359000,
            currentPrice: 285000,
            discount: 21,
            benefits: [
                { type: 'coupon', text: '톡딜 특가 쿠폰 20,000원', value: 20000 },
                { type: 'card', text: '카카오페이 카드 10,000원', value: 10000 },
                { type: 'membership', text: '카카오 멤버십 8,000원', value: 8000 },
                { type: 'points', text: '카카오페이 포인트 2,850원', value: 2850 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 17,
            name: '애플 에어팟 프로 2세대 USB-C',
            mall: '11번가',
            image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=300&fit=crop',
            originalPrice: 359000,
            currentPrice: 309000,
            discount: 14,
            benefits: [
                { type: 'coupon', text: '앱 전용 쿠폰 8,000원', value: 8000 },
                { type: 'card', text: '우리카드 3% 9,270원', value: 9270 },
                { type: 'points', text: 'OK캐시백 1,545원', value: 1545 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 18,
            name: '애플 에어팟 프로 2세대 USB-C',
            mall: 'SSG.COM',
            image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=300&fit=crop',
            originalPrice: 359000,
            currentPrice: 305000,
            discount: 15,
            benefits: [
                { type: 'coupon', text: 'SSG 쿠폰 15,000원', value: 15000 },
                { type: 'card', text: '신세계 카드 5% 15,250원', value: 15250 },
                { type: 'membership', text: 'SSG 멤버십 10,000원', value: 10000 },
                { type: 'points', text: 'SSG 포인트 3,050원', value: 3050 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 19,
            name: '애플 에어팟 프로 2세대 USB-C',
            mall: '옥션',
            image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=300&fit=crop',
            originalPrice: 359000,
            currentPrice: 315000,
            discount: 12,
            benefits: [
                { type: 'coupon', text: '옥션 쿠폰 6,000원', value: 6000 },
                { type: 'card', text: 'KB카드 2% 6,300원', value: 6300 },
                { type: 'points', text: '옥션 마일리지 3,150원', value: 3150 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 20,
            name: '애플 에어팟 프로 2세대 USB-C',
            mall: '인터파크',
            image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=300&fit=crop',
            originalPrice: 359000,
            currentPrice: 310000,
            discount: 14,
            benefits: [
                { type: 'coupon', text: '인터파크 쿠폰 7,000원', value: 7000 },
                { type: 'card', text: '우리카드 3% 9,300원', value: 9300 },
                { type: 'points', text: '인터파크 포인트 3,100원', value: 3100 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 21,
            name: '애플 에어팟 프로 2세대 USB-C',
            mall: '티몬',
            image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=300&fit=crop',
            originalPrice: 359000,
            currentPrice: 298000,
            discount: 17,
            benefits: [
                { type: 'coupon', text: '티몬 슈퍼세이브 10,000원', value: 10000 },
                { type: 'card', text: '하나카드 3% 8,940원', value: 8940 },
                { type: 'points', text: '티몬캐시 2,980원', value: 2980 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        }
    ],
    '다이슨 청소기': [
        {
            id: 8,
            name: '다이슨 V15 디텍트 앱솔루트',
            mall: '네이버쇼핑',
            image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=300&fit=crop',
            originalPrice: 1190000,
            currentPrice: 899000,
            discount: 24,
            benefits: [
                { type: 'coupon', text: '쿠폰 할인 50,000원', value: 50000 },
                { type: 'card', text: '카드 즉시할인 40,000원', value: 40000 },
                { type: 'membership', text: '멤버십 할인 30,000원', value: 30000 },
                { type: 'points', text: '적립금 8,990원', value: 8990 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 9,
            name: '다이슨 V15 디텍트 앱솔루트',
            mall: '쿠팡',
            image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=300&fit=crop',
            originalPrice: 1190000,
            currentPrice: 849000,
            discount: 29,
            benefits: [
                { type: 'coupon', text: '쿠폰 할인 30,000원', value: 30000 },
                { type: 'card', text: '삼성카드 6% 50,940원', value: 50940 },
                { type: 'membership', text: '로켓와우 회원 25,000원', value: 25000 },
                { type: 'points', text: '로켓와우 적립 8,490원', value: 8490 },
                { type: 'shipping', text: '로켓배송 무료', value: 0 }
            ]
        }
    ],
    '아이패드': [
        {
            id: 10,
            name: '애플 아이패드 10세대 WiFi 64GB',
            mall: '네이버쇼핑',
            image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop',
            originalPrice: 679000,
            currentPrice: 599000,
            discount: 12,
            benefits: [
                { type: 'coupon', text: '쿠폰 할인 20,000원', value: 20000 },
                { type: 'card', text: '카드 즉시할인 25,000원', value: 25000 },
                { type: 'points', text: '적립금 5,990원', value: 5990 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 11,
            name: '애플 아이패드 10세대 WiFi 64GB',
            mall: '쿠팡',
            image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop',
            originalPrice: 679000,
            currentPrice: 589000,
            discount: 13,
            benefits: [
                { type: 'coupon', text: '첫 구매 쿠폰 15,000원', value: 15000 },
                { type: 'card', text: '국민카드 4% 23,560원', value: 23560 },
                { type: 'membership', text: '로켓와우 회원 10,000원', value: 10000 },
                { type: 'points', text: '로켓와우 적립 5,890원', value: 5890 },
                { type: 'shipping', text: '로켓배송 무료', value: 0 }
            ]
        }
    ],
    '국내산 냉장 삼겹살': [
        {
            id: 50,
            name: '국내산 냉장 삼겹살 구이용 500g',
            mall: '맛꾼푸드',
            image: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=400&h=300&fit=crop',
            originalPrice: 15000,
            currentPrice: 13500,
            discount: 10,
            benefits: [
                { type: 'coupon', text: '첫 구매 쿠폰 1,000원', value: 1000 },
                { type: 'membership', text: '맛꾼 멤버십 500원', value: 500 },
                { type: 'points', text: '맛꾼 포인트 135원', value: 135 },
                { type: 'shipping', text: '무료배송 (3만원 이상)', value: 0 }
            ]
        },
        {
            id: 51,
            name: '국내산 냉장 삼겹살 구이용 500g',
            mall: '쿠팡',
            image: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=400&h=300&fit=crop',
            originalPrice: 16000,
            currentPrice: 14500,
            discount: 9,
            benefits: [
                { type: 'coupon', text: '쿠폰 할인 800원', value: 800 },
                { type: 'card', text: '삼성카드 5% 725원', value: 725 },
                { type: 'points', text: '로켓와우 적립 145원', value: 145 },
                { type: 'shipping', text: '로켓배송 무료', value: 0 }
            ]
        },
        {
            id: 52,
            name: '국내산 냉장 삼겹살 구이용 500g',
            mall: '마켓컬리',
            image: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=400&h=300&fit=crop',
            originalPrice: 15500,
            currentPrice: 14000,
            discount: 10,
            benefits: [
                { type: 'coupon', text: '컬리 쿠폰 1,200원', value: 1200 },
                { type: 'card', text: '현대카드 3% 420원', value: 420 },
                { type: 'membership', text: '컬리퍼플 500원', value: 500 },
                { type: 'points', text: '컬리 적립 140원', value: 140 },
                { type: 'shipping', text: '샛별배송 무료', value: 0 }
            ]
        },
        {
            id: 53,
            name: '국내산 냉장 삼겹살 구이용 500g',
            mall: 'SSG.COM',
            image: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=400&h=300&fit=crop',
            originalPrice: 16500,
            currentPrice: 15000,
            discount: 9,
            benefits: [
                { type: 'coupon', text: 'SSG 쿠폰 1,000원', value: 1000 },
                { type: 'card', text: '신세계 카드 5% 750원', value: 750 },
                { type: 'membership', text: 'SSG 멤버십 600원', value: 600 },
                { type: 'points', text: 'SSG 포인트 150원', value: 150 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 54,
            name: '국내산 냉장 삼겹살 구이용 500g',
            mall: '네이버 스마트스토어',
            image: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=400&h=300&fit=crop',
            originalPrice: 15800,
            currentPrice: 14200,
            discount: 10,
            benefits: [
                { type: 'coupon', text: '스토어 쿠폰 1,500원', value: 1500 },
                { type: 'card', text: '네이버페이 카드 600원', value: 600 },
                { type: 'points', text: '네이버페이 포인트 142원', value: 142 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 55,
            name: '국내산 냉장 삼겹살 구이용 500g',
            mall: '오아시스',
            image: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=400&h=300&fit=crop',
            originalPrice: 15200,
            currentPrice: 13800,
            discount: 9,
            benefits: [
                { type: 'coupon', text: '오아시스 쿠폰 900원', value: 900 },
                { type: 'card', text: '카드 할인 550원', value: 550 },
                { type: 'points', text: '오아시스 적립 138원', value: 138 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 56,
            name: '국내산 냉장 삼겹살 구이용 500g',
            mall: 'G마켓',
            image: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=400&h=300&fit=crop',
            originalPrice: 16200,
            currentPrice: 14800,
            discount: 9,
            benefits: [
                { type: 'coupon', text: '스마일클럽 쿠폰 1,100원', value: 1100 },
                { type: 'card', text: '현대카드 2% 296원', value: 296 },
                { type: 'points', text: '스마일캐시 148원', value: 148 },
                { type: 'shipping', text: '스마일배송 무료', value: 0 }
            ]
        },
        {
            id: 57,
            name: '국내산 냉장 삼겹살 구이용 500g',
            mall: '토스쇼핑',
            image: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=400&h=300&fit=crop',
            originalPrice: 15600,
            currentPrice: 14100,
            discount: 10,
            benefits: [
                { type: 'coupon', text: '토스 특가 쿠폰 1,300원', value: 1300 },
                { type: 'card', text: '토스페이 카드 700원', value: 700 },
                { type: 'points', text: '토스포인트 141원', value: 141 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 58,
            name: '국내산 냉장 삼겹살 구이용 500g',
            mall: '올웨이즈',
            image: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=400&h=300&fit=crop',
            originalPrice: 15400,
            currentPrice: 13900,
            discount: 10,
            benefits: [
                { type: 'coupon', text: '올웨이즈 쿠폰 1,000원', value: 1000 },
                { type: 'card', text: '카드 할인 600원', value: 600 },
                { type: 'points', text: '올웨이즈 적립 139원', value: 139 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 59,
            name: '국내산 냉장 삼겹살 구이용 500g',
            mall: '자연드림',
            image: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=400&h=300&fit=crop',
            originalPrice: 16800,
            currentPrice: 15500,
            discount: 8,
            benefits: [
                { type: 'coupon', text: '조합원 쿠폰 1,200원', value: 1200 },
                { type: 'membership', text: '조합원 할인 800원', value: 800 },
                { type: 'points', text: '자연드림 적립 155원', value: 155 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 60,
            name: '국내산 냉장 삼겹살 구이용 500g',
            mall: '제철밥상',
            image: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=400&h=300&fit=crop',
            originalPrice: 15100,
            currentPrice: 13600,
            discount: 10,
            benefits: [
                { type: 'coupon', text: '제철 특가 쿠폰 1,100원', value: 1100 },
                { type: 'card', text: '카드 할인 500원', value: 500 },
                { type: 'points', text: '제철밥상 적립 136원', value: 136 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 61,
            name: '국내산 냉장 삼겹살 구이용 500g',
            mall: '오늘의집',
            image: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=400&h=300&fit=crop',
            originalPrice: 15900,
            currentPrice: 14400,
            discount: 9,
            benefits: [
                { type: 'coupon', text: '오늘의집 쿠폰 1,000원', value: 1000 },
                { type: 'card', text: '카드 할인 650원', value: 650 },
                { type: 'points', text: '오늘의집 적립 144원', value: 144 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        }
    ],
    '한우 1++ 등심': [
        {
            id: 60,
            name: '한우 1++ 등심 200g',
            mall: '맛꾼푸드',
            image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=400&h=300&fit=crop',
            originalPrice: 45000,
            currentPrice: 42000,
            discount: 7,
            benefits: [
                { type: 'coupon', text: '프리미엄 쿠폰 3,000원', value: 3000 },
                { type: 'membership', text: '맛꾼 VIP 2,000원', value: 2000 },
                { type: 'points', text: '맛꾼 포인트 420원', value: 420 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 61,
            name: '한우 1++ 등심 200g',
            mall: '쿠팡',
            image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=400&h=300&fit=crop',
            originalPrice: 48000,
            currentPrice: 45000,
            discount: 6,
            benefits: [
                { type: 'coupon', text: '쿠폰 할인 2,500원', value: 2500 },
                { type: 'card', text: '삼성카드 5% 2,250원', value: 2250 },
                { type: 'points', text: '로켓와우 적립 450원', value: 450 },
                { type: 'shipping', text: '로켓배송 무료', value: 0 }
            ]
        },
        {
            id: 62,
            name: '한우 1++ 등심 200g',
            mall: '마켓컬리',
            image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=400&h=300&fit=crop',
            originalPrice: 46000,
            currentPrice: 43000,
            discount: 7,
            benefits: [
                { type: 'coupon', text: '컬리 프리미엄 쿠폰 3,500원', value: 3500 },
                { type: 'card', text: '현대카드 3% 1,290원', value: 1290 },
                { type: 'membership', text: '컬리퍼플 1,500원', value: 1500 },
                { type: 'points', text: '컬리 적립 430원', value: 430 },
                { type: 'shipping', text: '샛별배송 무료', value: 0 }
            ]
        },
        {
            id: 63,
            name: '한우 1++ 등심 200g',
            mall: 'SSG.COM',
            image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=400&h=300&fit=crop',
            originalPrice: 47000,
            currentPrice: 44000,
            discount: 6,
            benefits: [
                { type: 'coupon', text: 'SSG 프리미엄 쿠폰 3,000원', value: 3000 },
                { type: 'card', text: '신세계 카드 5% 2,200원', value: 2200 },
                { type: 'membership', text: 'SSG VIP 2,000원', value: 2000 },
                { type: 'points', text: 'SSG 포인트 440원', value: 440 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 64,
            name: '한우 1++ 등심 200g',
            mall: '네이버 스마트스토어',
            image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=400&h=300&fit=crop',
            originalPrice: 46500,
            currentPrice: 43500,
            discount: 6,
            benefits: [
                { type: 'coupon', text: '스토어 쿠폰 4,000원', value: 4000 },
                { type: 'card', text: '네이버페이 카드 1,800원', value: 1800 },
                { type: 'points', text: '네이버페이 포인트 435원', value: 435 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 65,
            name: '한우 1++ 등심 200g',
            mall: 'G마켓',
            image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=400&h=300&fit=crop',
            originalPrice: 47500,
            currentPrice: 44500,
            discount: 6,
            benefits: [
                { type: 'coupon', text: '스마일클럽 쿠폰 2,800원', value: 2800 },
                { type: 'card', text: '현대카드 2% 890원', value: 890 },
                { type: 'points', text: '스마일캐시 445원', value: 445 },
                { type: 'shipping', text: '스마일배송 무료', value: 0 }
            ]
        },
        {
            id: 66,
            name: '한우 1++ 등심 200g',
            mall: '토스쇼핑',
            image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=400&h=300&fit=crop',
            originalPrice: 46800,
            currentPrice: 43800,
            discount: 6,
            benefits: [
                { type: 'coupon', text: '토스 프리미엄 쿠폰 3,200원', value: 3200 },
                { type: 'card', text: '토스페이 카드 1,800원', value: 1800 },
                { type: 'points', text: '토스포인트 438원', value: 438 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 67,
            name: '한우 1++ 등심 200g',
            mall: '올웨이즈',
            image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=400&h=300&fit=crop',
            originalPrice: 46200,
            currentPrice: 43200,
            discount: 6,
            benefits: [
                { type: 'coupon', text: '올웨이즈 프리미엄 쿠폰 3,000원', value: 3000 },
                { type: 'card', text: '카드 할인 1,600원', value: 1600 },
                { type: 'points', text: '올웨이즈 적립 432원', value: 432 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 68,
            name: '한우 1++ 등심 200g',
            mall: '자연드림',
            image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=400&h=300&fit=crop',
            originalPrice: 48500,
            currentPrice: 45500,
            discount: 6,
            benefits: [
                { type: 'coupon', text: '조합원 프리미엄 쿠폰 3,500원', value: 3500 },
                { type: 'membership', text: '조합원 할인 2,500원', value: 2500 },
                { type: 'points', text: '자연드림 적립 455원', value: 455 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 69,
            name: '한우 1++ 등심 200g',
            mall: '제철밥상',
            image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=400&h=300&fit=crop',
            originalPrice: 45800,
            currentPrice: 42800,
            discount: 7,
            benefits: [
                { type: 'coupon', text: '제철 한우 특가 쿠폰 3,300원', value: 3300 },
                { type: 'card', text: '카드 할인 1,500원', value: 1500 },
                { type: 'points', text: '제철밥상 적립 428원', value: 428 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 70,
            name: '한우 1++ 등심 200g',
            mall: '오늘의집',
            image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=400&h=300&fit=crop',
            originalPrice: 47200,
            currentPrice: 44200,
            discount: 6,
            benefits: [
                { type: 'coupon', text: '오늘의집 쿠폰 2,900원', value: 2900 },
                { type: 'card', text: '카드 할인 1,700원', value: 1700 },
                { type: 'points', text: '오늘의집 적립 442원', value: 442 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        }
    ],
    '프리미엄 LA갈비': [
        {
            id: 80,
            name: '프리미엄 LA갈비 1kg',
            mall: '맛꾼푸드',
            image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop',
            originalPrice: 35000,
            currentPrice: 32000,
            discount: 9,
            benefits: [
                { type: 'coupon', text: '갈비 특가 쿠폰 2,500원', value: 2500 },
                { type: 'membership', text: '맛꾼 멤버십 1,500원', value: 1500 },
                { type: 'points', text: '맛꾼 포인트 320원', value: 320 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 71,
            name: '프리미엄 LA갈비 1kg',
            mall: '쿠팡',
            image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop',
            originalPrice: 36000,
            currentPrice: 33500,
            discount: 7,
            benefits: [
                { type: 'coupon', text: '쿠폰 할인 2,000원', value: 2000 },
                { type: 'card', text: '삼성카드 5% 1,675원', value: 1675 },
                { type: 'points', text: '로켓와우 적립 335원', value: 335 },
                { type: 'shipping', text: '로켓배송 무료', value: 0 }
            ]
        },
        {
            id: 72,
            name: '프리미엄 LA갈비 1kg',
            mall: '마켓컬리',
            image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop',
            originalPrice: 35500,
            currentPrice: 32500,
            discount: 8,
            benefits: [
                { type: 'coupon', text: '컬리 쿠폰 2,800원', value: 2800 },
                { type: 'card', text: '현대카드 3% 975원', value: 975 },
                { type: 'membership', text: '컬리퍼플 1,200원', value: 1200 },
                { type: 'points', text: '컬리 적립 325원', value: 325 },
                { type: 'shipping', text: '샛별배송 무료', value: 0 }
            ]
        },
        {
            id: 73,
            name: '프리미엄 LA갈비 1kg',
            mall: 'SSG.COM',
            image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop',
            originalPrice: 37000,
            currentPrice: 34000,
            discount: 8,
            benefits: [
                { type: 'coupon', text: 'SSG 쿠폰 2,500원', value: 2500 },
                { type: 'card', text: '신세계 카드 5% 1,700원', value: 1700 },
                { type: 'membership', text: 'SSG 멤버십 1,500원', value: 1500 },
                { type: 'points', text: 'SSG 포인트 340원', value: 340 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 74,
            name: '프리미엄 LA갈비 1kg',
            mall: '네이버 스마트스토어',
            image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop',
            originalPrice: 35800,
            currentPrice: 32800,
            discount: 8,
            benefits: [
                { type: 'coupon', text: '스토어 쿠폰 3,000원', value: 3000 },
                { type: 'card', text: '네이버페이 카드 1,400원', value: 1400 },
                { type: 'points', text: '네이버페이 포인트 328원', value: 328 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 75,
            name: '프리미엄 LA갈비 1kg',
            mall: '카카오 톡딜',
            image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop',
            originalPrice: 36500,
            currentPrice: 33000,
            discount: 10,
            benefits: [
                { type: 'coupon', text: '톡딜 특가 쿠폰 2,200원', value: 2200 },
                { type: 'card', text: '카카오페이 카드 1,320원', value: 1320 },
                { type: 'membership', text: '카카오 멤버십 1,000원', value: 1000 },
                { type: 'points', text: '카카오페이 포인트 330원', value: 330 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 86,
            name: '프리미엄 LA갈비 1kg',
            mall: 'G마켓',
            image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop',
            originalPrice: 36800,
            currentPrice: 33800,
            discount: 8,
            benefits: [
                { type: 'coupon', text: '스마일클럽 쿠폰 2,300원', value: 2300 },
                { type: 'card', text: '현대카드 2% 676원', value: 676 },
                { type: 'points', text: '스마일캐시 338원', value: 338 },
                { type: 'shipping', text: '스마일배송 무료', value: 0 }
            ]
        },
        {
            id: 87,
            name: '프리미엄 LA갈비 1kg',
            mall: '토스쇼핑',
            image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop',
            originalPrice: 36200,
            currentPrice: 33200,
            discount: 8,
            benefits: [
                { type: 'coupon', text: '토스 갈비 특가 쿠폰 2,600원', value: 2600 },
                { type: 'card', text: '토스페이 카드 1,400원', value: 1400 },
                { type: 'points', text: '토스포인트 332원', value: 332 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 88,
            name: '프리미엄 LA갈비 1kg',
            mall: '올웨이즈',
            image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop',
            originalPrice: 35600,
            currentPrice: 32600,
            discount: 8,
            benefits: [
                { type: 'coupon', text: '올웨이즈 쿠폰 2,400원', value: 2400 },
                { type: 'card', text: '카드 할인 1,300원', value: 1300 },
                { type: 'points', text: '올웨이즈 적립 326원', value: 326 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 89,
            name: '프리미엄 LA갈비 1kg',
            mall: '자연드림',
            image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop',
            originalPrice: 37500,
            currentPrice: 34500,
            discount: 8,
            benefits: [
                { type: 'coupon', text: '조합원 쿠폰 2,800원', value: 2800 },
                { type: 'membership', text: '조합원 할인 1,800원', value: 1800 },
                { type: 'points', text: '자연드림 적립 345원', value: 345 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 90,
            name: '프리미엄 LA갈비 1kg',
            mall: '제철밥상',
            image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop',
            originalPrice: 35300,
            currentPrice: 32300,
            discount: 8,
            benefits: [
                { type: 'coupon', text: '제철 갈비 특가 쿠폰 2,700원', value: 2700 },
                { type: 'card', text: '카드 할인 1,200원', value: 1200 },
                { type: 'points', text: '제철밥상 적립 323원', value: 323 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        },
        {
            id: 91,
            name: '프리미엄 LA갈비 1kg',
            mall: '오늘의집',
            image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop',
            originalPrice: 36600,
            currentPrice: 33600,
            discount: 8,
            benefits: [
                { type: 'coupon', text: '오늘의집 쿠폰 2,500원', value: 2500 },
                { type: 'card', text: '카드 할인 1,350원', value: 1350 },
                { type: 'points', text: '오늘의집 적립 336원', value: 336 },
                { type: 'shipping', text: '무료배송', value: 0 }
            ]
        }
    ]
};

// ==================== State Management ====================
let currentResults = [];
let currentFilter = 'all';
let currentView = 'grid';

// ==================== DOM Elements ====================
// ==================== DOM Elements ====================
let searchInput = null;
let searchBtn = null;
let resultsSection = null;
let resultsGrid = null;
let loadingOverlay = null;
let searchQuery = null;
let resultCount = null;
let lastUpdated = null;

// ==================== Event Listeners ====================
// Event listeners are initialized in DOMContentLoaded at the bottom of the file

// Filter buttons
// Filter and View event listeners are moved to DOMContentLoaded

// ==================== Price Update Function ====================
function updatePricesInRealTime(products) {
    // 검색 시간 기준으로 가격을 동적으로 업데이트
    return products.map(product => {
        // 기본 가격에서 ±3% 범위 내에서 랜덤하게 변동
        const priceVariation = Math.floor(product.currentPrice * (Math.random() * 0.06 - 0.03));
        const updatedCurrentPrice = product.currentPrice + priceVariation;

        // 할인율도 약간 변동 (±2% 범위)
        const discountVariation = Math.floor(Math.random() * 5 - 2);
        const updatedDiscount = Math.max(5, Math.min(30, product.discount + discountVariation));

        // 혜택도 동적으로 업데이트
        const updatedBenefits = product.benefits.map(benefit => {
            if (benefit.type === 'coupon' || benefit.type === 'card' || benefit.type === 'membership') {
                // 할인 혜택은 ±15% 범위 내에서 변동
                const benefitVariation = Math.floor(benefit.value * (Math.random() * 0.3 - 0.15));
                const newValue = Math.max(0, benefit.value + benefitVariation);
                // 1000원 단위로 반올림
                const roundedValue = Math.round(newValue / 1000) * 1000;

                return {
                    ...benefit,
                    value: roundedValue,
                    text: benefit.text.replace(/[\d,]+원/, `${roundedValue.toLocaleString('ko-KR')}원`)
                };
            } else if (benefit.type === 'points') {
                // 포인트는 현재 가격의 1% 정도로 재계산
                const newPoints = Math.floor(updatedCurrentPrice * 0.01);
                return {
                    ...benefit,
                    value: newPoints,
                    text: benefit.text.replace(/[\d,]+원/, `${newPoints.toLocaleString('ko-KR')}원`)
                };
            }
            return benefit;
        });

        return {
            ...product,
            currentPrice: updatedCurrentPrice,
            discount: updatedDiscount,
            benefits: updatedBenefits,
            lastUpdated: new Date()
        };
    });
}

// ==================== Search Function ====================
async function handleSearch() {
    const query = searchInput.value.trim();

    if (!query) {
        alert('검색어를 입력해주세요.');
        return;
    }

    // Show loading
    loadingOverlay.style.display = 'flex';
    resultsSection.style.display = 'none';

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Get results with partial matching
    let baseResults = [];

    // Check for exact match first
    if (mockProducts[query]) {
        baseResults = [...mockProducts[query]];
    }

    // Check for partial matches
    Object.keys(mockProducts).forEach(key => {
        if (key.toLowerCase().includes(query.toLowerCase()) && key !== query) {
            baseResults = [...baseResults, ...mockProducts[key]];
        }
    });

    if (baseResults.length === 0) {
        loadingOverlay.style.display = 'none';
        alert(`"${query}"에 대한 검색 결과가 없습니다. 다른 검색어를 시도해보세요.`);
        return;
    }

    // 실시간 가격 업데이트 적용
    const updatedResults = updatePricesInRealTime(baseResults);

    currentResults = updatedResults;
    displayResults(query, updatedResults);

    // Hide loading
    loadingOverlay.style.display = 'none';
    resultsSection.style.display = 'block';

    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// ==================== Display Results ====================
function displayResults(query, results) {
    searchQuery.textContent = `"${query}" 검색 결과`;
    resultCount.textContent = results.length;
    lastUpdated.textContent = `최근 업데이트: ${new Date().toLocaleString('ko-KR')}`;

    renderProducts(results);
}

// ==================== Render Products ====================
function renderProducts(products) {
    // Calculate final prices with all benefits and find lowest
    const productsWithFinalPrice = products.map(product => {
        // Calculate total discount benefits (excluding points which are earned, not discounted)
        const totalBenefitDiscount = product.benefits
            .filter(b => b.type !== 'points' && b.type !== 'shipping')
            .reduce((sum, benefit) => sum + benefit.value, 0);

        // Calculate total points earned
        const totalPoints = product.benefits
            .filter(b => b.type === 'points')
            .reduce((sum, benefit) => sum + benefit.value, 0);

        return {
            ...product,
            totalBenefitDiscount,
            totalPoints,
            finalPrice: product.currentPrice - totalBenefitDiscount
        };
    });

    const lowestPrice = Math.min(...productsWithFinalPrice.map(p => p.finalPrice));

    resultsGrid.innerHTML = productsWithFinalPrice.map(product => {
        const isLowest = product.finalPrice === lowestPrice;

        return `
            <div class="product-card ${isLowest ? 'lowest-price' : ''}" data-id="${product.id}">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-content">
                    <div class="product-header">
                        <span class="mall-name">${product.mall}</span>
                        ${isLowest ? '<span class="lowest-badge">최저가</span>' : ''}
                    </div>
                    
                    <h4 class="product-name">${product.name}</h4>
                    
                    <div class="price-section">
                        <div class="original-price">${formatPrice(product.originalPrice)}원</div>
                        <div>
                            <span class="current-price">${formatPrice(product.currentPrice)}원</span>
                            <span class="discount-rate">${product.discount}%</span>
                        </div>
                        ${product.totalBenefitDiscount > 0 ? `
                        <div style="color: var(--accent-color); font-size: var(--font-size-sm); margin: 4px 0;">
                            총 혜택 ${formatPrice(product.totalBenefitDiscount)}원 할인
                        </div>
                        ` : ''}
                        <div class="final-price">
                            <span class="final-price-label">최종 혜택가</span>
                            ${formatPrice(product.finalPrice)}원
                        </div>
                        ${product.totalPoints > 0 ? `
                        <div style="color: var(--success-color); font-size: var(--font-size-xs); margin-top: 4px;">
                            + ${formatPrice(product.totalPoints)}원 적립
                        </div>
                        ` : ''}
                    </div>
                    
                    <div class="benefits">
                        ${product.benefits.map(benefit => `
                            <div class="benefit-item">
                                <svg class="benefit-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span>${benefit.text}</span>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div class="product-footer">
                        <button class="btn btn-primary" onclick="goToMall('${product.mall}')">
                            구매하기
                        </button>
                        <button class="btn btn-secondary" onclick="addToFavorites(${product.id})">
                            ♥
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// ==================== Filter Function ====================
function applyFilter() {
    let filteredProducts = [...currentResults];

    // Calculate benefits for sorting
    const productsWithCalc = filteredProducts.map(product => {
        const totalBenefitDiscount = product.benefits
            .filter(b => b.type !== 'points' && b.type !== 'shipping')
            .reduce((sum, benefit) => sum + benefit.value, 0);

        const totalPoints = product.benefits
            .filter(b => b.type === 'points')
            .reduce((sum, benefit) => sum + benefit.value, 0);

        return {
            ...product,
            totalBenefitDiscount,
            totalPoints,
            finalPrice: product.currentPrice - totalBenefitDiscount
        };
    });

    switch (currentFilter) {
        case 'lowest':
            productsWithCalc.sort((a, b) => a.finalPrice - b.finalPrice);
            break;
        case 'discount':
            productsWithCalc.sort((a, b) => b.discount - a.discount);
            break;
        case 'benefit':
            productsWithCalc.sort((a, b) => b.totalBenefitDiscount - a.totalBenefitDiscount);
            break;
        default:
            // 'all' - keep original order
            break;
    }

    renderProducts(productsWithCalc);
}

// ==================== View Toggle ====================
function toggleView() {
    if (currentView === 'list') {
        resultsGrid.classList.add('list-view');
    } else {
        resultsGrid.classList.remove('list-view');
    }
}

// ==================== Utility Functions ====================
function formatPrice(price) {
    return price.toLocaleString('ko-KR');
}

function goToMall(mall) {
    alert(`${mall}로 이동합니다.`);
    // 실제 환경에서는 해당 쇼핑몰 링크로 이동
}

function addToFavorites(productId) {
    alert(`상품 ID ${productId}를 즐겨찾기에 추가했습니다.`);
    // 실제 환경에서는 로컬스토리지나 서버에 저장
}

// ==================== Smooth Scroll ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ==================== Navigation Functions ====================
function handleHome() {
    document.querySelector('.hero').style.display = 'block';
    resultsSection.style.display = 'none';
    searchInput.value = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    updateActiveNavLink('홈');
}

function handlePopular() {
    loadingOverlay.style.display = 'flex';

    setTimeout(() => {
        // Collect one product from each category to show diverse popular items
        let popularItems = [];
        Object.keys(mockProducts).forEach(key => {
            if (mockProducts[key] && mockProducts[key].length > 0) {
                // Add the first item (usually the official store or best price)
                popularItems.push(mockProducts[key][0]);
            }
        });

        // Shuffle array
        popularItems.sort(() => Math.random() - 0.5);

        // Display results
        document.querySelector('.hero').style.display = 'none';
        resultsSection.style.display = 'block';
        searchQuery.textContent = "실시간 인기상품";
        resultCount.textContent = popularItems.length;
        lastUpdated.textContent = `기준: ${new Date().toLocaleString('ko-KR')}`;

        // Update prices for realism
        const updatedResults = updatePricesInRealTime(popularItems);
        currentResults = updatedResults;
        renderProducts(updatedResults);

        loadingOverlay.style.display = 'none';
        updateActiveNavLink('인기상품');
    }, 800);
}

function handleCategory() {
    document.querySelector('.hero').style.display = 'none';
    resultsSection.style.display = 'block';
    searchQuery.textContent = "카테고리";
    resultCount.textContent = "전체";
    lastUpdated.textContent = "";

    // Define categories
    const categories = [
        { name: '전자제품', icon: '📱', keywords: ['갤럭시 S24', '에어팟 프로', '다이슨 청소기', '아이패드'] },
        { name: '식품', icon: '🥩', keywords: ['국내산 냉장 삼겹살', '한우 1++ 등심', '프리미엄 LA갈비'] },
        { name: '생활용품', icon: '🪑', keywords: [] },
        { name: '패션/의류', icon: '👕', keywords: [] },
        { name: '뷰티/화장품', icon: '💄', keywords: [] },
        { name: '스포츠/레저', icon: '⚽', keywords: [] }
    ];

    // Render category cards
    resultsGrid.innerHTML = categories.map(cat => `
        <div class="category-card" onclick="searchCategory('${cat.name}')" style="
            background: var(--bg-card); 
            padding: 30px; 
            border-radius: 16px; 
            text-align: center; 
            cursor: pointer; 
            border: 1px solid var(--border-color);
            transition: all 0.3s ease;
        ">
            <div style="font-size: 40px; margin-bottom: 15px;">${cat.icon}</div>
            <h3 style="color: var(--text-primary); margin-bottom: 10px;">${cat.name}</h3>
            <p style="color: var(--text-secondary); font-size: 0.9rem;">${cat.keywords.length > 0 ? cat.keywords.length + '개 상품' : '준비중'}</p>
        </div>
    `).join('');

    // Add hover effect via JS since inline styles are limited
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.borderColor = 'var(--primary-color)';
            card.style.boxShadow = 'var(--shadow-lg)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.borderColor = 'var(--border-color)';
            card.style.boxShadow = 'none';
        });
    });

    updateActiveNavLink('카테고리');
}

function searchCategory(categoryName) {
    // Find keywords for this category
    const categories = [
        { name: '전자제품', keywords: ['갤럭시 S24', '에어팟 프로', '다이슨 청소기', '아이패드'] },
        { name: '식품', keywords: ['국내산 냉장 삼겹살', '한우 1++ 등심', '프리미엄 LA갈비'] }
    ];

    const category = categories.find(c => c.name === categoryName);

    if (category && category.keywords.length > 0) {
        // Show all products in this category
        loadingOverlay.style.display = 'flex';

        setTimeout(() => {
            let categoryItems = [];
            category.keywords.forEach(keyword => {
                if (mockProducts[keyword]) {
                    categoryItems = [...categoryItems, ...mockProducts[keyword]];
                }
            });

            // Display results
            searchQuery.textContent = `${categoryName} 인기상품`;
            resultCount.textContent = categoryItems.length;

            const updatedResults = updatePricesInRealTime(categoryItems);
            currentResults = updatedResults;
            renderProducts(updatedResults);

            loadingOverlay.style.display = 'none';
        }, 800);
    } else {
        alert('해당 카테고리의 상품이 아직 준비되지 않았습니다.');
    }
}

function searchKeyword(keyword) {
    if (searchInput) {
        searchInput.value = keyword;
        handleSearch();
    }
}

function updateActiveNavLink(text) {
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.textContent === text) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Expose functions to window for HTML onclick access
window.handleSearch = handleSearch;
window.handleHome = handleHome;
window.handlePopular = handlePopular;
window.handleCategory = handleCategory;
window.searchCategory = searchCategory;
window.searchKeyword = searchKeyword;
window.goToMall = goToMall;
window.addToFavorites = addToFavorites;
window.toggleView = toggleView;
window.applyFilter = applyFilter;

// ==================== Initialize & Event Listeners ====================
document.addEventListener('DOMContentLoaded', () => {
    console.log('가격비교 앱이 로드되었습니다.');

    // Initialize DOM Elements
    searchInput = document.getElementById('searchInput');
    searchBtn = document.getElementById('searchBtn');
    resultsSection = document.getElementById('resultsSection');
    resultsGrid = document.getElementById('resultsGrid');
    loadingOverlay = document.getElementById('loadingOverlay');
    searchQuery = document.getElementById('searchQuery');
    resultCount = document.getElementById('resultCount');
    lastUpdated = document.getElementById('lastUpdated');

    // Navigation Event Listeners
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const text = link.textContent.trim();

            if (text === '홈') handleHome();
            else if (text === '인기상품') handlePopular();
            else if (text === '카테고리') handleCategory();
            else if (text === '즐겨찾기') alert('즐겨찾기 기능은 준비중입니다.');
        });
    });

    // Logo click to home
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', handleHome);
    }

    // Search Event Listeners
    if (searchBtn) {
        searchBtn.addEventListener('click', handleSearch);
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }

    // Popular Keywords Event Listeners
    const keywordTags = document.querySelectorAll('.keyword-tag');
    keywordTags.forEach(tag => {
        tag.addEventListener('click', () => {
            const keyword = tag.getAttribute('data-keyword');
            if (searchInput) {
                searchInput.value = keyword;
                handleSearch();
            }
        });
    });

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            applyFilter();
        });
    });

    // View toggle
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentView = btn.dataset.view;
            toggleView();
        });
    });
});
