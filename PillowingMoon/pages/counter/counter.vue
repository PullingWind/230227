<template>
	<view>
		<view class="container-counter">

			<view class="counter-box-1">
				<!-- Multiplication -->
				<text class="counter-lable">倍率乘区：{{mcl}}</text>
				<view class="counter-box-2">
					<view class="counter-box-3">
						<text class="counter-lable-2">技能倍率</text>
						<input type="digit" placeholder="请输入" v-model="mcl1" @blur="mclChange" />
					</view>
					<view class="counter-box-3">
						<text class="counter-lable-2">额外数值</text>
						<input type="digit" placeholder="请输入" v-model="mcl2" @blur="mclChange" />
					</view>
				</view>
			</view>

			<view class="counter-box">
				<!-- Attack -->
				<text class="counter-lable">攻击乘区：{{atk}}</text>
				<view class="counter-box-2">
					<view class="counter-box-3">
						<text class="counter-lable-2">基础攻击力</text>
						<input type="digit" placeholder="请输入" v-model="atk1" @blur="atkChange" />
					</view>
					<view class="counter-box-3">
						<text class="counter-lable-2">面版攻击力</text>
						<input type="digit" placeholder="请输入" v-model="atk2" @blur="atkChange" />
					</view>
				</view>
				<view class="counter-box-2">
					<view class="counter-box-3">
						<text class="counter-lable-2">额外百分比</text>
						<input type="digit" placeholder="请输入" v-model="atk3" @blur="atkChange" />
					</view>
					<view class="counter-box-3">
						<text class="counter-lable-2">额外数值</text>
						<input type="digit" placeholder="请输入" v-model="atk4" @blur="atkChange" />
					</view>
				</view>
			</view>

			<view class="counter-box">
				<!-- Damage Bonus -->
				<text class="counter-lable">增伤乘区：{{db}}</text>
				<view class="counter-box-2">
					<view class="counter-box-3">
						<text class="counter-lable-2">面版伤害加成</text>
						<input type="digit" placeholder="请输入" v-model="db1" @blur="dbChange" />
					</view>
					<view class="counter-box-3">
						<text class="counter-lable-2">额外伤害加成</text>
						<input type="digit" placeholder="请输入" v-model="db2" @blur="dbChange" />
					</view>
				</view>
				<view class="counter-box-2">
					<view class="counter-box-3">
						<text class="counter-lable-2">伤害类型</text>
						<input type="digit" placeholder="已弃置" v-model="db3" @blur="dbChange" />
					</view>
				</view>
			</view>

			<view class="counter-box-1">
				<!-- Critical Blow -->
				<text class="counter-lable">暴伤乘区：{{cb}}</text>
				<view class="counter-box-2">
					<view class="counter-box-3">
						<text class="counter-lable-2">面版暴伤加成</text>
						<input type="digit" placeholder="请输入" v-model="cb1" @blur="cbChange" />
					</view>
					<view class="counter-box-3">
						<text class="counter-lable-2">额外暴伤加成</text>
						<input type="digit" placeholder="请输入" v-model="cb2" @blur="cbChange" />
					</view>
				</view>
			</view>

			<view class="counter-box-1">
				<!-- Reaction -->
				<text class="counter-lable">反应乘区：{{rxn}}</text>
				<view class="counter-box-2">
					<view class="counter-box-3">
						<text class="counter-lable-2">反应倍率</text>
						<input type="digit" placeholder="请输入" v-model="rxn1" @blur="rxnChange" />
					</view>
					<view class="counter-box-3">
						<text class="counter-lable-2">精通加成系数</text>
						<input type="digit" placeholder="请输入" v-model="rxn2" @blur="rxnChange" />
					</view>
				</view>
			</view>

			<view class="counter-box-1">
				<!-- Resistance -->
				<text class="counter-lable">抗性乘区：{{rst}}</text>
				<view class="counter-box-2">
					<view class="counter-box-3">
						<text class="counter-lable-2">测试对象抗性</text>
						<input type="digit" placeholder="请输入" v-model="rst1" @blur="rstChange" />
					</view>
					<view class="counter-box-3">
						<text class="counter-lable-2">减抗系数</text>
						<input type="digit" placeholder="请输入" v-model="rst2" @blur="rstChange" />
					</view>
				</view>
			</view>

			<view class="counter-box">
				<!-- Defense -->
				<text class="counter-lable">防御乘区：{{def}}</text>
				<view class="counter-box-2">
					<view class="counter-box-3">
						<text class="counter-lable-2">角色等级</text>
						<input type="digit" placeholder="请输入" v-model="def1" @blur="defChange" />
					</view>
					<view class="counter-box-3">
						<text class="counter-lable-2">敌人等级</text>
						<input type="digit" placeholder="请输入" v-model="def2" @blur="defChange" />
					</view>
				</view>
				<view class="counter-box-2">
					<view class="counter-box-3">
						<text class="counter-lable-2">降低防御系数</text>
						<input type="digit" placeholder="请输入" v-model="def3" @blur="defChange" />
					</view>
					<view class="counter-box-3">
						<text class="counter-lable-2">无视防御系数</text>
						<input type="digit" placeholder="请输入" v-model="def4" @blur="defChange" />
					</view>
				</view>
			</view>

			<view style="text-align:center">
				<text>{{result}}</text>
				<button class="counter-btn" @click="countForValue">计算</button>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mcl: '',
				mcl1: '',
				mcl2: '',
				atk: '',
				atk1: '',
				atk2: '',
				atk3: '',
				atk4: '',
				db: '',
				db1: '',
				db2: '',
				cb: '',
				cb1: '',
				cb2: '',
				rxn: '',
				rxn1: '',
				rxn2: '',
				rst: '',
				rst1: '',
				rst2: '',
				rst3: '',
				def: '',
				def1: '',
				def2: '',
				def3: '',
				def4: '',
				def5: '',
				result: '请输入各项必要数值',
				inputValue: ''
			}
		},
		methods: {
			// 倍率
			mclChange() {
				if (this.mcl1 < 0 || this.mcl2 < 0) {
					this.mcl = '输入错误';
				} else {
					this.mcl = this.mcl1 * 1
				}
			},
			// 攻击
			atkChange() {
				if (this.atk1 < 0 || this.atk2 < 0 || this.atk3 < 0 || this.atk4 < 0) {
					this.atk = '输入错误';
				} else {
					this.atk = this.atk2 * 1 + this.atk1 * this.atk3 + this.atk4 * 1;
				}
			},
			// 增伤
			dbChange() {
				if (this.db1 < 0 || this.db2 < 0) {
					this.db = '输入错误';
				} else {
					this.db = 1 + this.db1 * 1 + this.db2 * 1
				}
			},
			// 暴击
			cbChange() {
				if (this.cb1 < 0 || this.cb2 < 0) {
					this.cb = '输入错误';
				} else {
					this.cb = 1 + this.cb1 * 1 + this.cb2 * 1
				}
			},
			// 反应
			rxnChange() {
				if (this.rxn1 < 0 || this.rxn2 < 0) {
					this.rxn = '输入错误';
				} else {
					this.rxn = this.rxn1 * (1 + this.rxn2 * 1)
				}
			},
			// 抗性
			rstChange() {
				this.rst3 = this.rst1 * 1 + this.rst2 * 1;
				if (this.rst3 >= 0 && this.rst3 <= 0.75) {
					this.rst = 1 - this.rst3 * 1;
				} else if (this.rst3 < 0) {
					this.rst = 1 - this.rst3 / 2;
				} else {
					this.rst = 1 - this.rst3 * 4 / (1 + this.rst3 * 4)
				}
			},
			// 防御
			defChange() {
				if (this.def1 < 0 || this.def2 < 0 || this.def3 < 0 || this.defdef4 < 0) {
					this.def = '输入错误';
				} else {
					this.def5 = (this.def2 * 5 + 500) * (1 - this.def3) * (1 - this.def4);
					this.def = 1 - this.def5 / ((this.def1 * 5 + 500) + this.def5 * 1)
				}
			},
			// 结果
			countForValue() {
				if (typeof this.mcl != 'number' || typeof this.atk != 'number' || typeof this.db != 'number' || typeof this
					.cb != 'number' || typeof this.rxn != 'number' || typeof this.rst != 'number' || typeof this.def !=
					'number') {
					this.result = '请检查各项数值是否正确';
				} else {
					this.result = (this.mcl * this.atk + this.mcl2 * 1) * this.db * this.cb * this.rxn * this.rst * this
						.def
				}
			}
		}
	}
</script>

<style>
	.container-counter {
		background-color: white;
		padding-top: 36rpx;
	}

	.counter-box {
		height: 80rpx;
		border: 4rpx solid #777;
		border-radius: 16rpx;
		padding: 14rpx 0 14rpx 0;
		margin: 28rpx 14rpx 28rpx 14rpx;
		position: relative;
	}

	.counter-box-1 {
		height: 40rpx;
		border: 4rpx solid #777;
		border-radius: 16rpx;
		padding: 14rpx 0 14rpx 0;
		margin: 28rpx 14rpx 28rpx 14rpx;
		position: relative;
	}

	.counter-box-3 {
		box-sizing: border-box;
		/* border: 1rpx solid black; */
		width: 50%;
		float: left;
	}

	.counter-box-3 input {
		width: 40%;
		float: right;
		color: rgb(90, 90, 90);
	}

	.counter-box-3 text {
		width: 60%;
		/* background-color: aquamarine; */
		color: black;
		float: left;
		text-align: right;
	}

	.counter-lable {
		background-color: white;
		min-width: 160rpx;
		color: red;
		clear: both;
		padding: 0 8rpx 0 8rpx;
		position: absolute;
		top: -18rpx;
		left: 36rpx;
		font-size: 22rpx;
	}

	.counter-btn {
		width: 240rpx;
		background-color: #f1f3f4;
	}
</style>
