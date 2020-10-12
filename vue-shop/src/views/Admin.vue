<template>
  <div class="admin">
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
      <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">
          <!-- sidebar-brand  -->
          <div class="sidebar-item sidebar-brand">
            <a href="#">Vue Shop</a>
          </div>
          <!-- sidebar-header  -->
          <div class="sidebar-item sidebar-header d-flex flex-nowrap">
            <div class="user-pic">
              <!-- <img class="img-responsive img-rounded" src="" alt="User picture"> -->
            </div>
            <div class="user-info">
              <span class="user-name">
                John
                <strong>Smith</strong>
              </span>
              <span class="user-role">Administrator</span>
              <span class="user-status">
                <i class="fa fa-circle"></i>
                <span>Online</span>
              </span>
            </div>
          </div>
          <!-- sidebar-search  -->
          <div class="sidebar-item sidebar-search">
            <div>
              <div class="input-group">
                <input type="text" class="form-control search-menu" placeholder="Search..." />
                <div class="input-group-append">
                  <span class="input-group-text">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- sidebar-menu  -->
          <div class="sidebar-item sidebar-menu">
            <ul>
              <li class="header-menu">
                <span>Menu</span>
              </li>
              <li class="sidebar-dropdown">
                <a href="#">
                  <i class="fa fa-hippo"></i>
                  <span class="menu-text">Overview</span>
                </a>
              </li>
              <li class="sidebar-dropdown">
                <a href="#">
                  <i class="fa fa-cannabis"></i>
                  <span class="menu-text">Products</span>
                </a>
              </li>
              <li class="sidebar-dropdown">
                <a href="#">
                  <i class="fa fa-dragon"></i>
                  <span class="menu-text">Orders</span>
                </a>
              </li>
              <li class="sidebar-dropdown">
                <a href="#">
                  <i class="fa fa-laugh-beam"></i>
                  <span class="menu-text">Logout</span>
                </a>
              </li>
            </ul>
          </div>
          <!-- sidebar-menu  -->
        </div>
        <!-- sidebar-footer  -->
      </nav>
      <!-- page-content  -->
      <main class="page-content pt-2">
        <div id="overlay" class="overlay"></div>
        <div class="container-fluid p-5">
          <div class="row">
            <div class="form-group col-md-12">
              <h2>Sidebar Template</h2>
              <p>This is a responsive sidebar template with dropdown menu based on bootstrap framework.</p>
            </div>

            <div class="form-group col-md-12">
              <a
                id="toggle-sidebar"
                @click="toggleSidebar"
                class="btn btn-secondary rounded-0"
                href="#"
              >
                <span>Toggle Sidebar</span>
              </a>
            </div>
          </div>
        </div>
      </main>
      <!-- page-content" -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import $ from "jquery";

export default {
  name: "Admin",
  components: {
    // HelloWorld
  },
  methods: {
    toggleSidebar() {
      $(".page-wrapper").toggleClass("toggled");
    }
  }
};
</script>
