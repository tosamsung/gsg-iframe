import { Button } from 'antd';
function CofirmWatering() {

    const close = () => {

        WA.player.state.saveVariable("openConfirmWatering", false)

    };
    const confirm = () => {
        if (WA.player.state.loadVariable('confirmWatering')) {
            WA.player.state.saveVariable('confirmWatering', false);
        }
        WA.player.state.saveVariable('confirmWatering', true);
        WA.player.state.saveVariable('openConfirmWatering', false);
        // WA.player.state.saveVariable('openListChickens', false);
    }


    return (
        <div className="min-h-screen mx-auto">
            <div className="bg-orange-50 shadow-lg rounded-lg overflow-hidden">
                <div className="bg-white-400 flex justify-between items-center p-3">
                    <div className='flex'>
                        <h3 className="ml-2 text-xl font-semibold text-black">Bạn muốn tưới cây ?</h3>
                    </div>
                </div>
        
                <div className="bg-slate-100 flex justify-between items-center p-3">
                    <Button type="default" onClick={confirm} className="bg-green-400 text-white">
                        Xác nhận
                    </Button>
                    <Button type="default" onClick={close} className="ml-2 bg-red-400 text-white">
                        hủy
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CofirmWatering;
