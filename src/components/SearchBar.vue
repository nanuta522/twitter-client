<template>
    <div class="row height d-flex justify-content-center align-items-center fixed-top">
        <div class="col-md-6 searchBar">
            <div class="form">
                <i class="fa fa-search"></i>
                <input type="text" class="form-control form-input" placeholder="Search on Twitter...">
            </div>
        </div>
    </div>
</template>

<style scoped>
.searchBar input {
    width: 20rem;
}

.height {
    margin-top: 1rem;
    margin-left: 70rem;
}

.form {
    position: relative;
}

.form .fa-search {
    position: absolute;
    top: 20px;
    left: 20px;
    color: #9ca3af;
}

.form span {
    position: absolute;
    right: 17px;
    top: 13px;
    padding: 2px;
    border-left: 1px solid #d1d5db;

}

.form-input {
    height: 55px;
    text-indent: 33px;
    border-radius: 10px;
}

.form-input:focus {
    box-shadow: none;
    border: none;
}
</style>