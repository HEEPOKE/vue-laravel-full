<template>
    <div class="container justify-content-center mt-3">
        <div class="card">
            <div class="card-body text-white">
                <div>
                    <h3 class="text-dark text-center">Register</h3>
                </div>
            </div>
            <div class="container">
                <div class="mb-3">
                    <label for="Username" class="form-label">Username</label>
                    <input type="text" class="form-control" id="Username" placeholder="Username">
                </div>
                <div class="mb-3">
                    <label for="Email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="Email" placeholder="@example.com">
                </div>
                <div class="mb-3">
                    <label for="Tel" class="form-label">Tel</label>
                    <input type="text" class="form-control" id="Tel" placeholder="xxx-xxx-xxxx">
                </div>
                <div class="mb-3">
                    <label for="Password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="Password" placeholder="password" minlength="8">
                </div>
                <div class="mb-3">
                    <label for="Confrim-Password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="Confrim-Password" placeholder="Confrimpassword"
                        minlength="8">
                </div>
                <div class="text-center">
                    <button type="submit" class="btn btn-primary text-center col-3 my-2 mx-2">ยืนยัน</button>
                    <button class="btn btn-primary col-3" onclick="window.history.back()">ย้อนกลับ</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'RegisterVue',
};
</script>
