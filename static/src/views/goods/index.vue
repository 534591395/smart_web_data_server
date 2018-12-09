<template>
  <div class="app-container">
    <el-form :inline="false" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="商品名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="商品标题" prop="title">
            <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="商品类型" prop="goodsType">
            <el-select v-model="ruleForm.goodsType" placeholder="请选择商品类型">
            <el-option label="主题" value="T"></el-option>
            <el-option label="组件" value="C"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="销售价" prop="price">
            <el-input v-model="ruleForm.price" type="number"></el-input>
        </el-form-item>
        <el-form-item label="市场价" prop="priceMarket">
            <el-input v-model="ruleForm.priceMarket" type="number"></el-input>
        </el-form-item>
        <el-form-item label="库存" prop="stock">
            <el-input v-model="ruleForm.stock" type="number"></el-input>
        </el-form-item>
        <el-form-item label="商品详情" prop="note">
            <el-input v-model="ruleForm.note"></el-input>
        </el-form-item>
        <el-form-item label="商品状态" prop="goodsStatus">
            <el-select v-model="ruleForm.goodsStatus" placeholder="请选择商品类型">
            <el-option label="新建" value="0"></el-option>
            <el-option label="下架" value="D"></el-option>
            <el-option label="上架" value="U"></el-option>
            <el-option label="删除" value="C"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="操作人" prop="opBy">
            <el-input v-model="ruleForm.opBy"></el-input>
        </el-form-item>

        <el-form-item label="操作时间" required>
            <el-form-item prop="opAt">
                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.opAt" style="width: 100%;"></el-date-picker>
            </el-form-item>
        </el-form-item>
        <el-form-item label="推荐标记" prop="recommendFlag">
            <el-radio-group v-model="ruleForm.recommendFlag">
                <el-radio :label="0">不推荐</el-radio>
                <el-radio :label="1">推荐</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { create } from '@/api/goods'
export default {
  name: 'Login',
  data() {
    return {
     ruleForm: {
          name: '',
          title: '',
          goodsType: '',
          price: '',
          priceMarket: '',
          stock: '',
          note: '',
          goodsStatus: '',
          opBy: '',
          opAt: '',
          recommendFlag: 0
        },
         rules: {
          name: [
            { required: true, message: '请输入商品名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          title: [
            { required: true, message: '请输入商品标题', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          goodsType: [
            { required: true, message: '请选择商品类型', trigger: 'change' }
          ],
          note: [
            { required: true, message: '请输入商品详情', trigger: 'blur' },
            { message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          goodsStatus: [
            { required: true, message: '请选择商品类型', trigger: 'change' }
          ],
          opBy: [
            { required: true, message: '请输入操作人', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          opAt: [
            { required: true, message: '请选择操作时间', trigger: 'change' }
          ],
        }
    }
  },

  methods: {
     submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  },
  created() {
      create({
        name: '',
        title: '',
        goodsType: '',
        price: '',
        priceMarket: '',
        stock: '',
        note: '',
        goodsStatus: '',
        opBy: '',
        opAt: '',
        recommendFlag: 0
      })
      .then(res => {
          cosnole.log(res);
      })
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>


</style>
