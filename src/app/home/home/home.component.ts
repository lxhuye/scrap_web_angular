import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/modal/api.Service';
import SwiperCore, { Virtual, Autoplay, Pagination, Navigation } from "swiper/core";
import { api } from 'src/app/modal/api';

SwiperCore.use([Virtual, Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  providers: [ApiService]
})
export class HomeComponent implements OnInit {

  public linkList: Array<any> = [
    {
      name: '长江有色金属网',
      url: 'https://www.ccmn.cn/'
    },
    {
      name: '上海有色网',
      url: 'http://www.smm.cn'
    },
    {
      name: '上海金属网',
      url: 'http://www.shmet.com'
    },
    {
      name: '中国铝业网',
      url: 'http://www.alu.cn/"'
    },
    {
      name: '中华压铸网',
      url: 'http://www.001cndc.com/'
    },
    {
      name: '长江有色金属',
      url: 'http://www.ccmn.cn/'
    },
    {
      name: '中国循环经济协会',
      url: 'http://www.chinacace.org'
    },
    {
      name: '中国有色金属工业协会',
      url: 'http://www.chinania.org.cn'
    },
    {
      name: '铝材网',
      url: 'http://www.lvcai.biz'
    },
    {
      name: '铜之家',
      url: 'http://www.copperhome.net/'
    },
    {
      name: '第一压铸网',
      url: 'http://www.iyazhu.com'
    },
    {
      name: '中铝网',
      url: 'http://www.cnal.com'
    },
    {
      name: '灵通网',
      url: 'http://www.lingtong.info'
    },
    {
      name: '上海金属网',
      url: 'http://www.shmet.com'
    },
    {
      name: '中国铝业网',
      url: 'http://www.alu.cn/'
    },
    {
      name: '全球五金网',
      url: 'http://www.wjw.cn/'
    },
    {
      name: '新浪期货网',
      url: 'http://finance.sina.com.cn/futuremarket/'
    },
    {
      name: '九正建材网',
      url: 'http://www.jc001.cn/'
    },
    {
      name: '网易期货网',
      url: 'http://money.163.com/futures/'
    },
    {
      name: '长江铜业网',
      url: 'http://copper.ccmn.cn/copperprice/cjxh/'
    },
    {
      name: '汇金网',
      url: 'http://www.gold678.com/'
    },
    {
      name: '新浪贵金网',
      url: 'http://finance.sina.com.cn/nmetal/index.shtml'
    },
    {
      name: '中国能源网',
      url: 'http://www.china5e.com/'
    },
    {
      name: '富宝资讯',
      url: 'http://www.f139.com/'
    },
    {
      name: '南方财富网',
      url: 'http://www.southmoney.com/'
    },
    {
      name: '中国青年网',
      url: 'http://finance.youth.cn/'
    },
    {
      name: '中国有色网',
      url: 'http://www.cnmn.com.cn/'
    },
    {
      name: '中国有色金属人才网',
      url: 'http://www.ysrencai.com/'
    },
    {
      name: '中国环保在线',
      url: 'http://www.hbzhan.com/'
    },
    {
      name: '再生资源网',
      url: 'http://www.huishoushang.com/'
    },
    {
      name: '废金属资讯网',
      url: 'http://www.feijs.com/'
    },
    {
      name: '商务网',
      url: 'http://www.booksir.com.cn/'
    },
    {
      name: '国际贸易网',
      url: 'http://www.vooec.com/'
    },
    {
      name: '中国化工设备网',
      url: 'http://www.ccen.net/'
    },
    {
      name: '中国环保设备展览网',
      url: 'http://www.hbzhan.com/'
    },
    {
      name: '中国包装网',
      url: 'http://www.pack.cn/'
    },
    {
      name: '中国新能源网',
      url: 'http://www.china-nengyuan.com/'
    },
    {
      name: '中国压铸网',
      url: 'http://www.yzw.cc'
    }
  ];

  public newsList: Array<any> = [
    {
      name: '鹰潭青年企业家协会赴XXX实业学习交流',
      time: '2021-01-15'
    },
    {
      name: 'XXX实业荣获再生资源行业二十强企业',
      time: '2020-12-29'
    },
    {
      name: '鹰潭市副市长廖良生莅临XXX实业调研',
      time: '2020-12-23'
    },
    {
      name: 'XXX实业董事长彭XXX荣获江西省铜行业协会优秀企业家荣誉称号',
      time: '2020-12-10'
    },
    {
      name: 'XXX实业集团铝型材、铜材荣获江西名牌产品',
      time: '2020-11-30'
    },
    {
      name: 'XXX实业集团荣获2020年江西民营企业100强第24位',
      time: '2020-11-08'
    },
    {
      name: '长江商学院考察团到XXX实业参观指导',
      time: '2020-10-24'
    },
    {
      name: '上海铝协企业家考察团赴XXX实业学习交流',
      time: '2020-10-24'
    },
    {
      name: 'XXX实业董事长彭XXX为江西省“十四五”规划建言献策',
      time: '2020-10-14'
    },
    {
      name: 'XXX实业年产15万吨铝合金锭生产线顺利投产',
      time: '2020-10-04'
    },
    {
      name: 'XXX实业集团“西海逍遥游”',
      time: '2020-09-15'
    },
    {
      name: '企业之声｜彭XXX：“质优价廉”是XXX实业的致胜法宝',
      time: '2020-08-29'
    },
    {
      name: 'XXX实业：有色金属再生资源利用的急先锋',
      time: '2020-08-24'
    },
    {
      name: '第十七届中国铸造铝合金产业链发展论坛在邹平召开',
      time: '2020-08-24'
    },
    {
      name: '鹰潭市代市长陈敏到XXX实业集团调研',
      time: '2020-07-07'
    },
    {
      name: '省委统战部副部长刘伟旗一行调研考察XXX实业',
      time: '2020-06-05'
    },
    {
      name: '余江区委书记苏建军“五一”看望慰问省劳模彭XXX',
      time: '2020-05-01'
    },
    {
      name: 'XXX实业加大环保投入 保护家乡环境',
      time: '2020-01-15'
    },
    {
      name: 'XXX实业集团荣获鹰潭市工业企业2019年度贡献奖',
      time: '2020-01-11'
    },
    {
      name: '市政协主席戴春英走访XXX实业',
      time: '2020-01-09'
    }
  ];

  public content: String = '  XXX实业有色金属集团有限公司创办于2002年，其前身为鹰潭市兴发有色金属有限公司，集团公司正式成立于2009年3月31日。公司地处山青水秀，东拥信江，西有白塔河，南向龙虎山，北靠打鼓岭。公司下辖六家子公司，占地面积500多亩，员工800多人。2020年销售收入78.6亿元，缴纳税收4.5亿元。  XXX实业是商务部批准的国家区域性大型回收利用基地，是工信部批准的“废钢铁加工行业准入企业”、“铝行业准入企业”，是国家高新技术企业，是鹰潭市纳税大户。十年来都是江西省百强企业，先后被江西省人民政府授予“江西省工业优强企业”、“先进非公有制企业”、“优秀中国特色社会主义事业建设者”等荣誉。2020年被评为…';

  // testSwiper: Swiper;
  slides = [
    // {
    //   img: '../../../assets/image/20201229153315.jpg',
    //   name: '民营企业第12位'
    // },
    {
      img: 'assets/image/20201229153216.jpg',
      name: '博爱单位'
    },
    {
      img: 'assets/image/20201229151416.jpg',
      name: '单项冠军培育企业'
    }
  ];
  slidesList = ['http://www.baotaigroup.com.cn/upfiles/2020/12/29/20201229162407.png', 'http://www.baotaigroup.com.cn/upfiles/2020/12/29/20201229162105.png', 'http://www.baotaigroup.com.cn/upfiles/2020/12/29/20201229153851.jpg', 'http://www.baotaigroup.com.cn/upfiles/2020/12/29/20201229154034.jpg', 'http://www.baotaigroup.com.cn/upfiles/2020/12/29/20201229154330.jpg', 'http://www.baotaigroup.com.cn/upfiles/2020/12/29/20201229161630.png', 'http://www.baotaigroup.com.cn/upfiles/2020/12/29/20201229161010.jpg', 'http://www.baotaigroup.com.cn/upfiles/2020/12/29/20201229160034.png']

  public typeList: Array<any> = [];

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.getTypeList();
  }

  getTypeList() {
    const data = {
      pageDataCount: 100,
      queryPageNum: 1,
    }
    this.apiService.postRequest(api.listType, data).then(res => {
      if (res.success) {
        this.typeList = res.list;
      }
    })
  }
}
