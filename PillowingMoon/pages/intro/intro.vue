<template>
	<view class="container-intro">
		<view>
			<image class="intro-img" src="/static/images/Raiden Shogun.jpeg" mode="widthFix"></image>
		</view>
		<view style="text-align: center;">
			<text>使用说明\n</text>
		</view>
		<view class="intro-box">
			<text>请务必将所有用得到的数据填写完整\n</text>
			<text>目前暂不支持百分比输入，请自行转化为小数，例如[1024%=>10.24]\n</text>
			<text>额外倍率指的是超激化、蔓激化、云堇Q、申鹤E等数值型提升，受到除攻击外的其它乘区影响\n</text>
			<text>敌人的抗性多为10%，流浪者机甲虚弱状态下雷系抗性为-80%，其它抗性为-140%\n</text>
			<text>多个减抗系数之间为相加关系\n</text>
			<text>多个减防系数之间为相乘关系\n</text>
			<text>\n</text>
			<text>作者很懒，只制作了单次攻击的伤害计算功能\n</text>
			<text>根据伤害类型限制反应类型（未实现）\n</text>
			<text>敌人抗性通过下拉选择框进行选择（未实现）\n</text>
			<text>导入等级所对应的激化反应系数（未实现）\n</text>
			<text>暂时就先这样\n</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.container-intro {
		text-align: center;
	}

	.intro-img {
		width: 50vw;
		border-radius: 5vw;
		margin-top: 60rpx;
	}

	.intro-box {
		margin: 0 40rpx 0 40rpx;
		border: 2rpx solid #777;
		word-break: break-all;
		text-align: left;
	}
</style>
