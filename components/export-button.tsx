import { FC } from 'react';
import DownloadIcon from './icons/download';

interface Props {
    csv?: {
        loading?: boolean;
        export: () => void;
    },
    excel?: {
        loading?: boolean;
        export: () => void;
    }
}

const ExportButtonGroup: FC<Props> = ({ csv, excel }) => {
    return (
        <div className="flex flex-row-reverse">
            <div className="inline-flex divide-x divide-black/20 bg-blue-500 rounded-lg overflow-hidden">
                {
                    excel &&
                    <button onClick={excel.export} className="bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm py-2 px-3 flex gap-2 items-center">
                        <DownloadIcon className='w-4 h-4' />Excel{excel.loading && '...'}
                    </button>
                }
                {
                    csv &&
                    <button onClick={csv.export} className="bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm py-2 px-3 flex gap-2 items-center">
                        <DownloadIcon className='w-4 h-4' />CSV{csv.loading && '...'}
                    </button>
                }
            </div>
        </div>
    );
};

export default ExportButtonGroup;
