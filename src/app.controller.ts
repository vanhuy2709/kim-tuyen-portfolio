import { Controller, Get, Post, Render, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth/auth.service';
import { Public } from './decorator/customize';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller("app")
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,//khai báo biến .env thông qua constructor
  ) { }

  @Get()
  @Public()
  @Render('home')
  getHello() {

    const mess = `<p><strong>Amazon.com, Inc.</strong>&nbsp;<a href=\"https:/ / vi.wikipedia.org / wiki / Amazon_(c % C3 % B4ng_ty)#cite_note - 1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[1]</sup></a>&nbsp;(<a href=\"https://en.wikipedia.org/wiki/Help:IPA/English\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">/ˈæməzɒn/</a>) là một&nbsp;<a href=\"https://vi.wikipedia.org/wiki/C%C3%B4ng_ty_%C4%91a_qu%E1%BB%91c_gia\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">công ty công nghệ đa quốc gia</a>&nbsp;của&nbsp;<a href=\"https://vi.wikipedia.org/wiki/M%E1%BB%B9\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Mỹ</a>&nbsp;có trụ sở tại&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Seattle\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Seattle, Washington</a>&nbsp;tập trung vào&nbsp;<a href=\"https://vi.wikipedia.org/wiki/%C4%90i%E1%BB%87n_to%C3%A1n_%C4%91%C3%A1m_m%C3%A2y\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">điện toán đám mây</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Stream\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">truyền phát kỹ thuật số</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Tr%C3%AD_tu%E1%BB%87_nh%C3%A2n_t%E1%BA%A1o\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">trí tuệ nhân tạo</a>&nbsp;và&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Th%C6%B0%C6%A1ng_m%E1%BA%A1i_%C4%91i%E1%BB%87n_t%E1%BB%AD\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">thương mại điện tử</a>. Công ty này được coi là một trong những công ty công nghệ&nbsp;<a href=\"https://vi.wikipedia.org/wiki/B%E1%BB%91n_c%C3%B4ng_ty_c%C3%B4ng_ngh%E1%BB%87_l%E1%BB%9Bn\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Big Four</a>&nbsp;cùng với&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Google\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Google</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Apple_Inc.\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Apple</a>&nbsp;và&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Facebook\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Facebook</a>.<a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)#cite_note-2\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[2]</sup></a><a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)#cite_note-3\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[3]</sup></a><a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)#cite_note-4\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[4]</sup></a></p><p><br></p><p>Amazon được biết đến với việc làm thay đổi tư duy của các ngành&nbsp;<a href=\"https://vi.wikipedia.org/wiki/C%C3%B4ng_nghi%E1%BB%87p\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">công nghiệp</a>&nbsp;đã được thiết lập thông qua đổi mới công nghệ và phát triển quy mô lớn.<a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)#cite_note-5\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[5]</sup></a><a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)#cite_note-6\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[6]</sup></a><a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)#cite_note-7\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[7]</sup></a>&nbsp;Công ty này là&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Th%E1%BB%8B_tr%C6%B0%E1%BB%9Dng_th%C6%B0%C6%A1ng_m%E1%BA%A1i_%C4%91i%E1%BB%87n_t%E1%BB%AD&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">thị trường thương mại điện tử</a>&nbsp;lớn nhất thế giới, nhà cung cấp&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Tr%E1%BB%A3_l%C3%BD_AI&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">trợ lý AI</a>&nbsp;và nền tảng&nbsp;<a href=\"https://vi.wikipedia.org/wiki/%C4%90i%E1%BB%87n_to%C3%A1n_%C4%91%C3%A1m_m%C3%A2y\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">điện toán đám mây</a>&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)#cite_note-8\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[8]</sup></a>&nbsp;được đo bằng&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Doanh_thu\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">doanh thu</a>&nbsp;và&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Gi%C3%A1_tr%E1%BB%8B_v%E1%BB%91n_h%C3%B3a_th%E1%BB%8B_tr%C6%B0%E1%BB%9Dng\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">vốn hóa thị trường</a>.<a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)#cite_note-9\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[9]</sup></a>&nbsp;Amazon là&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Danh_s%C3%A1ch_c%C3%A1c_c%C3%B4ng_ty_Internet_l%E1%BB%9Bn_nh%E1%BA%A5t\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">công ty Internet lớn nhất tính theo doanh thu</a>&nbsp;trên thế giới.<a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)#cite_note-10\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[10]</sup></a>&nbsp;Đây là&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Danh_s%C3%A1ch_c%C3%B4ng_ty_s%E1%BB%AD_d%E1%BB%A5ng_nhi%E1%BB%81u_lao_%C4%91%E1%BB%99ng_nh%E1%BA%A5t_Hoa_K%E1%BB%B3&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">công ty tư nhân lớn thứ hai ở Hoa Kỳ</a><a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)#cite_note-11\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[11]</sup></a>&nbsp;và là một trong những công ty có giá trị nhất thế giới. Amazon là&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Danh_s%C3%A1ch_c%C3%A1c_c%C3%B4ng_ty_c%C3%B4ng_ngh%E1%BB%87_l%E1%BB%9Bn_nh%E1%BA%A5t\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">công ty công nghệ lớn thứ hai</a>&nbsp;tính theo doanh thu.</p><p><br></p><p>Amazon được&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Jeff_Bezos\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Jeff Bezos</a>&nbsp;thành lập vào ngày 5 tháng 7 năm 1994, tại&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Bellevue,_Washington\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Bellevue, Washington</a>. Công ty ban đầu kinh doanh như một nhà phân phối trực tuyến&nbsp;<a href=\"https://vi.wikipedia.org/wiki/S%C3%A1ch\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">sách</a>&nbsp;nhưng sau đó mở rộng thêm để bán đồ điện tử,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Ph%E1%BA%A7n_m%E1%BB%81m\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">phần mềm</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Tr%C3%B2_ch%C6%A1i_video\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">trò chơi video</a>, may mặc,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/%C4%90%E1%BB%93_n%E1%BB%99i_th%E1%BA%A5t\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">đồ nội thất</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Th%E1%BB%B1c_ph%E1%BA%A9m\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">thực phẩm</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/%C4%90%E1%BB%93_ch%C6%A1i\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">đồ chơi</a>&nbsp;và&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Trang_s%E1%BB%A9c\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">trang sức</a>. Năm 2015, Amazon đã vượt qua&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Walmart\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Walmart</a>&nbsp;trở thành nhà bán lẻ có giá trị nhất tại Hoa Kỳ tính theo&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Gi%C3%A1_tr%E1%BB%8B_v%E1%BB%91n_h%C3%B3a_th%E1%BB%8B_tr%C6%B0%E1%BB%9Dng\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">giá trị vốn hóa thị trường</a>.<a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)#cite_note-:3-12\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[12]</sup></a>&nbsp;Vào năm 2017, Amazon đã mua lại&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Whole_Foods_Market\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Whole Foods Market</a>&nbsp;với giá 13,4 tỷ đô la, điều này đã làm tăng đáng kể sự hiện diện của Amazon với tư cách là một nhà bán lẻ truyền thống.<a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)#cite_note-13\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[13]</sup></a>&nbsp;Năm 2018, Bezos tuyên bố rằng dịch vụ giao hàng trong hai ngày của họ,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Amazon_Prime\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Amazon Prime</a>, đã có trên 100 triệu người đăng ký trên toàn thế giới.<a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)#cite_note-14\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[14]</sup></a><a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)#cite_note-15\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[15]</sup></a></p><p><br></p><p>Amazon phân phối tải xuống và phát trực tuyến video, âm nhạc, audiobook thông qua các công ty con&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Amazon_Prime_Video\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Amazon Prime Video</a>,&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Amazon_Music&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">Amazon Music</a>&nbsp;và Audible. Amazon cũng có một chi nhánh xuất bản,&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Amazon_Publishing&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">Amazon Publishing</a>, một hãng phim và truyền hình,&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Amazon_Studios&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">Amazon Studios</a>&nbsp;và một công ty con về điện toán đám mây,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/AWS\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Amazon Web Services</a>. Công ty cũng sản xuất hàng&nbsp;<a href=\"https://vi.wikipedia.org/wiki/%C4%90i%E1%BB%87n_t%E1%BB%AD_ti%C3%AAu_d%C3%B9ng\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">điện tử tiêu dùng</a>&nbsp;bao gồm thiết bị đọc ebook&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Amazon_Kindle\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Kindle</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/M%C3%A1y_t%C3%ADnh_b%E1%BA%A3ng\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">máy tính bảng</a>&nbsp;Fire,&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Fire_TV&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">Fire TV</a>, và các thiết bị&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Amazon_Echo&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">Echo</a>. Ngoài ra, các công ty con của Amazon cũng bao gồm&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Ring_(c%C3%B4ng_ty)&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">Ring</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Twitch.tv\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Twitch.tv</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Whole_Foods_Market\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Whole Foods Market</a>&nbsp;và&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Internet_Movie_Database\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">IMDb</a>. Amazon cũng đã dính vào nhiều scandal, nhiều nhất là bị chỉ trích vì vi phạm giám sát công nghệ,<a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)#cite_note-16\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[16]</sup></a>&nbsp;văn hóa làm việc siêu cạnh tranh và đòi hỏi cao,<a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)#cite_note-linkedin-17\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[17]</sup></a>&nbsp;trốn thuế,<a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)#cite_note-fortune-18\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[18]</sup></a>&nbsp;và thực hành chống cạnh tranh.<a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)#cite_note-baum-19\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[19]</sup></a></p>`
    return {
      mess: mess
    }
  }
}
