import { Component, OnInit } from '@angular/core';
import { NavItem, RoutingItemTypeEnum } from 'src/app/core/enums/routing-item.enum';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isToggle = false;
  navItems: NavItem[] = []
  routingItemTypeEnum = RoutingItemTypeEnum

  constructor() { }

  ngOnInit() {
    this.navItems = this.loadNavItem()
  }

  loadNavItem(): NavItem[] {
    return [
      {
        id: 0,
        display: 'Phim Bộ',
        router: '/danh-sach/phim-bo',
        type: RoutingItemTypeEnum.LINK,
        isActive: false
      },
      {
        id: 1,
        display: 'Phim Lẻ',
        router: '/danh-sach/phim-le',
        type: RoutingItemTypeEnum.LINK,
        isActive: false
      },
      {
        id: 2,
        display: 'Shows',
        router: '/danh-sach/shows',
        type: RoutingItemTypeEnum.LINK,
        isActive: false
      },
      {
        id: 3,
        display: 'Hoạt Hình',
        router: '/danh-sach/hoat-hinh',
        type: RoutingItemTypeEnum.LINK,
        isActive: false
      },
      {
        id: 4,
        display: 'Thể Loại',
        router: '/the-loai',
        type: RoutingItemTypeEnum.DROPDOWN,
        isActive: false,
        isInvisable: true,
        childs: [
          {
            id: 4,
            display: 'Hành Động',
            router: '/the-loai/hanh-dong',
            type: RoutingItemTypeEnum.LINK,
            isActive: false
          },
          {
            id: 4,
            display: 'Cổ Trang',
            router: '/the-loai/co-trang',
            type: RoutingItemTypeEnum.LINK,
            isActive: false
          },
          {
            id: 4,
            display: 'Tình Cảm',
            router: '/the-loai/tinh-cam',
            type: RoutingItemTypeEnum.LINK,
            isActive: false
          },
          {
            id: 4,
            display: 'Hài Hước',
            router: '/the-loai/hai-huoc',
            type: RoutingItemTypeEnum.LINK,
            isActive: false
          },
          {
            id: 4,
            display: 'Hình Sự',
            router: '/the-loai/hinh-su',
            type: RoutingItemTypeEnum.LINK,
            isActive: false
          },
          {
            id: 4,
            display: 'Chiến Tranh',
            router: '/the-loai/chien-tranh',
            type: RoutingItemTypeEnum.LINK,
            isActive: false
          },
          {
            id: 4,
            display: 'Thể thao',
            router: '/the-loai/the-thao',
            type: RoutingItemTypeEnum.LINK,
            isActive: false
          },
          {
            id: 4,
            display: 'Võ Thuật',
            router: '/the-loai/vo-thuat',
            type: RoutingItemTypeEnum.LINK,
            isActive: false
          },
          {
            id: 4,
            display: 'Viễn Tưởng',
            router: '/the-loai/vien-tuong',
            type: RoutingItemTypeEnum.LINK,
            isActive: false
          },
          {
            id: 4,
            display: 'Khoa Học',
            router: '/the-loai/khoa-hoc',
            type: RoutingItemTypeEnum.LINK,
            isActive: false
          },
          {
            id: 4,
            display: 'Phiêu Lưu',
            router: '/the-loai/phieu-luu',
            type: RoutingItemTypeEnum.LINK,
            isActive: false
          },
          {
            id: 4,
            display: 'Âm Nhạc',
            router: '/the-loai/am-nhac',
            type: RoutingItemTypeEnum.LINK,
            isActive: false
          },
          {
            id: 4,
            display: 'Thần Thoại',
            router: '/the-loai/than-thoai',
            type: RoutingItemTypeEnum.LINK,
            isActive: false
          },
          {
            id: 4,
            display: 'Kinh Dị',
            router: '/the-loai/kinh-di',
            type: RoutingItemTypeEnum.LINK,
            isActive: false
          },
          {
            id: 4,
            display: 'Tài Liệu',
            router: '/the-loai/tai-lieu',
            type: RoutingItemTypeEnum.LINK,
            isActive: false
          },
          {
            id: 4,
            display: 'Gia Đình',
            router: '/the-loai/gia-dinh',
            type: RoutingItemTypeEnum.LINK,
            isActive: false
          },
          {
            id: 4,
            display: 'Chính Kịch',
            router: '/the-loai/chinh-kich',
            type: RoutingItemTypeEnum.LINK,
            isActive: false
          },
          {
            id: 4,
            display: 'Bí Ẩn',
            router: '/the-loai/bi-an',
            type: RoutingItemTypeEnum.LINK,
            isActive: false
          },
          {
            id: 4,
            display: 'Học Đường',
            router: '/the-loai/hoc-duong',
            type: RoutingItemTypeEnum.LINK,
            isActive: false
          },
          {
            id: 4,
            display: 'Kinh Điển',
            router: '/the-loai/kinh-dien',
            type: RoutingItemTypeEnum.LINK,
            isActive: false
          },
          {
            id: 4,
            display: 'Tâm Lý',
            router: '/the-loai/tam-ly',
            type: RoutingItemTypeEnum.LINK,
            isActive: false
          },
          {
            id: 4,
            display: 'Phim 18+',
            router: '/the-loai/phim-18+',
            type: RoutingItemTypeEnum.LINK,
            isActive: false
          }
        ]
      },
      {
        id: 6,
        display: 'Sắp Chiếu',
        router: '/sap-chieu',
        type: RoutingItemTypeEnum.LINK,
        isActive: false,
      },
      {
        id: 7,
        display: 'Subteam',
        router: '/danh-sach/subteam',
        type: RoutingItemTypeEnum.LINK,
        isActive: false,
      },
    ]
  }

}
