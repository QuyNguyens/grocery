import { ROUTES } from './routes';

export const SEO_METADATA = {
  title: 'Grocery - Top 1 nền tảng mua sắm trực tuyến',
  descriptions:
    'Grocery là nền tảng mua sắm trực tuyến nhanh chóng, giúp bạn có những lựa chọn phù hợp dễ dàng, vận chuyển nhanh chóng.',
};

export const SEO_METADATA_LIST = [
  {
    key: ROUTES.home,
    title: 'Trang chủ - Cửa hàng trực tuyến',
    descriptions:
      'Khám phá các sản phẩm mới nhất và ưu đãi hấp dẫn tại cửa hàng trực tuyến của chúng tôi.',
  },
  {
    key: ROUTES.forgotPassword,
    title: 'Quên mật khẩu',
    descriptions: 'Khôi phục mật khẩu tài khoản của bạn một cách nhanh chóng và an toàn.',
  },
  {
    key: ROUTES.resetPassword,
    title: 'Đặt lại mật khẩu',
    descriptions: 'Thiết lập mật khẩu mới để tiếp tục sử dụng tài khoản của bạn.',
  },
  {
    key: ROUTES.login,
    title: 'Đăng nhập',
    descriptions: 'Đăng nhập để truy cập tài khoản và mua sắm các sản phẩm yêu thích của bạn.',
  },
  {
    key: ROUTES.signup,
    title: 'Đăng ký tài khoản',
    descriptions: 'Tạo tài khoản mới để bắt đầu mua sắm và nhận ưu đãi đặc biệt từ chúng tôi.',
  },
  {
    key: ROUTES.profile,
    title: 'Trang cá nhân',
    descriptions: 'Quản lý thông tin cá nhân và theo dõi đơn hàng của bạn.',
  },
  {
    key: ROUTES.authors,
    title: 'Tác giả',
    descriptions: 'Khám phá các tác giả nổi bật và những tác phẩm nổi tiếng của họ.',
  },
  {
    key: ROUTES.cart,
    title: 'Giỏ hàng',
    descriptions: 'Xem lại các sản phẩm bạn đã thêm vào giỏ và sẵn sàng để thanh toán.',
  },
  {
    key: ROUTES.payment,
    title: 'Thanh toán',
    descriptions: 'Chọn phương thức thanh toán và hoàn tất đơn hàng của bạn một cách an toàn.',
  },
  {
    key: `${ROUTES.collections}${ROUTES.ourStore}`,
    title: 'Cửa hàng của chúng tôi',
    descriptions: 'Khám phá danh mục sản phẩm đa dạng tại cửa hàng trực tuyến của chúng tôi.',
  },
  {
    key: `${ROUTES.collections}${ROUTES.special}`,
    title: 'Ưu đãi đặc biệt',
    descriptions: 'Đừng bỏ lỡ các chương trình khuyến mãi và ưu đãi giới hạn thời gian.',
  },
  {
    key: ROUTES.categories,
    title: 'Danh mục sản phẩm',
    descriptions: 'Tìm kiếm sản phẩm theo danh mục mà bạn yêu thích.',
  },
  {
    key: ROUTES.topDeal,
    title: 'Ưu đãi hàng đầu',
    descriptions: 'Săn ngay các deal hot với mức giá không thể tốt hơn.',
  },
  {
    key: ROUTES.checkout,
    title: 'Thanh toán giỏ hàng',
    descriptions: 'Kiểm tra đơn hàng và hoàn tất thanh toán để nhận sản phẩm nhanh chóng.',
  },
  {
    key: ROUTES.authCallback,
    title: 'Xác thực người dùng',
    descriptions: 'Đang xác thực đăng nhập tài khoản của bạn...',
  },
  {
    key: ROUTES.collections,
    title: 'Bộ sưu tập sản phẩm',
    descriptions: 'Khám phá những bộ sưu tập sản phẩm được tuyển chọn dành riêng cho bạn.',
  },
  {
    key: ROUTES.orderStatus,
    title: 'Trạng thái đơn hàng',
    descriptions: 'Theo dõi trạng thái đơn hàng và cập nhật vận chuyển mới nhất.',
  },
  {
    key: ROUTES.orderDetail,
    title: 'Chi tiết đơn hàng',
    descriptions: 'Xem thông tin chi tiết về đơn hàng đã đặt, bao gồm sản phẩm và thanh toán.',
  },
  {
    key: ROUTES.product,
    title: 'Chi tiết sản phẩm',
    isPrefix: true,
    descriptions: 'Xem thông tin chi tiết về sản phẩm, đánh giá và chính sách mua hàng.',
  },
];
