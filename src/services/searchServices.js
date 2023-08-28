import * as httpRequest from '~/utils/httpRequest';

export const search = async (q, type = 'less') => {
    try {
        const res = await httpRequest.get('users/search', {
            params: {
                q,
                type,
            },
            // Thay vi viet "... ?q=${encodeURIComponent(debounced)}&type=less" thi thay no bang cai Obj o tren.
            //
        }); // encodeURIComponent dung de ma hoa ky tu hop le de khong pham loi ky tu tren Web.
        // .then((res) => res.json())       // Da co Axios roi thi khong can phai code dong nay nua!

        // console.log(res.data.data);  // Test

        return res.data;
    } catch (error) {
        console.log(error);
    }
};
