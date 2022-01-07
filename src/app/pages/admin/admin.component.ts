import {Component, OnInit, ViewChild} from '@angular/core';
import {Menu} from '@models/menu.model';
import {NzSiderComponent} from "ng-zorro-antd/layout";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {

  isCollapsed = false;
  menus: Menu[] = [
    {
      text: '文章管理',
      icon: 'book',
      children: [
        {
          text: '文章列表',
          link: 'post-list',
          icon: null
        },
        {
          text: '写文章',
          link: 'post-write',
          icon: null
        },
      ]
    },

    {
      text: '个人页',
      icon: 'user',
      children: [
        {
          text: '个人设置',
          link: 'user-setting',
          icon: null
        },
        {
          text: '个人中心',
          link: 'user-center',
          icon: null
        }
      ]
    },
    {
      text: '系统设置',
      icon: 'setting',
      children: [
        {
          text: '系统目录',
          link: 'system-menu',
          icon: null
        },
        {
          text: '博客目录',
          link: 'blog-menu',
          icon: null
        }
      ]
    }
  ]

  @ViewChild('slider') sliderRef!: NzSiderComponent


  constructor() {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.setCollapsedWidth();
    }, 0)
    window.addEventListener("resize", () => {
      this.setCollapsedWidth();
    });
  }

  setCollapsedWidth() {
    if (document.documentElement.clientWidth <= 767) {
      this.isCollapsed = true;
      this.sliderRef.nzCollapsedWidth = 0;
    } else {
      this.sliderRef.nzCollapsedWidth = 80;
    }
  }


  handleTriggerClick() {
    this.isCollapsed = !this.isCollapsed;
  }

}
