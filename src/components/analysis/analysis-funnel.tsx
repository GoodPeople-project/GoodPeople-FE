'use client';

import {
  AdditionalInfo,
  CompanyInfo,
  Content,
  FormData,
  OffenderInfo,
  Period,
} from '@/types/analysis';
import { useFunnel } from '@use-funnel/browser';
import { PeriodComponent } from './period-component';
import * as style from './css/analysis-funnel.css';
import { ProcessBar } from './process-bar';
import { FormProvider, useForm } from 'react-hook-form';
import { OffenderInfoComponent } from './offender-info-component';
import { CompanyInfoComponent } from './company-info-component';
import { ContentComponent } from './content-component';
import { AnalysisFooter } from './analsis-footer';
import { AddInformationComponent } from './add-information-component';
import { postAnalysis } from '@/service/analysis';
import { Title } from './title';
import { useMutation } from '@tanstack/react-query';
import { useAuthStore } from '@/store/auth';
import { AnalysisResultResponse } from '@/types/analysis-result';
import { useAnalysisStore } from '@/store/analysis';
import { useRouter } from 'next/navigation';
import { Loading } from '../skeleton/loding';

interface AnanlysisFormData {
  content: string;
  token: string;
}

export function AnalysisFunnel() {
  const funnel = useFunnel<{
    Content: Content;
    Period: Period;
    OffenderInfo: OffenderInfo;
    CompanyInfo: CompanyInfo;
    AdditionalInfo: AdditionalInfo;
  }>({
    id: 'analysis-funnel',
    initial: {
      step: 'Content',
      context: {},
    },
  });

  // 현재 스텝 번호 가져오기
  const getCurrentStepNumber = () => {
    switch (funnel.step) {
      case 'Content':
        return 1;
      case 'Period':
        return 2;
      case 'OffenderInfo':
        return 3;
      case 'CompanyInfo':
        return 4;
      case 'AdditionalInfo':
        return 5;
      default:
        return 1;
    }
  };

  const methods = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      Content: {
        content: '',
      },
      Period: {
        startTime: new Date(),
        endTime: new Date(),
        onGoing: false,
      },
      OffenderInfo: {
        position: '',
        relation: '',
      },
      CompanyInfo: {
        department: '',
        size: 'under5',
      },
      AdditionalInfo: {
        information: '',
      },
    },
  });

  const handleOnNext = <K extends keyof FormData>(nextStep: keyof FormData, currentKey: K) => {
    const values = methods.getValues(currentKey);
    funnel.history.push(nextStep, {
      ...funnel.context,
      [currentKey]: values,
    });
  };

  const handleOnPrevious = () => {
    funnel.history.back();
  };

  const { token } = useAuthStore();
  const { setResult } = useAnalysisStore();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (data: AnanlysisFormData) => postAnalysis(data.content, data.token),
    onSuccess: (data: AnalysisResultResponse) => {
      const arr = data.result.keyword.split(',').map(item => item.trim());

      const resultWithArrayKeyword = {
        ...data.result,
        keyword: arr,
      };

      setResult(resultWithArrayKeyword);
      setTimeout(() => {
        router.push('/analysis/result');
      }, 500);
    },
    onError: (error: Error) => {
      alert('분석할 콘텐츠가 없거나 로그인이 필요합니다.');
      console.error('로그인 실패:', error);
    },
  });

  const handleSubmit = (): void => {
    const context = funnel.context as FormData;
    const content = context.Content?.content || '';

    if (!content || !token) {
      alert('분석할 콘텐츠가 없거나 로그인이 필요합니다.');
      return;
    }

    mutation.mutate({ content, token });
  };

  const handleOnNextByStep = async () => {
    const { trigger } = methods;

    switch (funnel.step) {
      case 'Content': {
        const valid = await trigger('Content');
        if (!valid) return;
        handleOnNext('Period', 'Content');
        break;
      }
      case 'Period': {
        const valid = await trigger('Period');
        if (!valid) return;
        handleOnNext('OffenderInfo', 'Period');
        break;
      }
      case 'OffenderInfo': {
        const valid = await trigger('OffenderInfo');
        if (!valid) return;
        handleOnNext('CompanyInfo', 'OffenderInfo');
        break;
      }
      case 'CompanyInfo': {
        const valid = await trigger('CompanyInfo');
        if (!valid) return;
        handleOnNext('AdditionalInfo', 'CompanyInfo');
        break;
      }
      case 'AdditionalInfo': {
        const valid = await trigger('AdditionalInfo');
        if (!valid) return;
        await handleSubmit();
        break;
      }
    }
  };

  if (mutation.isPending) {
    return <Loading />;
  }

  return (
    <>
      <Title />
      <div className={style.container}>
        <ProcessBar currentStep={getCurrentStepNumber()} />
        <FormProvider {...methods}>
          <div className={style.formWrapper}>
            <funnel.Render
              Content={({}) => <ContentComponent />}
              Period={({}) => <PeriodComponent />}
              OffenderInfo={({}) => <OffenderInfoComponent />}
              CompanyInfo={({}) => <CompanyInfoComponent />}
              AdditionalInfo={({}) => <AddInformationComponent />}
            />
          </div>
          <AnalysisFooter onNext={() => handleOnNextByStep()} onPre={() => handleOnPrevious()} />
        </FormProvider>
      </div>
    </>
  );
}
