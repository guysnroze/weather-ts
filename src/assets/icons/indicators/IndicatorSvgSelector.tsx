import React from 'react';

interface Props {
  id: string;
}

const IndicatorSvgSelector = ({ id }: Props) => {
  switch (id) {
    case 'temp':
      return (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M15.4056 2.98157H19.1056C19.308 2.98157 19.4719 2.81759 19.4719 2.61534C19.4719 2.41309 19.308 2.24911 19.1056 2.24911H15.4056C15.2033 2.24911 15.0394 2.41309 15.0394 2.61534C15.0394 2.81759 15.2033 2.98157 15.4056 2.98157Z"
              fill="#4F667A"
            />
            <path
              d="M15.4056 4.6725H17.2556C17.4579 4.6725 17.6218 4.50853 17.6218 4.30627C17.6218 4.10402 17.4579 3.94005 17.2556 3.94005H15.4056C15.2033 3.94005 15.0394 4.10402 15.0394 4.30627C15.0394 4.50853 15.2033 4.6725 15.4056 4.6725Z"
              fill="#4F667A"
            />
            <path
              d="M19.1063 5.64911H15.4063C15.204 5.64911 15.04 5.81308 15.04 6.01533C15.04 6.21758 15.204 6.38155 15.4063 6.38155H19.1063C19.3086 6.38155 19.4725 6.21758 19.4725 6.01533C19.4725 5.81308 19.3086 5.64911 19.1063 5.64911Z"
              fill="#4F667A"
            />
            <path
              d="M15.4056 8.07249H17.2556C17.4579 8.07249 17.6218 7.90852 17.6218 7.70627C17.6218 7.50401 17.4579 7.34004 17.2556 7.34004H15.4056C15.2033 7.34004 15.0394 7.50401 15.0394 7.70627C15.0394 7.90852 15.2033 8.07249 15.4056 8.07249Z"
              fill="#4F667A"
            />
            <path
              d="M19.1063 9.02394H15.4063C15.204 9.02394 15.04 9.18791 15.04 9.39017C15.04 9.59242 15.204 9.75639 15.4063 9.75639H19.1063C19.3086 9.75639 19.4725 9.59242 19.4725 9.39017C19.4725 9.18791 19.3086 9.02394 19.1063 9.02394Z"
              fill="#4F667A"
            />
            <path
              d="M15.4056 11.4473H17.2556C17.4579 11.4473 17.6218 11.2834 17.6218 11.0811C17.6218 10.8788 17.4579 10.7149 17.2556 10.7149H15.4056C15.2033 10.7149 15.0394 10.8788 15.0394 11.0811C15.0394 11.2834 15.2033 11.4473 15.4056 11.4473Z"
              fill="#4F667A"
            />
            <path
              d="M19.1063 12.4306H15.4063C15.204 12.4306 15.04 12.5946 15.04 12.7968C15.04 12.9991 15.204 13.1631 15.4063 13.1631H19.1063C19.3086 13.1631 19.4725 12.9991 19.4725 12.7968C19.4725 12.5946 19.3086 12.4306 19.1063 12.4306Z"
              fill="#4F667A"
            />
            <path
              d="M17.2556 14.1216H15.4056C15.2033 14.1216 15.0394 14.2855 15.0394 14.4878C15.0394 14.69 15.2033 14.854 15.4056 14.854H17.2556C17.4579 14.854 17.6218 14.69 17.6218 14.4878C17.6218 14.2855 17.4579 14.1216 17.2556 14.1216Z"
              fill="#4F667A"
            />
            <path
              d="M15.9548 19.7869C15.9548 21.1932 15.403 22.5111 14.402 23.499C13.4185 24.4687 12.1216 25 10.7422 25C10.7173 25 10.6924 25 10.6675 24.9995C10.4467 24.9961 10.2285 24.9795 10.0126 24.9487C8.91006 24.7935 7.88561 24.2876 7.07747 23.4872C6.11161 22.5312 5.56178 21.2616 5.52956 19.9134C5.4861 18.0862 6.40264 16.3737 7.93395 15.3937V2.80773C7.93395 1.51275 8.81484 0.419938 10.0092 0.0971718C10.2426 0.0336927 10.4883 0 10.7417 0C12.2896 0 13.5494 1.25933 13.5494 2.80773V15.3937C15.0382 16.3478 15.9548 18.0114 15.9548 19.7869Z"
              fill="#E9F5FF"
            />
            <path
              d="M15.9547 19.7869C15.9547 21.1932 15.4029 22.5111 14.4019 23.499C13.4185 24.4687 12.1216 25 10.7421 25C9.82949 25 9.27722 25 9.27722 25C9.52528 25 9.77089 24.9829 10.0126 24.9487C11.1132 24.7944 12.1308 24.2944 12.937 23.499C13.9385 22.5111 14.4898 21.1932 14.4898 19.7869C14.4898 18.0114 13.5733 17.8215 12.0845 16.8674V2.80773C12.0845 1.51275 11.2031 0.419938 10.0092 0.0971718C10.2426 0.0336927 10.4882 0 10.7416 0C12.2895 0 13.5494 1.25933 13.5494 2.80773V15.3937C15.0382 16.3478 15.9547 18.0114 15.9547 19.7869Z"
              fill="#CDEAF7"
            />
            <path
              d="M14.4899 19.7942C14.4899 20.805 14.0934 21.7528 13.3731 22.4628C12.6665 23.1601 11.7319 23.5424 10.7382 23.5424C10.7212 23.5424 10.7046 23.5424 10.688 23.5419C10.5004 23.5395 10.3149 23.5224 10.1323 23.4926C9.37296 23.3671 8.66883 23.0087 8.10827 22.4535C7.41293 21.7655 7.01692 20.8533 6.99397 19.886C6.96174 18.5202 7.67466 17.2438 8.85439 16.5543C9.18985 16.3585 9.39884 15.9948 9.39884 15.6061V2.81504C9.39884 2.29451 9.69671 1.84186 10.1313 1.61919C10.3144 1.52495 10.5219 1.47221 10.7417 1.47221C11.4819 1.47221 12.084 2.07478 12.084 2.81504V15.6061C12.084 15.9948 12.293 16.3585 12.6285 16.5543C13.7764 17.2253 14.4899 18.4665 14.4899 19.7942Z"
              fill="#FF6E6E"
            />
            <path
              d="M14.4898 19.7942C14.4898 20.805 14.0933 21.7528 13.3731 22.4628C12.6665 23.1601 11.7319 23.5424 10.7382 23.5424C10.7212 23.5424 10.7046 23.5424 10.6879 23.5419C10.5004 23.5395 10.3149 23.5224 10.1323 23.4926C10.8925 23.3686 11.5937 23.0141 12.1524 22.4628C12.8726 21.7528 13.2691 20.805 13.2691 19.7942C13.2691 18.4665 12.5557 17.2253 11.4077 16.5543C11.0722 16.3585 10.8632 15.9948 10.8632 15.6061V2.81504C10.8632 2.29451 10.5654 1.84235 10.1313 1.61919C10.3144 1.52495 10.5219 1.47221 10.7417 1.47221C11.4819 1.47221 12.084 2.07478 12.084 2.81504V15.6061C12.084 15.9948 12.293 16.3585 12.6285 16.5543C13.7764 17.2253 14.4898 18.4665 14.4898 19.7942Z"
              fill="#F44E92"
            />
            <path
              d="M12.084 2.81504V6.01536H9.3988V2.81504C9.3988 2.29451 9.69667 1.84186 10.1313 1.61919C10.3144 1.52495 10.5219 1.47221 10.7416 1.47221C11.4819 1.47221 12.084 2.07478 12.084 2.81504Z"
              fill="#4F667A"
            />
            <path
              d="M12.084 2.81504V6.01536H10.8633V2.81504C10.8633 2.29451 10.5654 1.84235 10.1313 1.61919C10.3144 1.52495 10.5219 1.47221 10.7417 1.47221C11.4819 1.47221 12.084 2.07478 12.084 2.81504Z"
              fill="#3A5366"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="25" height="25" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case 'pressure':
      return (
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M10.1346 0.281303C9.8173 -0.0359516 9.3414 -0.115293 8.9448 0.201998C8.9448 0.201998 8.8655 0.201998 8.8655 0.281303C8.23095 1.07446 2.36151 8.21295 2.36151 11.8615C2.36151 15.8274 5.53416 19 9.50001 19C13.4658 19 16.6385 15.8274 16.6385 11.8615C16.6385 8.21295 10.7691 1.07446 10.1346 0.281303Z"
              fill="url(#paint0_linear)"
            />
            <path
              d="M7.70506 13.9841L12.4722 9.21693L11.3506 8.09526L6.58338 12.8624L7.70506 13.9841Z"
              fill="white"
            />
            <path
              d="M7.12049 10.2752C7.55853 10.2752 7.91364 9.92005 7.91364 9.482C7.91364 9.04396 7.55853 8.68885 7.12049 8.68885C6.68244 8.68885 6.32733 9.04396 6.32733 9.482C6.32733 9.92005 6.68244 10.2752 7.12049 10.2752Z"
              fill="white"
            />
            <path
              d="M11.8795 13.4478C12.3175 13.4478 12.6726 13.0927 12.6726 12.6547C12.6726 12.2166 12.3175 11.8615 11.8795 11.8615C11.4414 11.8615 11.0863 12.2166 11.0863 12.6547C11.0863 13.0927 11.4414 13.4478 11.8795 13.4478Z"
              fill="white"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="3.90806"
              y1="16.383"
              x2="15.0729"
              y2="5.22218"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#34CDFA" />
              <stop offset="1" stopColor="#E8D9F1" />
            </linearGradient>
            <clipPath id="clip0">
              <rect width="19" height="19" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case 'precipitation':
      return (
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.4729 13.2818C15.0438 13.2816 14.6216 13.1734 14.2454 12.9672C13.8691 12.7609 13.5508 12.4633 13.3199 12.1016C13.0891 12.4634 12.7709 12.7612 12.3946 12.9674C12.0184 13.1737 11.5962 13.2818 11.1671 13.2818C10.738 13.2818 10.3158 13.1737 9.93954 12.9674C9.56327 12.7612 9.24504 12.4634 9.01426 12.1016C8.78348 12.4634 8.46526 12.7612 8.08899 12.9674C7.71272 13.1737 7.29053 13.2818 6.86143 13.2818C6.43233 13.2818 6.01015 13.1737 5.63388 12.9674C5.25761 12.7612 4.93938 12.4634 4.7086 12.1016C4.41127 12.5675 3.97085 12.9245 3.45344 13.1188C2.93603 13.3132 2.36954 13.3345 1.839 13.1795C1.30846 13.0245 0.842494 12.7017 0.511028 12.2594C0.179563 11.8171 0.000484444 11.2793 0.000671533 10.7266C0.000671533 10.6199 0.0430535 10.5176 0.118494 10.4421C0.193934 10.3667 0.296252 10.3243 0.402941 10.3243C0.509629 10.3243 0.611948 10.3667 0.687388 10.4421C0.762828 10.5176 0.80521 10.6199 0.80521 10.7266C0.802556 10.9581 0.845876 11.1879 0.932659 11.4026C1.01944 11.6174 1.14797 11.8127 1.31078 11.9774C1.4736 12.1421 1.66748 12.2729 1.88119 12.3621C2.09489 12.4513 2.32418 12.4973 2.55577 12.4973C2.78736 12.4973 3.01665 12.4513 3.23036 12.3621C3.44406 12.2729 3.63794 12.1421 3.80076 11.9774C3.96358 11.8127 4.0921 11.6174 4.17888 11.4026C4.26567 11.1879 4.30899 10.9581 4.30633 10.7266C4.30633 10.6199 4.34871 10.5176 4.42415 10.4421C4.49959 10.3667 4.60191 10.3243 4.7086 10.3243C4.81529 10.3243 4.91761 10.3667 4.99305 10.4421C5.06849 10.5176 5.11087 10.6199 5.11087 10.7266C5.10822 10.9581 5.15154 11.1879 5.23832 11.4026C5.3251 11.6174 5.45363 11.8127 5.61644 11.9774C5.77926 12.1421 5.97314 12.2729 6.18685 12.3621C6.40055 12.4513 6.62984 12.4973 6.86143 12.4973C7.09302 12.4973 7.32231 12.4513 7.53602 12.3621C7.74972 12.2729 7.9436 12.1421 8.10642 11.9774C8.26924 11.8127 8.39776 11.6174 8.48454 11.4026C8.57133 11.1879 8.61465 10.9581 8.61199 10.7266C8.61199 10.6199 8.65437 10.5176 8.72981 10.4421C8.80525 10.3667 8.90757 10.3243 9.01426 10.3243C9.12095 10.3243 9.22327 10.3667 9.29871 10.4421C9.37415 10.5176 9.41653 10.6199 9.41653 10.7266C9.41388 10.9581 9.4572 11.1879 9.54398 11.4026C9.63076 11.6174 9.75929 11.8127 9.9221 11.9774C10.0849 12.1421 10.2788 12.2729 10.4925 12.3621C10.7062 12.4513 10.9355 12.4973 11.1671 12.4973C11.3987 12.4973 11.628 12.4513 11.8417 12.3621C12.0554 12.2729 12.2493 12.1421 12.4121 11.9774C12.5749 11.8127 12.7034 11.6174 12.7902 11.4026C12.877 11.1879 12.9203 10.9581 12.9177 10.7266C12.9177 10.6199 12.96 10.5176 13.0355 10.4421C13.1109 10.3667 13.2132 10.3243 13.3199 10.3243C13.4266 10.3243 13.5289 10.3667 13.6044 10.4421C13.6798 10.5176 13.7222 10.6199 13.7222 10.7266C13.7195 10.9581 13.7629 11.1879 13.8496 11.4026C13.9364 11.6174 14.0649 11.8127 14.2278 11.9774C14.3906 12.1421 14.5845 12.2729 14.7982 12.3621C15.0119 12.4513 15.2412 12.4973 15.4728 12.4973C15.7043 12.4973 15.9336 12.4513 16.1473 12.3621C16.361 12.2729 16.5549 12.1421 16.7177 11.9774C16.8806 11.8127 17.0091 11.6174 17.0959 11.4026C17.1826 11.1879 17.226 10.9581 17.2233 10.7266C17.2233 10.6199 17.2657 10.5176 17.3411 10.4421C17.4166 10.3667 17.5189 10.3243 17.6256 10.3243C17.7323 10.3243 17.8346 10.3667 17.91 10.4421C17.9855 10.5176 18.0279 10.6199 18.0279 10.7266C18.0271 11.404 17.7577 12.0534 17.2787 12.5325C16.7997 13.0115 16.1503 13.281 15.4729 13.2818V13.2818Z"
            fill="#AFD1FD"
          />
          <path
            d="M15.4729 18.0276C15.0438 18.0275 14.6216 17.9192 14.2454 17.7129C13.8691 17.5067 13.5508 17.2089 13.3199 16.8472C13.0892 17.2091 12.771 17.5069 12.3947 17.7132C12.0184 17.9195 11.5962 18.0277 11.1671 18.0277C10.738 18.0277 10.3158 17.9195 9.93951 17.7132C9.56323 17.5069 9.24502 17.2091 9.01428 16.8472C8.78354 17.2091 8.46533 17.5069 8.08905 17.7132C7.71278 17.9195 7.29057 18.0277 6.86145 18.0277C6.43233 18.0277 6.01012 17.9195 5.63385 17.7132C5.25757 17.5069 4.93936 17.2091 4.70862 16.8472C4.41146 17.3134 3.97109 17.6706 3.45363 17.8652C2.93618 18.0598 2.36956 18.0812 1.83887 17.9264C1.30818 17.7715 0.842051 17.4486 0.510477 17.0063C0.178902 16.5639 -0.000221949 16.0259 2.06393e-07 15.4731C2.06393e-07 15.3664 0.0423822 15.2641 0.117822 15.1886C0.193262 15.1132 0.295581 15.0708 0.402269 15.0708C0.508958 15.0708 0.611277 15.1132 0.686717 15.1886C0.762157 15.2641 0.804539 15.3664 0.804539 15.4731C0.801885 15.7047 0.845204 15.9345 0.931988 16.1492C1.01877 16.3639 1.14729 16.5593 1.31011 16.724C1.47293 16.8887 1.66681 17.0194 1.88051 17.1086C2.09422 17.1979 2.32351 17.2438 2.5551 17.2438C2.78669 17.2438 3.01598 17.1979 3.22968 17.1086C3.44339 17.0194 3.63727 16.8887 3.80009 16.724C3.9629 16.5593 4.09143 16.3639 4.17821 16.1492C4.26499 15.9345 4.30831 15.7047 4.30566 15.4731C4.30566 15.3664 4.34804 15.2641 4.42348 15.1886C4.49892 15.1132 4.60124 15.0708 4.70793 15.0708C4.81462 15.0708 4.91694 15.1132 4.99238 15.1886C5.06782 15.2641 5.1102 15.3664 5.1102 15.4731C5.10755 15.7047 5.15086 15.9345 5.23765 16.1492C5.32443 16.3639 5.45296 16.5593 5.61577 16.724C5.77859 16.8887 5.97247 17.0194 6.18617 17.1086C6.39988 17.1979 6.62917 17.2438 6.86076 17.2438C7.09235 17.2438 7.32164 17.1979 7.53535 17.1086C7.74905 17.0194 7.94293 16.8887 8.10575 16.724C8.26857 16.5593 8.39709 16.3639 8.48387 16.1492C8.57066 15.9345 8.61398 15.7047 8.61132 15.4731C8.61132 15.3664 8.6537 15.2641 8.72914 15.1886C8.80458 15.1132 8.9069 15.0708 9.01359 15.0708C9.12028 15.0708 9.2226 15.1132 9.29804 15.1886C9.37348 15.2641 9.41586 15.3664 9.41586 15.4731C9.41321 15.7047 9.45653 15.9345 9.54331 16.1492C9.63009 16.3639 9.75862 16.5593 9.92143 16.724C10.0843 16.8887 10.2781 17.0194 10.4918 17.1086C10.7055 17.1979 10.9348 17.2438 11.1664 17.2438C11.398 17.2438 11.6273 17.1979 11.841 17.1086C12.0547 17.0194 12.2486 16.8887 12.4114 16.724C12.5742 16.5593 12.7027 16.3639 12.7895 16.1492C12.8763 15.9345 12.9196 15.7047 12.917 15.4731C12.917 15.3664 12.9594 15.2641 13.0348 15.1886C13.1102 15.1132 13.2126 15.0708 13.3193 15.0708C13.4259 15.0708 13.5283 15.1132 13.6037 15.1886C13.6791 15.2641 13.7215 15.3664 13.7215 15.4731C13.7189 15.7047 13.7622 15.9345 13.849 16.1492C13.9358 16.3639 14.0643 16.5593 14.2271 16.724C14.3899 16.8887 14.5838 17.0194 14.7975 17.1086C15.0112 17.1979 15.2405 17.2438 15.4721 17.2438C15.7037 17.2438 15.933 17.1979 16.1467 17.1086C16.3604 17.0194 16.5542 16.8887 16.7171 16.724C16.8799 16.5593 17.0084 16.3639 17.0952 16.1492C17.182 15.9345 17.2253 15.7047 17.2226 15.4731C17.2226 15.3664 17.265 15.2641 17.3405 15.1886C17.4159 15.1132 17.5182 15.0708 17.6249 15.0708C17.7316 15.0708 17.8339 15.1132 17.9094 15.1886C17.9848 15.2641 18.0272 15.3664 18.0272 15.4731C18.0263 16.1503 17.7569 16.7995 17.2781 17.2783C16.7992 17.7572 16.1501 18.0266 15.4729 18.0276Z"
            fill="#9AA1EB"
          />
          <path
            d="M10.8167 1.63642L9.29797 0.117912C9.26065 0.0805331 9.21633 0.0508795 9.16754 0.0306469C9.11875 0.0104143 9.06645 0 9.01363 0C8.96081 0 8.9085 0.0104143 8.85971 0.0306469C8.81092 0.0508795 8.7666 0.0805331 8.72928 0.117912L7.21054 1.63642C7.1351 1.71187 7.09271 1.81419 7.09271 1.92088C7.09271 2.02758 7.1351 2.1299 7.21054 2.20534C7.28598 2.28079 7.38831 2.32317 7.495 2.32317C7.6017 2.32317 7.70402 2.28079 7.77946 2.20534L8.61136 1.37345V5.38327C8.61136 5.48996 8.65374 5.59228 8.72918 5.66772C8.80462 5.74316 8.90694 5.78554 9.01363 5.78554C9.12031 5.78554 9.22263 5.74316 9.29807 5.66772C9.37351 5.59228 9.4159 5.48996 9.4159 5.38327V1.37345L10.2478 2.20534C10.2851 2.2427 10.3295 2.27233 10.3783 2.29255C10.4271 2.31277 10.4794 2.32317 10.5322 2.32317C10.5851 2.32317 10.6374 2.31277 10.6862 2.29255C10.735 2.27233 10.7794 2.2427 10.8167 2.20534C10.8541 2.16799 10.8837 2.12364 10.9039 2.07483C10.9241 2.02602 10.9345 1.97371 10.9345 1.92088C10.9345 1.86805 10.9241 1.81574 10.9039 1.76693C10.8837 1.71813 10.8541 1.67378 10.8167 1.63642V1.63642Z"
            fill="#BFFDFF"
          />
          <path
            d="M2.9129 2.86851C2.87556 2.83113 2.83122 2.80147 2.78241 2.78123C2.7336 2.761 2.68128 2.75058 2.62844 2.75058C2.5756 2.75058 2.52328 2.761 2.47447 2.78123C2.42566 2.80147 2.38132 2.83113 2.34398 2.86851L0.825469 4.38702C0.750025 4.46247 0.707642 4.56479 0.707642 4.67149C0.707642 4.77818 0.750025 4.8805 0.825469 4.95595C0.900913 5.03139 1.00324 5.07378 1.10993 5.07378C1.21663 5.07378 1.31895 5.03139 1.39439 4.95595L2.22629 4.12405V8.13388C2.22629 8.24056 2.26867 8.34288 2.34411 8.41832C2.41955 8.49376 2.52187 8.53614 2.62856 8.53614C2.73524 8.53614 2.83756 8.49376 2.913 8.41832C2.98844 8.34288 3.03082 8.24056 3.03082 8.13388V4.12405L3.86272 4.95595C3.9386 5.02921 4.04022 5.06973 4.1457 5.0688C4.25117 5.06786 4.35206 5.02553 4.42663 4.95093C4.50119 4.87633 4.54348 4.77543 4.54438 4.66996C4.54527 4.56448 4.5047 4.46288 4.43141 4.38702L2.9129 2.86851Z"
            fill="#BFFDFF"
          />
          <path
            d="M17.2017 4.38702L15.6832 2.86851C15.6459 2.83113 15.6015 2.80147 15.5527 2.78123C15.5039 2.761 15.4516 2.75058 15.3987 2.75058C15.3459 2.75058 15.2936 2.761 15.2448 2.78123C15.196 2.80147 15.1516 2.83113 15.1143 2.86851L13.5958 4.38702C13.5573 4.42412 13.5267 4.46851 13.5056 4.51758C13.4845 4.56665 13.4734 4.61944 13.4729 4.67285C13.4724 4.72626 13.4826 4.77924 13.5028 4.82868C13.523 4.87812 13.5529 4.92304 13.5907 4.96082C13.6284 4.9986 13.6733 5.02847 13.7228 5.04871C13.7722 5.06895 13.8252 5.07914 13.8786 5.07868C13.932 5.07823 13.9848 5.06714 14.0339 5.04607C14.083 5.025 14.1273 4.99436 14.1645 4.95595L14.9964 4.12405V8.13388C14.9964 8.24056 15.0387 8.34288 15.1142 8.41832C15.1896 8.49376 15.2919 8.53614 15.3986 8.53614C15.5053 8.53614 15.6076 8.49376 15.6831 8.41832C15.7585 8.34288 15.8009 8.24056 15.8009 8.13388V4.12405L16.6328 4.95595C16.7082 5.03139 16.8106 5.07378 16.9172 5.07378C17.0239 5.07378 17.1263 5.03139 17.2017 4.95595C17.2772 4.8805 17.3195 4.77818 17.3195 4.67149C17.3195 4.56479 17.2772 4.46247 17.2017 4.38702V4.38702Z"
            fill="#BFFDFF"
          />
          <path
            d="M6.84429 6.25539C6.79145 6.25536 6.73913 6.26575 6.69031 6.28595C6.64149 6.30616 6.59713 6.33579 6.55977 6.37315C6.52241 6.41051 6.49278 6.45486 6.47258 6.50368C6.45237 6.5525 6.44199 6.60483 6.44202 6.65766V10.0482C6.44202 10.1549 6.4844 10.2572 6.55984 10.3327C6.63528 10.4081 6.7376 10.4505 6.84429 10.4505C6.95098 10.4505 7.05329 10.4081 7.12873 10.3327C7.20418 10.2572 7.24656 10.1549 7.24656 10.0482V6.65789C7.24659 6.60505 7.2362 6.55271 7.216 6.50388C7.1958 6.45505 7.16617 6.41067 7.12882 6.3733C7.09146 6.33592 7.0471 6.30626 6.99828 6.28603C6.94946 6.2658 6.89713 6.25539 6.84429 6.25539V6.25539Z"
            fill="#BFFDFF"
          />
          <path
            d="M11.1831 6.25539C11.1303 6.25536 11.0779 6.26575 11.0291 6.28595C10.9803 6.30616 10.9359 6.33579 10.8986 6.37315C10.8612 6.41051 10.8316 6.45486 10.8114 6.50368C10.7912 6.5525 10.7808 6.60483 10.7808 6.65766V10.0482C10.7808 10.1549 10.8232 10.2572 10.8986 10.3327C10.9741 10.4081 11.0764 10.4505 11.1831 10.4505C11.2898 10.4505 11.3921 10.4081 11.4675 10.3327C11.543 10.2572 11.5854 10.1549 11.5854 10.0482V6.65789C11.5854 6.60505 11.575 6.55271 11.5548 6.50388C11.5346 6.45505 11.505 6.41067 11.4676 6.3733C11.4303 6.33592 11.3859 6.30626 11.3371 6.28603C11.2883 6.2658 11.2359 6.25539 11.1831 6.25539V6.25539Z"
            fill="#BFFDFF"
          />
        </svg>
      );
    case 'wind':
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.087 2.6087C13.9291 2.6087 12.1739 4.36435 12.1739 6.52174C12.1739 6.76174 12.3683 6.95652 12.6087 6.95652C12.8491 6.95652 13.0435 6.76174 13.0435 6.52174C13.0435 4.84348 14.4091 3.47826 16.087 3.47826C17.7648 3.47826 19.1304 4.84348 19.1304 6.52174C19.1304 8.2 17.7648 9.56522 16.087 9.56522H0.434783C0.194783 9.56522 0 9.76 0 10C0 10.24 0.194783 10.4348 0.434783 10.4348H16.087C18.2448 10.4348 20 8.67913 20 6.52174C20 4.36435 18.2448 2.6087 16.087 2.6087Z"
            fill="#007AFF"
          />
          <path
            d="M0.434783 7.82609H7.82609C9.50435 7.82609 10.8696 6.46087 10.8696 4.78261C10.8696 3.10435 9.50435 1.73913 7.82609 1.73913C6.14783 1.73913 4.78261 3.10435 4.78261 4.78261C4.78261 5.02261 4.97739 5.21739 5.21739 5.21739C5.45739 5.21739 5.65217 5.02261 5.65217 4.78261C5.65217 3.58391 6.62739 2.6087 7.82609 2.6087C9.02478 2.6087 10 3.58391 10 4.78261C10 5.98131 9.02478 6.95652 7.82609 6.95652H0.434783C0.194783 6.95652 0 7.15131 0 7.39131C0 7.63131 0.194783 7.82609 0.434783 7.82609Z"
            fill="#007AFF"
          />
          <path
            d="M15.2174 17.3913C14.0187 17.3913 13.0435 16.4161 13.0435 15.2174C13.0435 14.9774 12.8491 14.7826 12.6087 14.7826C12.3683 14.7826 12.1739 14.9774 12.1739 15.2174C12.1739 16.8957 13.5396 18.2609 15.2174 18.2609C16.8952 18.2609 18.2609 16.8957 18.2609 15.2174C18.2609 13.5391 16.8952 12.1739 15.2174 12.1739H0.434783C0.194783 12.1739 0 12.3687 0 12.6087C0 12.8487 0.194783 13.0435 0.434783 13.0435H15.2174C16.4161 13.0435 17.3913 14.0187 17.3913 15.2174C17.3913 16.4161 16.4161 17.3913 15.2174 17.3913Z"
            fill="#007AFF"
          />
        </svg>
      );
    default:
      return null;
  }
};

export default IndicatorSvgSelector;